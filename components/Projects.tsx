import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

type Project = {
  n: string;
  name: string;
  meta: string;
  live?: boolean;
  href?: string;
  hrefLabel?: string;
  body: string;
  stack: { label: string; slug?: string }[];
};

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "Tour Experience Marketplace",
    meta: "Lead full-stack engineer, Octogle Technologies",
    live: true,
    body: "Production SaaS for booking walking tours, boat experiences and local activities, running across Spain and Europe. I led it from an empty repo to production: three role-specific frontends for Customer, Guide and Admin plus a Tour Operator portal, custom JWT auth, Redis caching, BullMQ background jobs and an optimised REST API layer, with a three-person team alongside me.",
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
    n: "02",
    name: "AI-Powered Recruiter Marketplace",
    meta: "Full-stack engineer, Octogle Technologies",
    body: "A talent marketplace running four independent platforms: Employer, Recruiter, Candidate and Admin. Employers post vacancies, independent recruiters bid, refer candidates and earn commission. I implemented the permission hierarchies, the job-matching workflows and the candidate pipeline system.",
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
    n: "03",
    name: "Sendkart",
    meta: "Solo build",
    href: "https://sendkart.in",
    hrefLabel: "sendkart.in",
    body: "A no-code SaaS platform that lets small businesses put a mini website together without writing code. Drag-and-drop components, QR code integration and built-in feedback collection, aimed at SMBs.",
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
    <Section id="projects" label="Projects">
      <div>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className={i > 0 ? "mt-16 border-t border-line pt-16" : ""}>
              <div className="flex items-baseline gap-5">
                <span className="t-meta text-faint">{p.n}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="t-h3 text-[clamp(23px,2.6vw,29px)] text-ink">{p.name}</h3>
                    {p.live ? (
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pos">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pos opacity-70" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pos" />
                        </span>
                        Live in Spain and Europe
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 flex flex-wrap items-baseline gap-x-3 text-[14.5px] text-muted">
                    {p.meta}
                    {p.href ? (
                      <>
                        <span className="text-line-2">/</span>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener"
                          className="link font-medium text-link"
                        >
                          {p.hrefLabel}
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-[72ch] pl-0 text-[16px] leading-[1.65] text-body sm:pl-[52px]">
                {p.body}
              </p>

              <div className="mt-8 sm:pl-[52px]">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {p.stack.map((t) => (
                    <li key={t.label} className="inline-flex items-center gap-2 text-[13px] text-muted">
                      <TechIcon slug={t.slug} />
                      {t.label}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
