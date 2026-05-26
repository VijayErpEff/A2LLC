"use client";
import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  return (
    <a
      href="#"
      onClick={scrollToTop}
      aria-label="A2 — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <motion.span
        whileHover={{ rotate: -6 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className="relative inline-block"
      >
        <svg viewBox="0 0 40 40" width="44" height="44" aria-hidden="true" className="block">
          <defs>
            <linearGradient id="a2-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2540b5" />
              <stop offset="55%" stopColor="#6b4bf0" />
              <stop offset="100%" stopColor="#f25e3f" />
            </linearGradient>
            <linearGradient id="a2-echo" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2540b5" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#f25e3f" stopOpacity="0.32" />
            </linearGradient>
          </defs>

          {/* Echo A — brand-tinted shadow for depth */}
          <path
            d="M22 9 L34 33 L29 33 L26.5 28.5 L19.5 28.5 L17 33 L12 33 Z M22 16.5 L24.5 22 L19.5 22 Z"
            fill="url(#a2-echo)"
            fillRule="evenodd"
          />

          {/* Foreground A */}
          <path
            d="M14 4 L26 28 L21 28 L18.5 23.5 L11.5 23.5 L9 28 L4 28 Z M14 11.5 L16.5 17 L11.5 17 Z"
            fill="#14141a"
            fillRule="evenodd"
          />

          {/* Squared accent — the only spot of color */}
          <rect x="29" y="6" width="6" height="6" rx="1.5" fill="url(#a2-mark)" />
        </svg>
      </motion.span>

      <span className="text-xl font-medium tracking-tight text-ink-900">
        A2
      </span>
    </a>
  );
}
