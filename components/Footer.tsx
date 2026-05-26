"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-40 pb-12">
      <div className="container-x">
        {/* Giant editorial wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h2 className="heading-display text-[20vw] leading-[0.85] tracking-tightest text-ink-900 sm:text-[16vw]">
            A2 <span className="italic text-accent-grad">LLC.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 border-t border-ink-900/10 pt-10 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              An engineering studio building production software on the
              Microsoft stack, plus agentic AI, mobile, and web applications.
            </p>
          </div>

          <div>
            <div className="label-eyebrow">Navigate</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a className="link-underline" href="#services">Services</a></li>
              <li><a className="link-underline" href="#process">Process</a></li>
              <li><a className="link-underline" href="#about">Studio</a></li>
              <li><a className="link-underline" href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="label-eyebrow">Reach us</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>
                <a className="link-underline" href="mailto:hello@a2llc.com">hello@a2llc.com</a>
              </li>
              <li>Chantilly, Virginia · USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-900/10 pt-6 text-xs text-ink-mute sm:flex-row sm:items-center">
          <p>© {year} A2 LLC. All rights reserved.</p>
          <p className="font-mono">.NET · Azure · AI · Web</p>
        </div>
      </div>
    </footer>
  );
}
