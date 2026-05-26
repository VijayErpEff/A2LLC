"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, ArrowUpRight } from "lucide-react";

type State = "idle" | "submitting" | "sent";

export default function Contact() {
  const [state, setState] = useState<State>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("sent"), 900);
  }

  return (
    <section id="contact" className="relative mt-36 scroll-mt-24 sm:mt-52">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="label-eyebrow">Start a project</span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="heading-display mt-5 text-5xl text-ink-900 sm:text-6xl lg:text-7xl"
            >
              Let&rsquo;s build
              <br />
              <span className="italic text-accent-grad">something real.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-md text-lg leading-snug text-ink-soft"
            >
              Tell us about the product, the stack, and the deadline. We&rsquo;ll
              come back within one business day with a plan and an honest estimate.
            </motion.p>

            <div className="mt-10 space-y-2 text-sm">
              <div className="flex items-baseline gap-4">
                <span className="label-eyebrow w-24">Email</span>
                <a
                  href="mailto:hello@a2llc.com"
                  className="link-underline text-lg text-ink-900"
                >
                  hello@a2llc.com
                </a>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="label-eyebrow w-24">Office</span>
                <span className="text-lg text-ink-900">Chantilly, Virginia · USA</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="label-eyebrow w-24">Response</span>
                <span className="text-lg text-ink-900">Within 1 business day</span>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-ink-900/8 bg-white/70 p-7 backdrop-blur-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Jane Engineer" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <Field label="Budget" name="budget" placeholder="$25k–$100k+" />
            </div>
            <div className="mt-5">
              <label className="label-eyebrow mb-2 block">What are you building?</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="A short description — product, stack, timeline."
                className="w-full resize-none rounded-2xl border border-ink-900/10 bg-paper/40 px-4 py-3 text-base text-ink-900 placeholder:text-ink-mute outline-none transition focus:border-ink-900/40 focus:bg-paper/80"
              />
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <p className="text-xs text-ink-mute">
                No newsletters. No spam. Just engineering.
              </p>
              <button
                type="submit"
                disabled={state !== "idle"}
                className="btn-ink disabled:opacity-90"
              >
                {state === "idle" && (
                  <>
                    Send message <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
                {state === "submitting" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending
                  </>
                )}
                {state === "sent" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Sent
                  </>
                )}
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
      <span className="label-eyebrow mb-2 block">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-900/10 bg-paper/40 px-4 py-3 text-base text-ink-900 placeholder:text-ink-mute outline-none transition focus:border-ink-900/40 focus:bg-paper/80"
      />
    </label>
  );
}
