"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Discover",
    body:
      "We map the real problem, stakeholders, and constraints. You leave the first week with a written technical plan and a fixed scope for phase one.",
  },
  {
    n: "02",
    title: "Design",
    body:
      "Architecture, data model, integration contracts, and UI flows — decided up front so build velocity stays high and surprises stay low.",
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
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative mt-36 scroll-mt-24 sm:mt-52">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="label-eyebrow">How we work</span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="heading-display mt-5 text-5xl text-ink-900 sm:text-6xl lg:text-7xl"
            >
              Built for teams
              <br />
              <span className="italic text-accent-grad">that ship.</span>
            </motion.h2>
            <p className="mt-5 max-w-md text-lg leading-snug text-ink-soft">
              No 80-page decks. No theater. Just a tight loop of decisions,
              demos, and shipped code — driven by the people writing it.
            </p>
          </div>

          <div ref={ref} className="relative">
            {/* Scroll-linked progress line */}
            <div className="absolute left-7 top-0 hidden h-full w-px bg-ink-900/10 sm:block" aria-hidden>
              <motion.div
                style={{ height: lineH }}
                className="w-px bg-gradient-to-b from-accent-electric via-accent-violet to-accent-fuchsia"
              />
            </div>

            <ol className="space-y-12 sm:pl-16">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span
                    aria-hidden
                    className="absolute -left-16 top-2 hidden h-3 w-3 rounded-full bg-ink-900 ring-4 ring-paper sm:block"
                  />
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-ink-mute">{s.n}</span>
                    <h3 className="heading-display text-4xl text-ink-900 sm:text-5xl">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-2xl text-ink-soft sm:text-lg">{s.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
