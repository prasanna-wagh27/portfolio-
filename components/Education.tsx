import Reveal from "./Reveal";
import Section from "./Section";

const ROWS = [
  {
    title: "B.Tech, Mechanical Engineering",
    org: "University of Mumbai",
    meta: "2018 – 2022 · CGPA 7.77 / 10",
  },
  {
    title: "Higher Secondary Certificate",
    org: "Maharashtra State Board",
    meta: "2018 · 82.3%",
  },
  {
    title: "Full Stack Java Development",
    org: "Vibrantminds Technologies Pvt. Ltd.",
    meta: "Certification",
  },
];

const FACTS = [
  { k: "Based in", v: "Pune, Maharashtra" },
  { k: "Work setup", v: "Hybrid" },
  { k: "Open to", v: "Full-stack and product engineering roles" },
  { k: "Languages", v: "English, Hindi, Marathi" },
];

export default function Education() {
  return (
    <Section id="more" label="Background">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="t-label text-faint">Education and certification</h3>
            <ul className="mt-6">
              {ROWS.map((r) => (
                <li key={r.title} className="border-b border-line py-5 last:border-0">
                  <p className="text-[16.5px] font-medium tracking-[-0.022em] text-ink">{r.title}</p>
                  <p className="mt-1 text-[14.5px] text-body">{r.org}</p>
                  <p className="t-meta mt-1.5 text-muted">{r.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="flex h-full flex-col">
            <h3 className="t-label text-faint">Details</h3>
            <dl className="mt-6">
              {FACTS.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-5 last:border-0"
                >
                  <dt className="flex-none text-[14px] text-muted">{f.k}</dt>
                  <dd className="text-right text-[15px] font-medium text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 lg:mt-auto lg:pt-12">
              <p className="t-h3 max-w-[18ch] text-[clamp(22px,2.6vw,28px)] text-ink">
                If the role fits, write to me.
              </p>
              <p className="mt-4 max-w-[44ch] text-[15.5px] leading-[1.6] text-body">
                Send the job description and I will tell you honestly whether I am the right
                engineer for it. I reply the same day.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
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
                  className="link text-[15px] font-medium text-ink-2"
                >
                  Résumé (PDF)
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
