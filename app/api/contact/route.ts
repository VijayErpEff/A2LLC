import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const runtime = "edge";

const redis = Redis.fromEnv();

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  company: 160,
  budget: 80,
  message: 4000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Submission = {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  honeypot?: string;
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  let body: Partial<Submission>;
  try {
    body = (await req.json()) as Partial<Submission>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; real users don't.
  if (body.honeypot && body.honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = clean(body.name, MAX_LENGTHS.name);
  const email = clean(body.email, MAX_LENGTHS.email);
  const company = clean(body.company, MAX_LENGTHS.company);
  const budget = clean(body.budget, MAX_LENGTHS.budget);
  const message = clean(body.message, MAX_LENGTHS.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please use a valid email." }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "";
  const userAgent = req.headers.get("user-agent") || "";

  const record = {
    id,
    submittedAt,
    name,
    email,
    company,
    budget,
    message,
    ip,
    userAgent,
  };

  try {
    await Promise.all([
      redis.lpush("contact:submissions", JSON.stringify(record)),
      redis.hset(`contact:submission:${id}`, record),
    ]);
  } catch (err) {
    console.error("upstash write failed", err);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id }, { status: 200 });
}
