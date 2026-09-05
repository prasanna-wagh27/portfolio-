import Reveal from "./Reveal";

const PROFILE = [
  { k: "Role", v: "Full-Stack Engineer" },
  { k: "Experience", v: "2+ years, production SaaS" },
  { k: "Currently", v: "Octogle Technologies, Pune" },
  { k: "Team", v: "Leading 3 engineers, reporting to the CEO" },
  { k: "Education", v: "B.Tech · University of Mumbai" },
];

const LOOKING = [
  { k: "Open to", v: "Full-stack & product engineering roles" },
  { k: "Setup", v: "Hybrid — Pune, Maharashtra" },
  { k: "Core stack", v: "React · Node.js · TypeScript · PostgreSQL" },
  { k: "Also ships", v: "Next.js, Redis, BullMQ, Docker, Spring Boot" },
  { k: "Strongest at", v: "API performance, RBAC, CI/CD" },
];

function Panel({
  title,
  badge,
  rows,
  accent,
}: {
  title: string;
  badge: string;
  rows: { k: string; v: string }[];
  accent?: boolean;
}) {
  return (
    <div className={`rounded-3xl p-2 ${accent ? "bg-tint" : "border border-line bg-haze"}`}>
      <header className="flex items-center justify-between gap-3 px-5 py-4">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.09em] ${
            accent ? "bg-white text-brand-ink" : "bg-white text-muted"
          }`}
        >
          {badge}
        </span>
      </header>
      <dl className="rounded-2xl bg-white">
        {rows.map((r) => (
          <div
            key={r.k}
            className="flex items-baseline justify-between gap-5 border-b border-line px-5 py-4 last:border-0"
          >
            <dt className="flex-none text-[14px] text-muted">{r.k}</dt>
            <dd className="text-right text-[14.5px] font-medium text-ink">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Glance() {
  return (
    <section id="glance" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            At a glance
          </p>
          <h2 className="display mx-auto mt-5 max-w-[20ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Everything a hiring manager needs in ten seconds.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <Panel title="Profile" badge="Today" rows={PROFILE} />
            <Panel title="What I'm looking for" badge="Open to offers" rows={LOOKING} accent />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
              download
              className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[15.5px] font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Download résumé
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="mailto:prasannawagh146@gmail.com"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full border border-line-2 px-7 py-3.5 text-[15.5px] font-medium text-ink transition-colors hover:bg-tint sm:w-auto"
            >
              Email me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
