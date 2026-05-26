import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const redis = Redis.fromEnv();

const gmailUser = process.env.GMAIL_USER || "";
const gmailPass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
const fromName = process.env.MAIL_FROM_NAME || "A2";
const adminTo = process.env.MAIL_ADMIN_TO || gmailUser;

const transporter =
  gmailUser && gmailPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      })
    : null;

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

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function adminEmail(record: Record<string, string>) {
  const { name, email, company, budget, message, submittedAt, id, ip } = record;
  const text = [
    `New A2 contact submission`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || "—"}`,
    `Budget:  ${budget || "—"}`,
    ``,
    `Message:`,
    message,
    ``,
    `---`,
    `Submitted: ${submittedAt}`,
    `IP:        ${ip || "—"}`,
    `ID:        ${id}`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#14141a;max-width:560px;line-height:1.5">
      <h2 style="margin:0 0 8px;font-size:18px;font-weight:600;letter-spacing:-0.01em">New contact submission</h2>
      <p style="margin:0 0 20px;color:#52525a;font-size:13px">${escape(submittedAt)}</p>
      <table style="border-collapse:collapse;font-size:14px;width:100%;margin-bottom:20px">
        <tbody>
          <tr><td style="padding:4px 12px 4px 0;color:#71717a;width:90px">Name</td><td style="padding:4px 0">${escape(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#71717a">Email</td><td style="padding:4px 0"><a href="mailto:${escape(email)}" style="color:#2540b5">${escape(email)}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#71717a">Company</td><td style="padding:4px 0">${escape(company) || "—"}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#71717a">Budget</td><td style="padding:4px 0">${escape(budget) || "—"}</td></tr>
        </tbody>
      </table>
      <div style="border-left:3px solid #2540b5;padding:0 0 0 14px;white-space:pre-wrap;font-size:14px;color:#14141a">${escape(message)}</div>
      <p style="margin-top:24px;color:#a1a1aa;font-size:12px">IP ${escape(ip || "—")} · ID ${escape(id)}</p>
    </div>`;

  return { text, html };
}

function userEmail(record: Record<string, string>) {
  const { name, message } = record;
  const firstName = name.split(/\s+/)[0] || name;

  const text = [
    `Hi ${firstName},`,
    ``,
    `Thanks for reaching out to A2 — we got your message and we'll come back`,
    `within one business day with a plan and an honest estimate.`,
    ``,
    `For reference, here's what you sent:`,
    ``,
    message
      .split("\n")
      .map((l) => `  ${l}`)
      .join("\n"),
    ``,
    `— The A2 team`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#14141a;max-width:560px;line-height:1.55">
      <p style="margin:0 0 16px;font-size:16px">Hi ${escape(firstName)},</p>
      <p style="margin:0 0 16px;font-size:15px">Thanks for reaching out to A2 — we got your message and we'll come back within one business day with a plan and an honest estimate.</p>
      <p style="margin:0 0 8px;font-size:13px;color:#71717a;text-transform:uppercase;letter-spacing:0.08em">For your reference</p>
      <div style="border-left:3px solid #2540b5;padding:0 0 0 14px;white-space:pre-wrap;font-size:14px;color:#14141a;margin:0 0 24px">${escape(message)}</div>
      <p style="margin:0;font-size:15px">— The A2 team</p>
      <hr style="border:none;border-top:1px solid #e5dfce;margin:28px 0 14px"/>
      <p style="margin:0;color:#a1a1aa;font-size:12px">A2 · Engineering Studio · Chantilly, Virginia</p>
    </div>`;

  return { text, html };
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
    const url = process.env.UPSTASH_REDIS_REST_URL || "";
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || "";
    const diag = {
      hasUrl: Boolean(url),
      hasToken: Boolean(token),
      urlStartsWith: url.slice(0, 30),
      urlHasQuotes: url.includes('"'),
      urlHasSpaces: url !== url.trim(),
      tokenLength: token.length,
      tokenHasQuotes: token.includes('"'),
      tokenHasSpaces: token !== token.trim(),
      message: err instanceof Error ? err.message : String(err),
    };
    console.error("upstash write failed", diag);
    return NextResponse.json(
      { error: "Could not save your message. Please try again.", diag },
      { status: 500 },
    );
  }

  // Best-effort email: failures get logged but don't fail the request,
  // since the submission is already persisted in Redis.
  if (transporter) {
    const from = `"${fromName}" <${gmailUser}>`;
    const admin = adminEmail(record);
    const user = userEmail(record);

    const results = await Promise.allSettled([
      transporter.sendMail({
        from,
        to: adminTo,
        replyTo: `"${name}" <${email}>`,
        subject: `New A2 contact: ${name}${company ? ` · ${company}` : ""}`,
        text: admin.text,
        html: admin.html,
      }),
      transporter.sendMail({
        from,
        to: `"${name}" <${email}>`,
        subject: "We got your message — A2",
        text: user.text,
        html: user.html,
      }),
    ]);
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`contact email ${i === 0 ? "admin" : "user"} failed`, r.reason);
      }
    });
  }

  return NextResponse.json({ ok: true, id }, { status: 200 });
}
