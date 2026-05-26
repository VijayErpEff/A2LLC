"use client";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-white/5 pb-10 pt-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              A2 LLC builds production software on the Microsoft stack and
              ships custom mobile and web applications for ambitious teams.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Company
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="#services">Services</a></li>
              <li><a className="hover:text-white" href="#process">Process</a></li>
              <li><a className="hover:text-white" href="#about">About</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Reach us
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a className="hover:text-white" href="mailto:hello@a2llc.com">hello@a2llc.com</a></li>
              <li className="text-white/55">Chantilly, Virginia · USA</li>
              <li className="text-white/55">EIN 88-2991817</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {year} A2 LLC. All rights reserved.</p>
          <p>Engineered with .NET, Next.js & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
