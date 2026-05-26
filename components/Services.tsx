"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import TiltCard from "./TiltCard";

const grid = [
  {
    icon: "dotnet" as const,
    title: ".NET Engineering",
    blurb:
      "Production APIs, services, and back-office systems on .NET 8, ASP.NET Core, EF Core. Built to scale and survive in real environments.",
    bullets: ["Web APIs & microservices", "Blazor & Razor", "Background workers"],
  },
  {
    icon: "cloud" as const,
    title: "Azure Cloud",
    blurb:
      "Architect, deploy, and operate workloads on Azure — App Service, Functions, AKS, Service Bus, Key Vault — wired up the right way from day one.",
    bullets: ["Cloud architecture", "DevOps & CI/CD", "Cost & observability"],
  },
  {
    icon: "mobile" as const,
    title: "Mobile Apps",
    blurb:
      "Native-feeling iOS & Android apps with React Native and .NET MAUI. Offline-first, store-ready, integrated with your backend.",
    bullets: ["React Native", ".NET MAUI", "App Store delivery"],
  },
  {
    icon: "web" as const,
    title: "Web Applications",
    blurb:
      "Modern web products with React, Next.js, and TypeScript. Fast, accessible, and animated where it counts — engineered for conversion.",
    bullets: ["React & Next.js", "Design systems", "Performance budgets"],
  },
  {
    icon: "data" as const,
    title: "Data & Integrations",
    blurb:
      "SQL Server, Azure SQL, Cosmos DB, and clean integrations with Dynamics 365, Power BI, and the systems your business already runs on.",
    bullets: ["SQL & NoSQL", "ETL & sync", "Reporting & BI"],
  },
  {
    icon: "power" as const,
    title: "Power Platform",
    blurb:
      "Power Apps, Power Automate, and Dataverse solutions that turn manual workflows into automated, audited, observable processes.",
    bullets: ["Power Apps", "Power Automate", "Dataverse"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mt-40 scroll-mt-24 sm:mt-56">
      <div className="container-x">
        {/* Header */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="label-eyebrow"
            >
              <span className="inline-block h-px w-6 bg-ink-900/40" />
              What we build
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="heading-display mt-5 text-5xl text-ink-900 sm:text-6xl lg:text-7xl"
            >
              Senior engineering,
              <br />
              <span className="italic text-accent-grad">end&#8209;to&#8209;end.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-lg leading-snug text-ink-soft"
          >
            We embed with your team or build standalone — from a single feature
            to a full product. Every engagement is led by a senior engineer who
            writes code, runs deploys, and owns outcomes.
          </motion.p>
        </div>

        {/* Featured AI card */}
        <FeaturedAI />

        {/* Grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full rounded-3xl border border-ink-900/8 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:bg-white">
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-paper">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-mute" />
                </div>
                <h3 className="heading-display mt-6 text-3xl text-ink-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="rounded-full border border-ink-900/10 px-2.5 py-1 text-xs text-ink-soft">
                      {b}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedAI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16"
    >
      <TiltCard intensity={3} className="relative overflow-hidden rounded-[32px] bg-ink-900 text-paper">
        {/* Animated AI mesh */}
        <AIMesh />

        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/80">
              <Sparkles className="h-3 w-3" />
              New · Featured practice
            </span>
            <h3 className="heading-display mt-5 text-4xl sm:text-5xl lg:text-6xl">
              Agentic AI development
              <br />
              <span className="italic text-paper/70">for Microsoft 365.</span>
            </h3>
            <p className="mt-5 max-w-xl text-paper/65 sm:text-lg">
              We build production AI agents on Azure OpenAI, Copilot Studio,
              and Microsoft 365 Copilot — grounded on your data, governed by
              your policies, and actually used by your team.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Azure OpenAI",
                "M365 Copilot",
                "Copilot Studio",
                "Semantic Kernel",
                "RAG pipelines",
                "Agent orchestration",
                "Tool use & function calling",
                "Evaluation & guardrails",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-paper/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-paper"
            >
              <span className="link-underline">Talk to us about Copilot for your team</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right column visual */}
          <AIShowcase />
        </div>
      </TiltCard>
    </motion.div>
  );
}

function AIMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-accent-electric/40 via-accent-violet/30 to-accent-fuchsia/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-accent-fuchsia/20 to-accent-electric/30 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
        <defs>
          <pattern id="ai-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-grid)" />
      </svg>
    </div>
  );
}

function AIShowcase() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[11px] text-paper/50">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          a2 · agent.run · vNext
        </div>
        <div className="mt-3 space-y-2 font-mono text-[12px] leading-relaxed text-paper/85">
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-accent-fuchsia">user</span> &gt; summarize this week&apos;s pipeline by owner.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="rounded-lg bg-white/[0.04] p-2.5"
          >
            <div className="text-paper/55">tool · dynamics.opportunities.query</div>
            <div className="mt-1">→ 42 records · 7 owners · $1.2M open</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85 }}
            className="rounded-lg bg-white/[0.04] p-2.5"
          >
            <div className="text-paper/55">tool · m365.outlook.draft</div>
            <div className="mt-1">→ drafted summary email · ready in Outlook</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.15 }}
          >
            <span className="text-emerald-400">agent</span> &gt; sent draft to your Outlook · 3 follow-ups scheduled.
          </motion.div>
        </div>
      </div>

      {/* Side floating chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute -top-3 right-4 rotate-2 rounded-full border border-white/15 bg-paper px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-ink-900"
      >
        grounded · governed
      </motion.div>
    </div>
  );
}
