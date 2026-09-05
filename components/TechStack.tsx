import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

type Item = { label: string; slug?: string };

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Frontend",
    items: [
      { label: "React.js", slug: "react" },
      { label: "Next.js", slug: "nextdotjs" },
      { label: "TypeScript", slug: "typescript" },
      { label: "JavaScript", slug: "javascript" },
      { label: "Vite", slug: "vite" },
      { label: "Tailwind CSS", slug: "tailwindcss" },
      { label: "Material UI", slug: "mui" },
      { label: "React Query", slug: "reactquery" },
      { label: "Angular", slug: "angular" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", slug: "nodedotjs" },
      { label: "Express.js", slug: "express" },
      { label: "TypeORM", slug: "typeorm" },
      { label: "JWT auth", slug: "jsonwebtokens" },
      { label: "Spring Boot", slug: "springboot" },
      { label: "Java", slug: "openjdk" },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "MySQL", slug: "mysql" },
      { label: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "Docker", slug: "docker" },
      { label: "Vercel", slug: "vercel" },
      { label: "Railway", slug: "railway" },
      { label: "GitHub Actions", slug: "githubactions" },
      { label: "Git", slug: "git" },
      { label: "GitHub", slug: "github" },
      { label: "GitLab", slug: "gitlab" },
    ],
  },
  {
    title: "AI tooling",
    items: [
      { label: "Claude Code", slug: "claude" },
    ],
  },
];

/* No official brand mark exists for these, so they are set as text rather than
   given an invented logo. */
const ALSO = [
  "Zustand",
  "BullMQ",
  "REST API design",
  "Indexing and query tuning",
  "Agentic workflows",
  "Subagents",
];

const PRACTICES = ["System design", "Performance optimisation", "RBAC", "Code review", "Agile / Scrum"];

export default function TechStack() {
  return (
    <Section id="stack" label="Stack" soft>
      <div className="space-y-14">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 50}>
            <div>
              <div className="flex items-center gap-4">
                <h3 className="t-label flex-none text-faint">{g.title}</h3>
                <hr className="rule-tight flex-1" />
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
                {g.items.map((it) => (
                  <li key={it.label} className="group flex items-center gap-3">
                    <span className="tile grid h-10 w-10 flex-none place-items-center rounded-xl">
                      <TechIcon slug={it.slug} />
                    </span>
                    <span className="text-[14.5px] tracking-[-0.015em] text-ink-2 transition-colors duration-300 group-hover:text-link">{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={280}>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <h3 className="t-label flex-none text-faint">Also working with</h3>
                <hr className="rule-tight flex-1" />
              </div>
              <p className="mt-5 text-[15.5px] leading-[1.7] text-body">{ALSO.join(" · ")}</p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <h3 className="t-label flex-none text-faint">Practices</h3>
                <hr className="rule-tight flex-1" />
              </div>
              <p className="mt-5 text-[15.5px] leading-[1.7] text-body">{PRACTICES.join(" · ")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
