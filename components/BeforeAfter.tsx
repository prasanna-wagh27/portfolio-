import Reveal from "./Reveal";

const ROWS = [
  { k: "Booking queries", before: "Hit the database every request", after: "Redis cache", gain: "−40% redundant reads" },
  { k: "Notifications", before: "Blocking, inside the request", after: "BullMQ background jobs", gain: "off the hot path" },
  { k: "Auth", before: "Third-party provider", after: "Custom JWT + RBAC", gain: "−60% support tickets" },
  { k: "Release", before: "Hours, by hand", after: "Docker + Railway CI/CD", gain: "<10 min" },
  { k: "Page load", before: "Baseline", after: "Cached + queued", gain: "−30% average" },
];

export default function BeforeAfter() {
  return (
    <section id="impact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Before / after
          </p>
          <h2 className="display mx-auto mt-5 max-w-[20ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Same platform. Before and after I got my hands on it.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-haze p-2">
              <header className="flex items-center justify-between px-5 py-4">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">Before</h3>
                <span className="rounded-full bg-neg-tint px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.09em] text-neg">
                  Slow and manual
                </span>
              </header>
              <ul className="rounded-2xl bg-white">
                {ROWS.map((r) => (
                  <li
                    key={r.k}
                    className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4 last:border-0"
                  >
                    <span className="text-[14px] text-muted">{r.k}</span>
                    <span className="text-right text-[14.5px] text-body">{r.before}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-tint p-2">
              <header className="flex items-center justify-between px-5 py-4">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">After</h3>
                <span className="rounded-full bg-white px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.09em] text-brand-ink">
                  Cached · queued · automated
                </span>
              </header>
              <ul className="rounded-2xl bg-white">
                {ROWS.map((r) => (
                  <li
                    key={r.k}
                    className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4 last:border-0"
                  >
                    <span className="text-[14px] text-muted">{r.k}</span>
                    <span className="text-right text-[14.5px] font-medium text-ink">
                      {r.after}{" "}
                      <span className="font-semibold text-pos">· {r.gain}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
