"use client";
import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <motion.span
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 90 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet shadow-[0_8px_30px_-10px_rgba(139,92,246,0.7)]"
      >
        <span className="heading-display text-lg font-bold text-white drop-shadow">A²</span>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </motion.span>
      <span className="heading-display text-lg font-semibold tracking-tight">
        A2 <span className="text-white/50">LLC</span>
      </span>
    </a>
  );
}
