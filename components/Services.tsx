"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Smartphone,
  Globe,
  Database,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: ".NET Engineering",
    blurb:
      "Production-grade APIs, services, and back-office systems on .NET 8, ASP.NET Core, and EF Core — built to scale and survive in real environments.",
    bullets: ["Web APIs & microservices", "Blazor & Razor web apps", "Background workers"],
    gradient: "from-accent-cyan to-accent-blue",
  },
  {
    icon: Cloud,
    title: "Azure Cloud",
    blurb:
      "Architect, deploy, and operate workloads on Azure. App Service, Functions, AKS, Service Bus, Key Vault — wired up the right way from day one.",
    bullets: ["Cloud architecture", "DevOps & CI/CD", "Cost & observability"],
    gradient: "from-accent-blue to-accent-violet",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    blurb:
      "Native-feeling iOS & Android apps built with React Native and .NET MAUI. Offline-first, store-ready, and tightly integrated with your backend.",
    bullets: ["React Native", ".NET MAUI", "App Store delivery"],
    gradient: "from-accent-violet to-accent-fuchsia",
  },
  {
    icon: Globe,
    title: "Web Applications",
    blurb:
      "Modern web products with React, Next.js, and TypeScript. Fast, accessible, animated where it matters — engineered for conversion and trust.",
    bullets: ["React & Next.js", "Design systems", "Performance budgets"],
    gradient: "from-accent-fuchsia to-accent-blue",
  },
  {
    icon: Database,
    title: "Data & Integrations",
    blurb:
      "SQL Server, Azure SQL, Cosmos DB, and clean integrations with Dynamics 365, Power BI, and the systems your business already runs on.",
    bullets: ["SQL & NoSQL", "ETL & sync", "Reporting & BI"],
    gradient: "from-accent-cyan to-accent-violet",
  },
  {
    icon: Workflow,
    title: "Power Platform",
    blurb:
      "Power Apps, Power Automate, and Dataverse solutions that turn manual workflows into automated, audited, and observable processes.",
    bullets: ["Power Apps", "Power Automate", "Dataverse modeling"],
    gradient: "from-accent-blue to-accent-fuchsia",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mt-32 sm:mt-44 scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="section-eyebrow"
          >
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="heading-display mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl"
          >
            Senior engineering across the{" "}
            <span className="text-gradient-accent">Microsoft stack</span>{" "}
            and beyond.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-balance text-white/60"
          >
            We embed with your team or build standalone — from a single feature to a
            full product. Every engagement is led by a senior engineer.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-white/20"
            >
              {/* Gradient glow on hover */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />

              <div className="flex items-center justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.gradient} shadow-[0_10px_30px_-12px_rgba(139,92,246,0.6)]`}
                >
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" />
              </div>

              <h3 className="heading-display mt-5 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.blurb}</p>

              <ul className="mt-5 space-y-1.5 text-sm text-white/55">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${s.gradient}`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
