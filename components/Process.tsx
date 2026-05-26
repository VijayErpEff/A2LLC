"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    body:
      "We map the real problem, the stakeholders, and the constraints. You leave the first week with a written technical plan and a fixed scope for phase one.",
  },
  {
    n: "02",
    title: "Design",
    body:
      "Architecture, data model, integration contracts, and UI flows. Decided up front — so build velocity stays high and surprises stay low.",
  },
  {
    n: "03",
    title: "Build",
    body:
      "Weekly demos against your real environment. PRs are small, CI is green, and the product is deployable from day one — not week ten.",
  },
  {
    n: "04",
    title: "Ship & support",
    body:
      "Launch on Azure with monitoring, alerting, and a runbook. We hand off cleanly — or stay on retainer to keep building.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative mt-32 sm:mt-44 scroll-mt-24">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="section-eyebrow"
            >
              How we work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="heading-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            >
              A process built for{" "}
              <span className="text-gradient-accent">teams that ship</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-md text-white/60"
            >
              No 80-page decks, no theater. Just a tight loop of decisions,
              demos, and shipped code.
            </motion.p>
          </div>

          <ol className="relative space-y-4">
            <div
              aria-hidden
              className="absolute left-[1.625rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-cyan/60 via-accent-violet/40 to-transparent sm:block"
            />
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/20"
              >
                <div className="relative">
                  <div className="heading-display grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-900 text-sm font-semibold text-white/90">
                    {s.n}
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/40 via-accent-violet/40 to-accent-fuchsia/40 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />
                </div>
                <div>
                  <h3 className="heading-display text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {s.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
