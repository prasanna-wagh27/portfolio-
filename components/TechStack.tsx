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
      { label: "Zustand" },
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
      { label: "BullMQ" },
      { label: "REST API design" },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "MySQL", slug: "mysql" },
      { label: "Redis — cache & queues", slug: "redis" },
      { label: "Indexing & query tuning" },
    ],
  },
  {
    title: "DevOps & cloud",
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
    title: "AI & tooling",
    items: [
      { label: "Claude Code", slug: "claude" },
      { label: "Agentic workflows" },
      { label: "Subagents" },
    ],
  },
  {
    title: "Practices",
    items: [
      { label: "System design" },
      { label: "Performance optimisation" },
      { label: "RBAC" },
      { label: "Code review" },
      { label: "Agile / Scrum" },
    ],
  },
];

export default function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech stack" title="What I build with." tinted>
      <div className="space-y-8">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 40}>
            <div className="grid gap-3 sm:grid-cols-[168px_1fr] sm:gap-8">
              <h3 className="eyebrow pt-2 text-muted">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it.label}
                    className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-ink"
                  >
                    <TechIcon slug={it.slug} label={it.label} />
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-muted">
        Brand marks come from the{" "}
        <a
          href="https://simpleicons.org"
          target="_blank"
          rel="noopener"
          className="underline decoration-line-2 underline-offset-4 hover:decoration-brand"
        >
          Simple Icons
        </a>{" "}
        set. Tools without an official mark are shown as plain labels.
      </p>
    </Section>
  );
}
