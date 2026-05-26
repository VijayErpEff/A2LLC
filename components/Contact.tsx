"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

type State = "idle" | "submitting" | "sent";

export default function Contact() {
  const [state, setState] = useState<State>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate request. Swap with a real endpoint when ready.
    setTimeout(() => setState("sent"), 900);
  }

  return (
    <section id="contact" className="relative mt-32 sm:mt-44 scroll-mt-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="section-eyebrow"
            >
              Start a project
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="heading-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
            >
              Let&rsquo;s build something{" "}
              <span className="text-gradient-accent">real</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-md text-white/60"
            >
              Tell us about the product, the stack, and the deadline. We&rsquo;ll
              come back within one business day with a plan and an honest
              estimate.
            </motion.p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:hello@a2llc.com"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 transition hover:border-white/20"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue">
                  <Mail className="h-4 w-4 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40">
                    Email
                  </div>
                  <div className="text-white/90 group-hover:text-white">
                    hello@a2llc.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-fuchsia">
                  <MapPin className="h-4 w-4 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/40">
                    Office
                  </div>
                  <div className="text-white/90">Chantilly, Virginia · USA</div>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass ring-soft relative rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Engineer" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <Field label="Budget" name="budget" placeholder="$25k–$100k" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">
                What are you building?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="A short description — product, stack, timeline."
                className="w-full resize-none rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/30"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-white/40">
                We&rsquo;ll respond within 1 business day.
              </p>
              <button
                type="submit"
                disabled={state !== "idle"}
                className="btn-primary disabled:opacity-80"
              >
                {state === "idle" && (<>Send message <Send className="h-4 w-4" /></>)}
                {state === "submitting" && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending</>)}
                {state === "sent" && (<><CheckCircle2 className="h-4 w-4" /> Sent</>)}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-white/40">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/30"
      />
    </label>
  );
}
