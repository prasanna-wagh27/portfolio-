const LINKS = [
  { label: "GitHub", href: "https://github.com/prasanna-wagh27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-wagh27" },
  { label: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
];

export default function Masthead() {
  return (
    <header id="top" className="wash-top relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-14 sm:px-10 sm:pb-16 sm:pt-20">
        <h1 className="rise t-name text-[clamp(38px,7vw,72px)] text-ink">
          Prasanna Wagh<span className="accent-dot">.</span>
        </h1>

        <div className="rise mt-7 max-w-[58ch]" style={{ "--d": "60ms" } as React.CSSProperties}>
          <p className="text-[17px] leading-[1.65] text-body sm:text-[18px]">
            I am a full-stack engineer in Pune. I work across the whole thing: the database schema,
            the API, the interface, and getting it deployed.
          </p>

          <p className="mt-5 text-[16px] leading-[1.65] text-body sm:text-[17px]">
            Right now I lead the build of a tour booking marketplace at{" "}
            <span className="font-medium text-ink">Octogle Technologies</span>. It runs in Spain and
            Europe, four role portals on one backend, with three engineers working alongside me.
            Before that, two years on healthcare and government platforms in Java and Spring Boot.
          </p>
        </div>

        <div
          className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          style={{ "--d": "120ms" } as React.CSSProperties}
        >
          <a
            href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
            download
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
          >
            Résumé
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[2px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2.5v9m0 0 3.2-3.2M8 11.5 4.8 8.3M2.5 13.5h11" />
            </svg>
          </a>

          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener" : undefined}
              className="link-quiet text-[14.5px] text-body"
            >
              {l.label}
            </a>
          ))}
        </div>

        <p
          className="rise mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-muted"
          style={{ "--d": "180ms" } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-2">
            <span className="dot-live h-[6px] w-[6px] rounded-full bg-brand" />
            Pune, India
          </span>
          <span className="hidden text-line-2 sm:inline">·</span>
          <span className="w-full sm:w-auto">
            Open to full-stack and product engineering roles
          </span>
        </p>
      </div>
    </header>
  );
}
