"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-xl transition-shadow ${
        stuck ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a href="#top" className="mr-auto flex items-baseline" aria-label="Prasanna Wagh, home">
          <span className="text-[22px] font-semibold tracking-[-0.03em] text-ink">Prasanna</span>
          <span className="grad-word text-[22px] font-semibold tracking-[-0.03em]">Wagh</span>
          <sup className="ml-0.5 text-[10px] font-semibold tracking-[0.04em] text-brand">FS</sup>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium text-body transition-colors hover:bg-tint hover:text-brand-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
          download
          className="hidden rounded-full px-3.5 py-2 text-[15px] font-medium text-body transition-colors hover:bg-tint hover:text-brand-ink lg:inline-flex"
        >
          Résumé
        </a>
        <a
          href="mailto:prasannawagh146@gmail.com"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-[14.5px] font-medium text-white transition-transform hover:-translate-y-px sm:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[2px] w-5 rounded bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-5 rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-white px-5 pb-5 pt-2 md:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-[17px] font-medium text-ink last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full border border-line-2 px-5 py-3 text-center text-[15px] font-medium text-ink"
          >
            Download résumé
          </a>
          <a
            href="mailto:prasannawagh146@gmail.com"
            onClick={() => setOpen(false)}
            className="mt-2.5 rounded-full bg-ink px-5 py-3 text-center text-[15px] font-medium text-white"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
