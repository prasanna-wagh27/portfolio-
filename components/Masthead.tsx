import Stat from "./Stat";

const LINKS = [
  { label: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
  { label: "+91 77987 01635", href: "tel:+917798701635" },
  { label: "github.com/prasanna-wagh27", href: "https://github.com/prasanna-wagh27" },
  { label: "linkedin.com/in/prasanna-wagh27", href: "https://www.linkedin.com/in/prasanna-wagh27" },
];

export default function Masthead() {
  return (
    <header id="top" className="wash-top relative scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-28">
        <div className="rise">
          <p className="t-label flex items-center gap-2.5 text-muted">
            <span className="dot-live h-[6px] w-[6px] rounded-full bg-brand" />
            Pune, India
            <span className="text-line-2">/</span>
            Open to full-stack roles
          </p>
        </div>

        <div className="rise" style={{ "--d": "60ms" } as React.CSSProperties}>
          <h1 className="t-name mt-7 text-[clamp(52px,10.5vw,116px)] text-ink">
            Prasanna
            <br />
            Wagh<span className="accent-dot">.</span>
          </h1>
        </div>

        <div className="mt-11 grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_minmax(0,320px)]">
          <div className="rise" style={{ "--d": "120ms" } as React.CSSProperties}>
            <p className="max-w-[46ch] text-[clamp(19px,2.1vw,23px)] font-medium leading-[1.36] tracking-[-0.025em] text-ink-2">
              Full-stack engineer. I build multi-role SaaS with React, Node.js, TypeScript and
              PostgreSQL, and I take it all the way to production.
            </p>

            <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.62] text-body">
              Right now I lead the build of a tour booking marketplace running across Spain and
              Europe, reporting to the CEO and guiding three engineers. Before that, two years on
              production healthcare and government platforms in Java, Spring Boot and Angular.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
                download
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
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

              <a
                href="mailto:prasannawagh146@gmail.com"
                className="link text-[15px] font-medium text-ink-2"
              >
                prasannawagh146@gmail.com
              </a>
            </div>
          </div>

          <div className="rise" style={{ "--d": "180ms" } as React.CSSProperties}>
            <p className="t-label text-faint">Elsewhere</p>
            <ul className="mt-4">
              {LINKS.slice(1).map((l) => (
                <li key={l.href} className="border-b border-line py-3 last:border-0">
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener" : undefined}
                    className="link-quiet inline-flex text-[14.5px] text-body"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-4 sm:px-10">
        <div className="rise" style={{ "--d": "240ms" } as React.CSSProperties}>
          <div className="panel lift rounded-[26px] px-8 py-9 sm:px-11 sm:py-11">
            <p className="t-label text-faint">Measured on shipped work</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              <Stat animate value="40" unit="%" label="faster API responses after query tuning" />
              <Stat animate value="60" unit="%" prefix="~" label="fewer auth support tickets" />
              <Stat animate value="30" unit="%" prefix="~" label="quicker average page loads" />
              <Stat animate value="10" unit="min" prefix="<" label="to release, previously hours" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
