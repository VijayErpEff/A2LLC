"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Github, ShieldCheck, Zap } from "lucide-react";

const headline = ["Engineering", "software", "that ships."];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate pt-32 sm:pt-40 lg:pt-48">
      {/* Glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={reduce ? undefined : { y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-24 h-80 w-80 rounded-full bg-accent-blue/30 blur-[120px]"
        />
        <motion.div
          animate={reduce ? undefined : { y: [0, 24, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[6%] top-40 h-96 w-96 rounded-full bg-accent-violet/30 blur-[140px]"
        />
        <motion.div
          animate={reduce ? undefined : { y: [0, -16, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-1/2 top-72 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-cyan/20 blur-[120px]"
        />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
            Microsoft Stack · Mobile · Web
          </span>
        </motion.div>

        <h1 className="heading-display mt-6 text-center text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          {headline.map((word, i) => (
            <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + i * 0.08,
                }}
                className={`inline-block pr-3 ${
                  i === 2 ? "text-gradient-accent" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-white/65 sm:text-lg"
        >
          A2 LLC is a software studio building production-grade products on the
          Microsoft stack — from <span className="text-white">.NET &amp; Azure</span> platforms to
          <span className="text-white"> custom mobile and web apps</span> teams actually use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#contact" className="btn-primary">
            Start a project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="btn-ghost">
            Explore services
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <span className="chip"><ShieldCheck className="h-3.5 w-3.5 text-accent-cyan" /> US-registered LLC · EIN 88-2991817</span>
          <span className="chip"><Zap className="h-3.5 w-3.5 text-accent-fuchsia" /> Senior engineering only</span>
          <span className="chip"><Github className="h-3.5 w-3.5 text-white/70" /> Production-first delivery</span>
        </motion.div>

        {/* Floating preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="glass ring-soft relative overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="rounded-2xl bg-ink-900/80 p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="ml-3 text-xs text-white/40">a2llc.com — engagement</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { k: "Discovery", v: "Week 1", c: "from-accent-cyan to-accent-blue" },
                  { k: "Build", v: "Weeks 2–8", c: "from-accent-blue to-accent-violet" },
                  { k: "Launch", v: "Week 9+", c: "from-accent-violet to-accent-fuchsia" },
                ].map((item, i) => (
                  <motion.div
                    key={item.k}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                  >
                    <div className={`mb-3 inline-block h-1.5 w-10 rounded-full bg-gradient-to-r ${item.c}`} />
                    <div className="text-xs uppercase tracking-widest text-white/40">{item.k}</div>
                    <div className="heading-display mt-1 text-2xl text-white">{item.v}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-2 text-xs text-white/50 sm:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="text-white/40">Stack ›</span> .NET 8 · ASP.NET Core · Blazor · Azure · SQL Server · Power Platform
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="text-white/40">Apps ›</span> React · Next.js · React Native · .NET MAUI · TypeScript
                </div>
              </div>
            </div>
          </div>

          {/* Edge glow */}
          <div aria-hidden className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-accent-cyan/20 via-accent-violet/20 to-accent-fuchsia/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
