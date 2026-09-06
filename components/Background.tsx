import Reveal from "./Reveal";
import Section from "./Section";

const EDUCATION = [
  {
    title: "B.Tech, Mechanical Engineering",
    org: "University of Mumbai",
    meta: "2018 – 2022 · CGPA 7.77 / 10",
  },
  { title: "Full Stack Java Development", org: "Vibrantminds Technologies", meta: "Certification" },
];

const FACTS = [
  { k: "Based in", v: "Pune, Maharashtra" },
  { k: "Work setup", v: "Hybrid" },
  { k: "Languages", v: "English, Hindi, Marathi" },
];

export default function Background() {
  return (
    <Section id="background" label="Background">
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
        <Reveal>
          <div>
            <h3 className="t-label text-faint">Education</h3>
            <ul className="mt-5">
              {EDUCATION.map((r) => (
                <li key={r.title} className="border-b border-line py-4 last:border-0">
                  <p className="text-[15.5px] font-medium tracking-[-0.02em] text-ink">{r.title}</p>
                  <p className="t-meta mt-1 text-muted">
                    {r.org} · {r.meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div>
            <h3 className="t-label text-faint">Details</h3>
            <dl className="mt-5">
              {FACTS.map((f) => (
                <div
                  key={f.k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4 last:border-0"
                >
                  <dt className="flex-none text-[14px] text-muted">{f.k}</dt>
                  <dd className="text-right text-[14.5px] font-medium text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
