import Reveal from "./Reveal";

const GROUPS = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript ES2023+", "Vite", "Tailwind CSS", "Material UI", "Zustand", "React Query"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST API design", "TypeORM", "JWT auth", "BullMQ", "Background jobs", "Spring Boot"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Redis — caching", "Redis — queues", "Indexing & query tuning"] },
  { title: "DevOps & cloud", items: ["Docker", "Vercel", "Railway", "CI/CD pipelines", "GitHub Actions", "Git · GitHub · GitLab"] },
  { title: "AI & tooling", items: ["Claude Code", "Agentic workflows", "Subagents"] },
  { title: "Practices", items: ["System design", "Performance optimisation", "RBAC", "Code review", "Agile / Scrum"] },
];

const EDU = [
  { k: "Education", v: "B.Tech, Mechanical Engineering", d: "University of Mumbai · 2018–2022 · CGPA 7.77/10" },
  { k: "Certification", v: "Full Stack Java Development", d: "Vibrantminds Technologies Pvt. Ltd." },
];

export default function Stack() {
  return (
    <section id="stack" className="grad-tint py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Stack
          </p>
          <h2 className="display mx-auto mt-5 max-w-[16ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            What I reach for.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 50}>
              <div className="h-full rounded-3xl bg-white p-7">
                <h3 className="eyebrow text-muted">{g.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-[15px] tracking-[-0.015em] text-ink-2">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {EDU.map((e, i) => (
            <Reveal key={e.k} delay={i * 60}>
              <div className="h-full rounded-3xl bg-white p-7">
                <h3 className="eyebrow text-muted">{e.k}</h3>
                <p className="mt-4 text-[17.5px] font-semibold tracking-[-0.025em] text-ink-2">{e.v}</p>
                <p className="mt-1.5 text-[14px] text-body">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
