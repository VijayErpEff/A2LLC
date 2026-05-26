"use client";
import { motion } from "framer-motion";

const row = [
  ".NET 8",
  "Azure",
  "M365 Copilot",
  "Azure OpenAI",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "Dynamics 365",
  "Power Platform",
  "Semantic Kernel",
  "React Native",
  ".NET MAUI",
  "Entity Framework",
  "Cosmos DB",
  "GraphQL",
  "Node.js",
];

export default function LogoMarquee() {
  const items = [...row, ...row];
  return (
    <section aria-label="Technologies" className="relative mt-28 sm:mt-40">
      <div className="container-x mb-6">
        <span className="label-eyebrow">Working in</span>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-2 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, ease: "linear", repeat: Infinity }}
        >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="heading-display inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-3xl text-ink-900 sm:text-4xl"
            >
              {tech}
              <span className="text-ink-mute" aria-hidden>
                ·
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
