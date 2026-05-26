"use client";
import { motion } from "framer-motion";

const stack = [
  ".NET 8",
  "ASP.NET Core",
  "Azure",
  "C#",
  "Blazor",
  "SQL Server",
  "Dynamics 365",
  "Power Platform",
  "Entity Framework",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  ".NET MAUI",
  "GraphQL",
  "Node.js",
  "Docker",
  "Kubernetes",
];

export default function LogoMarquee() {
  const items = [...stack, ...stack];
  return (
    <section className="relative mt-24 sm:mt-32" aria-label="Technology stack">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
          Stacks we work in every day
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex w-max gap-3 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
