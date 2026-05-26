"use client";
import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Building2, Users } from "lucide-react";

const stats = [
  { v: "2022", l: "Founded" },
  { v: "VA", l: "Registered in" },
  { v: "100%", l: "Senior engineering" },
  { v: ".NET + Web", l: "Specialty" },
];

export default function About() {
  return (
    <section id="about" className="relative mt-32 sm:mt-44 scroll-mt-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl"
          />

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="section-eyebrow"
              >
                About A2 LLC
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="heading-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
              >
                A small studio with{" "}
                <span className="text-gradient-accent">enterprise muscle</span>.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 text-white/65 leading-relaxed"
              >
                A2 LLC is a Virginia-registered software studio. We help teams
                ship serious products on the Microsoft stack, alongside modern
                mobile and web applications. Lean by design — every engagement
                is led by a senior engineer who writes code, runs deploys, and
                owns outcomes.
              </motion.p>

              <ul className="mt-7 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent-cyan" />
                  US-registered LLC · EIN 88-2991817
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-accent-blue" />
                  Microsoft-stack specialists
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-violet" />
                  Chantilly, Virginia
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent-fuchsia" />
                  Senior-only engineering
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-ink-900/60 p-6"
                >
                  <div className="heading-display text-3xl font-semibold text-white sm:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
