"use client";
import { motion } from "framer-motion";

const stats = [
  { v: "2022", l: "Founded" },
  { v: "VA · US", l: "Registered in" },
  { v: "Senior-only", l: "Engineering" },
  { v: "AI · .NET · Web", l: "Specialty" },
];

export default function About() {
  return (
    <section id="about" className="relative mt-36 scroll-mt-24 sm:mt-52">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="label-eyebrow">Studio</span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="heading-display mt-5 text-5xl text-ink-900 sm:text-6xl lg:text-7xl"
            >
              A small studio with
              <br />
              <span className="italic text-accent-grad">enterprise muscle.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft"
            >
              <p>
                A2 LLC is a Virginia-registered engineering studio. We help
                teams ship serious products on the Microsoft stack — alongside
                modern AI agents, mobile, and web applications.
              </p>
              <p>
                Lean by design. Every engagement is led by a senior engineer
                who writes the code, runs the deploys, and owns the outcome.
                You always know who is building your product.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="rounded-2xl border border-ink-900/8 bg-white/60 p-6 backdrop-blur-sm"
              >
                <div className="heading-display text-3xl text-ink-900 sm:text-4xl">{s.v}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
