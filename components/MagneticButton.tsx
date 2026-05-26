"use client";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  strength?: number;
  variant?: "ink" | "outline";
};

export default function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  strength = 0.35,
  variant = "ink",
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base = variant === "ink" ? "btn-ink" : "btn-outline";

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${className}`}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${className}`}
    >
      {inner}
    </motion.button>
  );
}
