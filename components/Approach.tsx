import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "I own the whole slice.",
    body: "A feature is not finished when the component renders. Schema, migration, API, interface, permission checks, deploy. I would rather ship one path end to end than three halves.",
  },
  {
    n: "02",
    title: "I measure before I claim.",
    body: "Every number on this page came from a before and an after: a query plan, a cache hit rate, a deploy log. If I cannot measure it, it does not go in a bullet.",
  },
  {
    n: "03",
    title: "I hand over code someone else can run.",
    body: "Typed boundaries, predictable failures, a README that works on a fresh machine, and a pipeline anyone on the team can trigger without asking me first.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="wash-dark scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="grid gap-8 py-16 sm:py-24 lg:grid-cols-[168px_1fr] lg:gap-14">
          <Reveal>
            <p className="t-label flex items-center gap-2.5 pt-1 text-[#7f9aab] lg:sticky lg:top-24">
              <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
              Approach
            </p>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <h2 className="t-h2 max-w-[24ch] text-[clamp(26px,3.4vw,38px)] text-white">
                Three things I do on every project, whoever is paying for it.
              </h2>
            </Reveal>

            <ol className="mt-12">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.n} delay={i * 70}>
                  <li className={i > 0 ? "mt-10 pt-10" : ""}>
                    {i > 0 ? <hr className="rule-dark mb-10 -mt-10" /> : null}
                    <div className="grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
                      <span className="t-meta text-[#5c7a8c]">{p.n}</span>
                      <div>
                        <h3 className="t-h3 text-[clamp(19px,2.2vw,23px)] text-white">{p.title}</h3>
                        <p className="mt-3 max-w-[66ch] text-[16px] leading-[1.65] text-[#a8c0cf]">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
