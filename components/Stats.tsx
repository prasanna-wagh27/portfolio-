import CountUp from "./CountUp";
import Reveal from "./Reveal";

const STATS = [
  { to: 40, suffix: "%", label: "fewer redundant database queries after Redis caching" },
  { to: 60, prefix: "~", suffix: "%", label: "drop in auth support issues after a custom JWT + RBAC layer" },
  { to: 30, suffix: "%", label: "faster average page load across the booking platform" },
  { to: 10, prefix: "<", suffix: " min", label: "to release, down from hours of manual deploys" },
];

export default function Stats() {
  return (
    <section className="grad-tint pb-20 pt-52 sm:pb-28 sm:pt-48">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            The measurable part
          </p>
          <h2 className="display mx-auto mt-5 max-w-[18ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Numbers from shipped work, not side quests.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="h-full rounded-2xl border border-white bg-white/70 p-6 backdrop-blur-sm">
                <CountUp
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="block text-[clamp(38px,4.4vw,48px)] font-semibold leading-none tracking-[-0.04em] text-brand tabular-nums"
                />
                <p className="mt-4 text-[14.5px] leading-[1.5] text-body">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
