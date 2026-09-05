import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

const PROJECTS = [
  {
    name: "Tour Experience Marketplace",
    role: "Lead full-stack engineer · Octogle Technologies",
    live: "Live across Spain & Europe",
    body: "Production SaaS for booking walking tours, boat experiences and local activities. I led it end to end from inception to production deployment: three role-specific frontends (Customer, Guide, Admin) plus a Tour Operator portal, custom JWT auth, Redis caching, BullMQ background jobs and a heavily optimised REST API layer. Guided a three-person team throughout.",
    metrics: [
      { v: "~60%", k: "fewer auth support issues" },
      { v: "~40%", k: "fewer redundant DB queries" },
      { v: "~30%", k: "faster page loads" },
      { v: "<10 min", k: "release time" },
    ],
    stack: [
      { label: "React.js", slug: "react" },
      { label: "Node.js", slug: "nodedotjs" },
      { label: "Express", slug: "express" },
      { label: "TypeScript", slug: "typescript" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "TypeORM", slug: "typeorm" },
      { label: "Redis", slug: "redis" },
      { label: "BullMQ" },
      { label: "Docker", slug: "docker" },
      { label: "Railway", slug: "railway" },
    ],
  },
  {
    name: "AI-Powered Recruiter Marketplace",
    role: "Full-stack engineer · Octogle Technologies",
    body: "A talent marketplace supporting four independent platforms — Employer, Recruiter, Candidate and Admin. Employers post vacancies; independent recruiters bid, refer candidates and earn commission. I implemented the complex permission hierarchies, the job-matching workflows and the candidate pipeline management system.",
    metrics: [
      { v: "4", k: "independent interfaces" },
      { v: "RBAC", k: "per-role permission trees" },
    ],
    stack: [
      { label: "React.js", slug: "react" },
      { label: "Vite", slug: "vite" },
      { label: "TypeScript", slug: "typescript" },
      { label: "Node.js", slug: "nodedotjs" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "JWT", slug: "jsonwebtokens" },
    ],
  },
  {
    name: "Sendkart",
    role: "Solo build",
    href: "https://sendkart.in",
    hrefLabel: "sendkart.in",
    body: "A no-code SaaS platform that lets businesses create mini websites without technical skills. Features drag-and-drop components, QR code integration and feedback collection, targeting SMBs.",
    metrics: [
      { v: "No-code", k: "drag-and-drop builder" },
      { v: "SMB", k: "target segment" },
    ],
    stack: [
      { label: "Next.js", slug: "nextdotjs" },
      { label: "React", slug: "react" },
      { label: "TypeScript", slug: "typescript" },
      { label: "PostgreSQL", slug: "postgresql" },
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built.">
      <div className="space-y-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="rounded-2xl border border-line p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[21px] font-semibold tracking-[-0.028em] text-ink">
                  {p.name}
                </h3>
                {p.live ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-pos-tint px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.09em] text-pos">
                    <span className="h-1.5 w-1.5 rounded-full bg-pos" />
                    {p.live}
                  </span>
                ) : null}
              </div>

              <p className="mt-1.5 text-[14.5px] text-muted">
                {p.role}
                {p.href ? (
                  <>
                    {" · "}
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="font-medium text-brand underline decoration-line-2 underline-offset-4 hover:decoration-brand"
                    >
                      {p.hrefLabel} ↗
                    </a>
                  </>
                ) : null}
              </p>

              <p className="mt-5 max-w-[72ch] text-[15.5px] leading-[1.62] text-body">{p.body}</p>

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
                {p.metrics.map((m) => (
                  <div key={m.k}>
                    <dt className="text-[19px] font-semibold tracking-[-0.03em] text-brand tabular-nums">
                      {m.v}
                    </dt>
                    <dd className="mt-0.5 text-[12.5px] text-muted">{m.k}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-haze px-3 py-1.5 text-[12.5px] text-body"
                  >
                    <TechIcon slug={t.slug} label={t.label} />
                    {t.label}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
