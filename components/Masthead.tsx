const LINKS = [
  { label: "GitHub", href: "https://github.com/prasanna-wagh27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-wagh27" },
  { label: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
];

export default function Masthead() {
  return (
    <header id="top" className="wash-top relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-20">
        <h1 className="rise t-name text-ink">
          Prasanna Wagh<span className="accent-dot">.</span>
        </h1>

        <div className="rise mt-8 max-w-[58ch]" style={{ "--d": "60ms" } as React.CSSProperties}>
          <p className="text-prose text-body">
            I am a full-stack engineer in Pune. I work across the whole thing: the database schema,
            the API, the interface, and getting it deployed.
          </p>

          <p className="mt-6 text-prose text-body">
            Right now I lead the build of a tour booking marketplace at{" "}
            <span className="font-medium text-ink">Octogle Technologies</span>. It runs in Spain and
            Europe, four role portals on one backend, with three engineers working alongside me.
            Before that, two years on healthcare and government platforms in Java and Spring Boot.
          </p>
        </div>

        <div
          className="rise mt-8"
          style={{ "--d": "120ms" } as React.CSSProperties}
        >
          {/* One solid action. The rest are links, set apart on their own line
              so the row is not a mixed bag of a button and three bits of text. */}
          <a
            href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-note font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
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

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener" : undefined}
                  className="link-quiet text-fine text-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-note text-muted"
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
