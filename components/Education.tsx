import Reveal from "./Reveal";
import Section from "./Section";

const EDUCATION = [
  {
    title: "B.Tech, Mechanical Engineering",
    org: "University of Mumbai",
    meta: "2018 — 2022 · CGPA 7.77 / 10",
  },
  {
    title: "HSC (Higher Secondary Certificate)",
    org: "Maharashtra State Board",
    meta: "2018 · 82.3%",
  },
];

const CERTS = [
  {
    title: "Full Stack Java Development",
    org: "Vibrantminds Technologies Pvt. Ltd.",
    meta: "Certification",
  },
];

const OTHER = [
  { k: "Location", v: "Pune, Maharashtra, India" },
  { k: "Work setup", v: "Hybrid — Pune" },
  { k: "Open to", v: "Full-stack & product engineering roles" },
  { k: "Languages", v: "English, Hindi, Marathi" },
];

export default function Education() {
  return (
    <Section id="more" eyebrow="Education & other info" title="The rest of it." tinted>
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h3 className="eyebrow text-muted">Education</h3>
            <ul className="mt-5 space-y-5">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <p className="text-[16.5px] font-semibold tracking-[-0.022em] text-ink">
                    {e.title}
                  </p>
                  <p className="mt-1 text-[14.5px] text-brand">{e.org}</p>
                  <p className="mt-0.5 font-mono text-[12.5px] text-muted">{e.meta}</p>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-8 border-t border-line pt-6 text-muted">Certification</h3>
            <ul className="mt-5 space-y-5">
              {CERTS.map((c) => (
                <li key={c.title}>
                  <p className="text-[16.5px] font-semibold tracking-[-0.022em] text-ink">
                    {c.title}
                  </p>
                  <p className="mt-1 text-[14.5px] text-brand">{c.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 sm:p-7">
            <h3 className="eyebrow text-muted">Other info</h3>
            <dl className="mt-5">
              {OTHER.map((o) => (
                <div
                  key={o.k}
                  className="flex items-baseline justify-between gap-5 border-b border-line py-3.5 last:border-0"
                >
                  <dt className="flex-none text-[14px] text-muted">{o.k}</dt>
                  <dd className="text-right text-[14.5px] font-medium text-ink">{o.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-7">
              <p className="text-[15.5px] leading-[1.6] text-body">
                The fastest way to reach me is email — I reply the same day.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:prasannawagh146@gmail.com"
                  className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14.5px] font-medium text-white transition-transform hover:-translate-y-px"
                >
                  prasannawagh146@gmail.com
                </a>
                <a
                  href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
                  download
                  className="inline-flex items-center rounded-full border border-line-2 px-5 py-2.5 text-[14.5px] font-medium text-ink transition-colors hover:bg-tint"
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
