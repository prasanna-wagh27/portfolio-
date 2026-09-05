import Reveal from "./Reveal";

type Project = {
  index: string;
  name: string;
  role: string;
  href?: string;
  live?: boolean;
  metric: string;
  metricLabel: string;
  body: string;
  facts: { k: string; v: string }[];
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Tour Experience Marketplace",
    role: "Lead full-stack engineer · Octogle Technologies",
    live: true,
    metric: "~40%",
    metricLabel: "fewer redundant database queries after caching",
    body: "A booking marketplace for walking tours, boat experiences and local activities, live across Spain and Europe. I took it from inception to production and guided a three-person team: Tour Operator, Guide, Customer and Admin portals, a custom JWT auth layer with role-based access control, Redis caching, BullMQ queues for booking and notification pipelines, and a REST API on Node.js, TypeORM and PostgreSQL.",
    facts: [
      { k: "~60%", v: "fewer auth support issues" },
      { k: "4", v: "role-specific portals" },
      { k: "<10 min", v: "release time, down from hours" },
    ],
    stack: ["React.js", "Node.js", "Express", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "Docker", "Railway"],
  },
  {
    index: "02",
    name: "AI-Powered Recruiter Marketplace",
    role: "Full-stack engineer · Octogle Technologies",
    metric: "4",
    metricLabel: "independent interfaces, distinct permission trees",
    body: "A talent marketplace with four independent interfaces — Employer, Recruiter, Candidate and Admin — each with its own permission hierarchy. Employers post vacancies; independent recruiters bid, refer candidates and earn commission. I built the job-matching workflows and the candidate pipeline management system on top of a JWT-secured API.",
    facts: [
      { k: "RBAC", v: "per-role permission hierarchies" },
      { k: "Vite", v: "sub-second dev feedback loop" },
    ],
    stack: ["React.js", "Vite", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
  },
  {
    index: "03",
    name: "Sendkart",
    role: "Solo build",
    href: "https://sendkart.in",
    metric: "0",
    metricLabel: "lines of code your customer has to write",
    body: "A no-code platform that lets small businesses publish a mini website without touching code — drag-and-drop components, QR code integration and built-in feedback collection, aimed at SMBs who need to be online by the end of the afternoon.",
    facts: [
      { k: "Drag & drop", v: "component composition" },
      { k: "QR + feedback", v: "built in, not bolted on" },
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
];

export default function Work() {
  return (
    <section id="work" className="grad-tint py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Selected work
          </p>
          <h2 className="display mx-auto mt-5 max-w-[20ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Real products. Real users. Shipped.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-center text-[17px] leading-[1.6] text-body">
            Not tutorials or clones — platforms with paying operators, permission hierarchies and
            uptime that someone notices.
          </p>
        </Reveal>

        <div className="mt-14 space-y-5">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-45px_rgba(2,32,56,0.45)]">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="p-7 sm:p-9">
                    <div className="flex items-center gap-3">
                      {p.live ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-pos-tint px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-pos">
                          <span className="h-1.5 w-1.5 rounded-full bg-pos" />
                          Live in production
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-tint px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-brand-ink">
                          Multi-tenant SaaS
                        </span>
                      )}
                      <span className="ml-auto font-mono text-[12px] text-muted">{p.index}</span>
                    </div>

                    <h3 className="mt-5 text-[clamp(23px,2.8vw,31px)] font-semibold tracking-[-0.033em] text-ink-2">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-muted">
                      {p.role}
                      {p.href ? (
                        <>
                          {" · "}
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener"
                            className="font-medium text-brand hover:underline"
                          >
                            sendkart.in ↗
                          </a>
                        </>
                      ) : null}
                    </p>

                    <p className="mt-6 max-w-[62ch] text-[15.5px] leading-[1.65] text-body">
                      {p.body}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line bg-haze px-3 py-1.5 text-[12.5px] text-body"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center gap-6 border-t border-line bg-tint-2 p-7 sm:p-9 lg:border-l lg:border-t-0">
                    <div>
                      <span className="block text-[clamp(46px,6vw,64px)] font-semibold leading-none tracking-[-0.045em] text-brand">
                        {p.metric}
                      </span>
                      <span className="mt-3 block max-w-[26ch] text-[13.5px] uppercase leading-[1.45] tracking-[0.09em] text-muted">
                        {p.metricLabel}
                      </span>
                    </div>
                    <dl className="space-y-3 border-t border-line pt-6">
                      {p.facts.map((f) => (
                        <div key={f.k} className="flex items-baseline justify-between gap-4">
                          <dt className="text-[13px] text-muted">{f.v}</dt>
                          <dd className="whitespace-nowrap text-[16px] font-semibold tracking-[-0.02em] text-ink-2">
                            {f.k}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
