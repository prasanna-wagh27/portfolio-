import Reveal from "./Reveal";
import Section from "./Section";

/**
 * Text, not a wall of logos. A grid of brand marks says "I have installed
 * things"; the sentence a hiring manager needs is which parts of a system this
 * person can hold, and that fits in four lines.
 */
const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Angular", "Tailwind CSS", "React Query", "Zustand"],
  },
  { title: "Backend", items: ["Node.js", "Express", "Java", "Spring Boot", "TypeORM"] },
  {
    title: "Data and infrastructure",
    items: ["PostgreSQL", "MySQL", "Redis", "BullMQ", "Docker", "Railway", "GitHub Actions"],
  },
  {
    title: "Engineering",
    items: [
      "REST API design",
      "Authentication and RBAC",
      "Caching and query tuning",
      "CI/CD",
      "System design",
      "Code review",
    ],
  },
];

export default function Toolkit() {
  return (
    <Section id="toolkit" label="Toolkit">
      <dl className="border-t border-line">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 50}>
            <div className="grid gap-x-12 gap-y-2 border-b border-line py-6 sm:grid-cols-[200px_1fr]">
              <dt className="t-label pt-1 text-faint">{g.title}</dt>
              <dd className="text-note text-body">{g.items.join(" · ")}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
