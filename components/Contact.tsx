import Reveal from "./Reveal";

const LINKS = [
  { k: "Email", v: "prasannawagh146@gmail.com", href: "mailto:prasannawagh146@gmail.com" },
  { k: "GitHub", v: "prasanna-wagh27 ↗", href: "https://github.com/prasanna-wagh27" },
  { k: "LinkedIn", v: "prasanna-wagh27 ↗", href: "https://www.linkedin.com/in/prasanna-wagh27" },
  { k: "Phone", v: "+91 77987 01635", href: "tel:+917798701635" },
];

export default function Contact() {
  return (
    <section id="contact" className="grad-cta py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Contact
          </p>
          <h2 className="display-xl mx-auto mt-6 max-w-[17ch] text-[clamp(34px,6vw,66px)] text-white">
            Hiring a full-stack engineer who can own the whole stack?
          </h2>
          <p className="mx-auto mt-7 max-w-[52ch] text-[clamp(16.5px,2vw,19px)] leading-[1.55] text-white">
            I&rsquo;m looking for full-stack and product engineering roles, hybrid in Pune. Send the
            job description and I&rsquo;ll tell you honestly whether I&rsquo;m the right fit — I reply
            the same day. Freelance enquiries are welcome too.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="mailto:prasannawagh146@gmail.com"
              className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[16px] font-semibold tracking-[-0.02em] text-ink shadow-[0_18px_40px_-24px_rgba(2,32,56,0.8)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              prasannawagh146@gmail.com
            </a>
            <a
              href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
              download
              className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/12 px-7 py-4 text-[15.5px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
            >
              Download résumé ↓
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/25 bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {LINKS.map((l) => (
              <li key={l.k}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener" : undefined}
                  className="flex h-full flex-col gap-1.5 bg-brand-deep/40 px-5 py-5 text-left backdrop-blur-sm transition-colors hover:bg-brand-deep/70"
                >
                  <span className="eyebrow text-white/75">{l.k}</span>
                  <span className="text-[14.5px] font-medium break-words text-white">{l.v}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
