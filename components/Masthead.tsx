const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com/prasanna-wagh27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-wagh27" },
  { label: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
];

export default function Masthead() {
  return (
    <header id="top" className="wash-top relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24">
        <div className="rise">
          <p className="text-[15px] font-medium tracking-[-0.02em] text-ink">
            Prasanna Wagh<span className="accent-dot">.</span>
          </p>
        </div>

        <h1
          className="rise t-name mt-6 max-w-[16ch] text-[clamp(40px,7.4vw,80px)] text-ink"
          style={{ "--d": "60ms" } as React.CSSProperties}
        >
          Full-stack engineer who owns the whole slice.
        </h1>

        <div className="rise mt-8 max-w-[58ch]" style={{ "--d": "120ms" } as React.CSSProperties}>
          <p className="text-[clamp(17px,1.9vw,21px)] font-medium leading-[1.45] tracking-[-0.022em] text-ink-2">
            I build production software from database schema and API design through to the
            interface, the pipeline and the deploy.
          </p>

          <p className="mt-6 text-[16px] leading-[1.65] text-body sm:text-[17px]">
            Right now I lead the engineering build of a tour booking marketplace at{" "}
            <span className="font-medium text-ink">Octogle Technologies</span> that runs across
            Spain and Europe — four role portals, three engineers, reporting to the CEO. Before
            that, two years on production healthcare and government platforms in Java and Spring
            Boot.
          </p>
        </div>

        <div
          className="rise mt-9 flex flex-wrap items-center gap-3"
          style={{ "--d": "180ms" } as React.CSSProperties}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
          >
            View the work
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 8h10m0 0-3.6-3.6M13 8l-3.6 3.6" />
            </svg>
          </a>

          <a
            href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
            download
            className="group inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-3 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-brand hover:text-link"
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
        </div>

        <div
          className="rise mt-10 text-[14px] text-muted"
          style={{ "--d": "240ms" } as React.CSSProperties}
        >
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span className="dot-live h-[6px] w-[6px] rounded-full bg-brand" />
              Pune, India
            </span>
            <span className="hidden text-line-2 sm:inline">·</span>
            <span className="w-full sm:w-auto">Open to full-stack and product engineering roles</span>
          </p>
          <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {ELSEWHERE.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener" : undefined}
                className="link-quiet text-[14px] text-body"
              >
                {l.label}
              </a>
            ))}
          </p>
        </div>
      </div>
    </header>
  );
}
