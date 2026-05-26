"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Subtle scale-down of the top padding as user scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header id="top" className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 transition-all duration-300 ${
          scrolled
            ? "h-[68px] sm:h-[76px] bg-paper/80 backdrop-blur-md border-b border-ink-900/10 shadow-[0_4px_20px_-12px_rgba(12,12,14,0.18)]"
            : "h-0 bg-transparent border-b border-transparent"
        }`}
      />
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`container-x relative pointer-events-auto transition-[padding] duration-300 ${
          scrolled ? "pt-3 sm:pt-4 pb-3 sm:pb-4" : "pt-6 sm:pt-8 pb-2"
        }`}
      >
        <nav className="flex items-center justify-between">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <NavLink href={l.href}>{l.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper shadow-[0_8px_22px_-12px_rgba(20,20,26,0.55)] transition-all hover:-translate-y-px hover:shadow-[0_14px_30px_-12px_rgba(20,20,26,0.6)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-0 bg-[linear-gradient(95deg,#2540b5_0%,#6b4bf0_45%,#f25e3f_95%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative z-10">Start a project</span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center text-ink-900 md:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-0 z-40 bg-paper md:hidden"
          >
            <div className="container-x flex h-full flex-col justify-between pb-12 pt-32">
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="heading-display block text-6xl text-ink-900"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-ink w-full justify-center"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink-900"
    >
      <span className="link-underline">{children}</span>
    </a>
  );
}
