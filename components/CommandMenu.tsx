"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Item = {
  label: string;
  hint: string;
  keywords: string;
  run: () => void;
};

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /** Scrolls when the section is on this page, navigates home when it is not. */
  const go = useCallback((hash: string) => {
    setOpen(false);
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `/${hash}`;
  }, []);

  const items: Item[] = useMemo(
    () => [
      { label: "Selected work", hint: "Section", keywords: "projects marketplace built", run: () => go("#work") },
      { label: "Experience", hint: "Section", keywords: "work jobs roles octogle averta", run: () => go("#experience") },
      { label: "How I work", hint: "Section", keywords: "approach principles values", run: () => go("#approach") },
      { label: "Toolkit", hint: "Section", keywords: "tech stack skills react node typescript", run: () => go("#toolkit") },
      { label: "Background", hint: "Section", keywords: "education certification details", run: () => go("#background") },
      {
        label: "Tour Booking Marketplace",
        hint: "Case study",
        keywords: "project spain europe redis bullmq portals",
        run: () => {
          setOpen(false);
          window.location.href = "/work/tour-booking-marketplace";
        },
      },
      {
        label: "AI-Powered Recruiter Marketplace",
        hint: "Case study",
        keywords: "project recruiter candidate employer commission",
        run: () => {
          setOpen(false);
          window.location.href = "/work/recruiter-marketplace";
        },
      },
      {
        label: "Copy email address",
        hint: "prasannawagh146@gmail.com",
        keywords: "mail contact reach",
        run: () => {
          navigator.clipboard?.writeText("prasannawagh146@gmail.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        },
      },
      {
        label: "Download résumé",
        hint: "PDF",
        keywords: "cv resume pdf download",
        run: () => {
          setOpen(false);
          window.location.href = "/Prasanna-Wagh-Fullstack-Engineer.pdf";
        },
      },
      {
        label: "GitHub",
        hint: "prasanna-wagh27",
        keywords: "code repos source",
        run: () => {
          setOpen(false);
          window.open("https://github.com/prasanna-wagh27", "_blank", "noopener");
        },
      },
      {
        label: "LinkedIn",
        hint: "prasanna-wagh27",
        keywords: "profile network",
        run: () => {
          setOpen(false);
          window.open("https://www.linkedin.com/in/prasanna-wagh27", "_blank", "noopener");
        },
      },
    ],
    [go],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.keywords.includes(q) || i.hint.toLowerCase().includes(q),
    );
  }, [items, query]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
      return;
    }
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[active]?.run();
    }
  };

  useEffect(() => {
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="group hidden items-center gap-2 rounded-full py-1.5 pl-3.5 pr-2 text-[13.5px] text-muted transition-colors hover:text-ink sm:inline-flex"
      >
        Search
        <kbd className="rounded-[5px] bg-tint px-1.5 py-0.5 font-mono text-[11px] text-brand-large transition-colors group-hover:bg-white">
          ⌘K
        </kbd>
      </button>

      {open && mounted
        ? createPortal(
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center px-5 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
        >
          <button
            aria-label="Close"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-ink/20 backdrop-blur-[4px]"
          />

          <div
            onKeyDown={onListKey}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(11,26,36,0.1),0_30px_60px_-24px_rgba(11,26,36,0.35),0_0_0_1px_rgba(26,160,230,0.16)]"
            style={{ animation: "rise 0.28s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg viewBox="0 0 20 20" className="h-4 w-4 flex-none text-faint" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <circle cx="9" cy="9" r="5.5" />
                <path d="m13.5 13.5 3 3" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, open a case study, copy an address"
                aria-label="Search commands"
                className="w-full bg-transparent py-4 text-[15px] text-ink outline-none placeholder:text-faint"
              />
              <kbd className="hidden flex-none rounded-[5px] bg-tint px-1.5 py-0.5 font-mono text-[11px] text-muted sm:block">
                esc
              </kbd>
            </div>

            <ul ref={listRef} className="max-h-[46vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-3 py-6 text-center text-[14px] text-muted">Nothing matches that.</li>
              ) : (
                results.map((item, i) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onMouseMove={() => setActive(i)}
                      onClick={item.run}
                      className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left transition-colors ${
                        i === active ? "bg-tint" : ""
                      }`}
                    >
                      <span className="text-[14.5px] font-medium text-ink">{item.label}</span>
                      <span className="t-meta truncate text-[11.5px] text-faint">
                        {copied && item.label.startsWith("Copy") ? "Copied" : item.hint}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>,
            document.body,
          )
        : null}
    </>
  );
}
