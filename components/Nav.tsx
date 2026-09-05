"use client";

import { useEffect, useState } from "react";

import CommandMenu from "./CommandMenu";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        stuck ? "bg-white/78 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center px-6 sm:px-10">
        <a
          href="#top"
          className={`text-[15px] font-medium tracking-[-0.02em] transition-[opacity,transform] duration-500 ${
            stuck ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
          aria-hidden={!stuck}
          tabIndex={stuck ? 0 : -1}
        >
          Prasanna Wagh<span className="text-brand">.</span>
        </a>

        <nav className="ml-auto hidden items-center gap-8 sm:flex" aria-label="Sections">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-quiet text-[14.5px] text-body">
              {l.label}
            </a>
          ))}
          <a
            href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
            download
            className="link-quiet text-[14.5px] font-medium text-ink"
          >
            Résumé
          </a>
          <CommandMenu />
        </nav>

        <a
          href="mailto:prasannawagh146@gmail.com"
          className="link-quiet ml-auto text-[14.5px] font-medium text-ink sm:hidden"
        >
          Email
        </a>
      </div>
      <div
        className={`mx-auto max-w-5xl px-6 transition-opacity duration-500 sm:px-10 ${
          stuck ? "opacity-100" : "opacity-0"
        }`}
      >
        <hr className="rule" />
      </div>
    </div>
  );
}
