"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const cyclingWords = ["software", "AI agents", "platforms", "products"];

export default function Hero() {
  const [w, setW] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const titleOp = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setW((p) => (p + 1) % cyclingWords.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-36 sm:pt-44 lg:pt-52">
      {/* Floating editorial blob */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-32 top-24 -z-10 hidden lg:block"
      >
        <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-accent-electric/15 via-accent-violet/15 to-accent-fuchsia/10 blur-3xl" />
      </motion.div>

      <div className="container-x relative">
        {/* Top meta row */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="label-eyebrow"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            A2 · Engineering Studio · est. 2022
          </motion.span>
        </div>

        {/* Headline */}
        <motion.h1
          style={{ y: titleY, opacity: titleOp }}
          className="heading-display text-center text-[10.4vw] leading-[0.96] sm:text-[8.6vw] lg:text-[8rem] xl:text-[9.1rem]"
        >
          <RevealLine delay={0.15}>
            <span className="font-medium tracking-tightest">We engineer</span>
          </RevealLine>

          <div className="my-2 flex flex-wrap items-baseline justify-center gap-x-6 sm:gap-x-8">
            <motion.span
              initial={{ opacity: 0, y: 28, skewX: -1.5 }}
              animate={{ opacity: 1, y: 0, skewX: -1.5 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative inline-grid italic"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.78em",
                lineHeight: 1.35,
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                paddingTop: "0.2em",
                paddingBottom: "0.55em",
                overflow: "visible",
              }}
            >
              {/* Every measurement word + the visible cycling word share the same grid cell. The visible word is a real grid item, so the parent's padding actually pushes it inward — giving the italic slant and descenders room to render. */}
              {cyclingWords.map((word) => (
                <span
                  key={`measure-${word}`}
                  aria-hidden
                  style={{ gridArea: "1 / 1", visibility: "hidden", whiteSpace: "pre" }}
                >
                  {word}
                </span>
              ))}
              <AnimatePresence mode="wait">
                <motion.span
                  key={cyclingWords[w]}
                  initial={{ y: "85%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-85%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-accent-grad"
                  style={{ gridArea: "1 / 1", whiteSpace: "pre" }}
                >
                  {cyclingWords[w]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
            <RevealLine delay={0.45}>
              <span className="font-medium tracking-tightest">built to ship.</span>
            </RevealLine>
          </div>
        </motion.h1>

        {/* Lead + CTAs */}
        <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-lg leading-snug text-ink-soft sm:text-xl"
          >
            A small senior studio building on the{" "}
            <span className="marker font-medium text-ink-900">Microsoft stack</span>,
            shipping <span className="marker font-medium text-ink-900">agentic AI</span>{" "}
            with M365 Copilot, and crafting{" "}
            <span className="marker font-medium text-ink-900">mobile &amp; web</span>{" "}
            products that customers actually use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-3 lg:justify-end"
          >
            <MagneticButton href="#contact">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <a href="#services" className="btn-outline">
              See what we build
            </a>
          </motion.div>
        </div>

        {/* Live status row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid gap-4 border-t border-ink-900/10 pt-8 sm:grid-cols-3"
        >
          <Stat label="Engagements led by" value="Senior engineers only" />
          <Stat label="Building on" value=".NET · Azure · React · AI" />
          <Stat label="Based in" value="Chantilly, Virginia" />
        </motion.div>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "125%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
        style={{ lineHeight: 1.22, paddingBottom: "0.12em" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="label-eyebrow">{label}</span>
      <span className="text-base text-ink-900">{value}</span>
    </div>
  );
}

