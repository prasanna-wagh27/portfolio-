import Reveal from "./Reveal";

/**
 * The first thing after the hero: what the work actually moved.
 *
 * Every figure here is repeated on a case study with the method that produced
 * it, because a number nobody can question is a number nobody believes.
 */
const FIGURES = [
  { value: "~40%", label: "fewer redundant database queries", where: "Tour booking marketplace" },
  { value: "~60%", label: "fewer auth support issues", where: "Tour booking marketplace" },
  { value: "40%", label: "faster API response", where: "Healthcare platform, Averta" },
  { value: "4", label: "role portals on one backend", where: "Customer · Guide · Operator · Admin" },
];

export default function Proof() {
  return (
    <section aria-label="Measured outcomes" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="py-12 sm:py-16">
          <Reveal>
            <p className="t-label text-muted">Measured outcomes</p>
          </Reveal>

          <Reveal delay={60}>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-10 lg:grid-cols-4">
              {FIGURES.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <p className="t-h2 text-[clamp(30px,4.4vw,44px)] text-ink">{f.value}</p>
                    <p className="mt-2 max-w-[22ch] text-[14.5px] leading-[1.45] text-body">
                      {f.label}
                    </p>
                    <p className="t-meta mt-2 text-[11.5px] leading-[1.4] text-faint">{f.where}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-10 max-w-[62ch] text-[14.5px] leading-[1.6] text-muted">
              Each figure has a before and an after behind it — a query count, a ticket volume, a
              response time. The case studies name the measurement.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
