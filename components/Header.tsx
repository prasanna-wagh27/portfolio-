import Reveal from "./Reveal";

const CONTACT = [
  { label: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
  { label: "+91 77987 01635", href: "tel:+917798701635" },
  { label: "github.com/prasanna-wagh27", href: "https://github.com/prasanna-wagh27" },
  { label: "linkedin.com/in/prasanna-wagh27", href: "https://www.linkedin.com/in/prasanna-wagh27" },
];

const HIGHLIGHTS = [
  { v: "2+ yrs", k: "shipping production SaaS" },
  { v: "40%", k: "faster API responses" },
  { v: "3", k: "engineers led, under the CEO" },
  { v: "<10 min", k: "deploys, down from hours" },
];

export default function Header() {
  return (
    <header id="top" className="scroll-mt-16 bg-white">
      <div className="h-1 w-full bg-brand" />
      <div className="mx-auto max-w-4xl px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-pos" />
            Open to full-stack roles · Pune (hybrid)
          </p>

          <h1 className="display-xl mt-5 text-[clamp(38px,6.4vw,62px)] text-ink">Prasanna Wagh</h1>

          <p className="mt-3 text-[clamp(18px,2.4vw,23px)] font-medium tracking-[-0.025em] text-brand">
            Full-Stack Engineer — React · Node.js · TypeScript · PostgreSQL
          </p>

          <p className="mt-6 max-w-[68ch] text-[16.5px] leading-[1.62] text-body">
            I build multi-role SaaS end to end, from schema and API through to the UI and the
            deploy. Currently at Octogle Technologies leading a tour booking marketplace that is
            live across Spain and Europe — reporting to the CEO and guiding a team of three. Before
            that, two years on production healthcare and government platforms in Java and Angular.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
            <li className="text-muted">Pune, Maharashtra, India</li>
            {CONTACT.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="text-brand-ink underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-brand"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white transition-transform hover:-translate-y-px"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
              Download résumé (PDF)
            </a>
            <a
              href="mailto:prasannawagh146@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-tint"
            >
              Email me
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.k} className="bg-white px-5 py-4">
                <dt className="text-[22px] font-semibold leading-none tracking-[-0.035em] text-brand tabular-nums">
                  {h.v}
                </dt>
                <dd className="mt-2 text-[13px] leading-[1.4] text-muted">{h.k}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </header>
  );
}
