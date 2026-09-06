"use client";

import { useEffect, useState } from "react";

import CommandMenu from "./CommandMenu";

const SECTIONS = [
  { hash: "#work", label: "Work" },
  { hash: "#experience", label: "Experience" },
  { hash: "#approach", label: "How I work" },
];

const RESUME = "/Prasanna-Wagh-Fullstack-Engineer.pdf";
const EMAIL = "mailto:prasannawagh146@gmail.com";

/**
 * `home` keeps section links as bare hashes on the homepage so they scroll
 * rather than navigate, and rewrites them to /#hash everywhere else.
 */
export default function Nav({ home = true }: { home?: boolean }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (hash: string) => (home ? hash : `/${hash}`);
  const showMark = stuck || open || !home;

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        stuck || open ? "bg-white/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-6 sm:px-10">
        <a
          href={home ? "#top" : "/"}
          className={`flex-none text-[15px] font-medium tracking-[-0.02em] transition-[opacity,transform] duration-500 ${
            showMark ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
          aria-hidden={!showMark}
          tabIndex={showMark ? 0 : -1}
        >
          Prasanna Wagh<span className="text-brand">.</span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 sm:flex" aria-label="Sections">
          {SECTIONS.map((l) => (
            <a key={l.hash} href={href(l.hash)} className="link-quiet text-[14.5px] text-body">
              {l.label}
            </a>
          ))}
          <CommandMenu />
          <a href={RESUME} download className="link-quiet text-[14.5px] font-medium text-ink">
            Résumé
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] hover:shadow-[0_12px_26px_-14px_rgba(26,160,230,0.85)]"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ml-auto inline-flex items-center gap-2 text-[14.5px] font-medium text-ink sm:hidden"
        >
          {open ? "Close" : "Menu"}
          <span className="relative flex h-3 w-4 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-[1.5px] w-full origin-center rounded bg-current transition-transform duration-300 ${
                open ? "translate-y-[5.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full origin-center rounded bg-current transition-transform duration-300 ${
                open ? "-translate-y-[5.25px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white/95 backdrop-blur-xl sm:hidden">
          <nav className="mx-auto max-w-5xl px-6" aria-label="Sections">
            <ul>
              {SECTIONS.map((l) => (
                <li key={l.hash} className="border-b border-line">
                  <a
                    href={href(l.hash)}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-[17px] font-medium text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="border-b border-line">
                <a href={RESUME} download className="block py-4 text-[17px] font-medium text-ink">
                  Résumé
                </a>
              </li>
            </ul>
            <a
              href={EMAIL}
              className="my-5 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-[15px] font-medium text-white"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      ) : null}

      <div
        className={`mx-auto max-w-5xl px-6 transition-opacity duration-500 sm:px-10 ${
          stuck && !open ? "opacity-100" : "opacity-0"
        }`}
      >
        <hr className="rule" />
      </div>
    </div>
  );
}
