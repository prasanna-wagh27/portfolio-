import Reveal from "./Reveal";

const LINKS = [
  { label: "GitHub", href: "https://github.com/prasanna-wagh27", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prasanna-wagh27", external: true },
  { label: "+91 77987 01635", href: "tel:+917798701635", external: false },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="py-16 sm:py-24">
          <Reveal>
            <h2 className="t-h2 max-w-[16ch] text-[clamp(28px,4.4vw,50px)] text-ink">
              Building something complicated? Let&apos;s talk.
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.65] text-body sm:text-[17px]">
              Send the job description and I will tell you honestly whether I am the right engineer
              for it. I reply the same day.
            </p>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:prasannawagh146@gmail.com"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
              >
                prasannawagh146@gmail.com
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
                className="inline-flex items-center gap-2.5 rounded-full border border-line-2 px-6 py-3 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-brand hover:text-link"
              >
                Résumé (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener" : undefined}
                    className="link-quiet text-[14.5px] text-body"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
