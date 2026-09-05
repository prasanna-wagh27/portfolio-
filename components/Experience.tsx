import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

const JOBS = [
  {
    date: "Jul 2025 — Present",
    title: "Full Stack Developer",
    org: "Octogle Technologies",
    place: "Pune, Maharashtra",
    current: true,
    points: [
      "Led full-stack development of a large-scale tour booking marketplace, live across Spain and Europe — reporting directly to the CEO and guiding a team of three developers across React.js, Node.js and Express.js. The platform supports Tour Operator, Guide, Customer and Admin portals.",
      "Architected a custom JWT authentication system with role-based access control across three user roles, eliminating the third-party auth dependency and cutting auth-related support issues by ~60%.",
      "Engineered Redis caching and BullMQ background job queues for booking and notification pipelines, reducing redundant DB queries by ~40% and improving average page load time by ~30%.",
      "Designed and built a recruiter marketplace with React.js, Vite and TypeScript supporting four independent interfaces (Employer, Recruiter, Candidate, Admin) with distinct permission hierarchies and job-matching workflows.",
      "Delivered RESTful APIs with Node.js, TypeORM and PostgreSQL, and established CI/CD pipelines via Docker and Railway — cutting manual release time from hours to under ten minutes per deployment.",
      "Adopted Claude Code with agentic subagents, accelerating feature delivery velocity by ~35%, and enforced TypeScript best practices and Git collaboration standards across the team.",
    ],
    stack: [
      { label: "React", slug: "react" },
      { label: "Node.js", slug: "nodedotjs" },
      { label: "TypeScript", slug: "typescript" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "Redis", slug: "redis" },
      { label: "Docker", slug: "docker" },
    ],
  },
  {
    date: "Jul 2023 — Oct 2024",
    title: "Java Full Stack Developer",
    org: "Averta Strategy Pvt Ltd",
    place: "Pune, Maharashtra",
    points: [
      "Developed and optimised REST APIs for a production healthcare application using Spring Boot, achieving a 40% reduction in API response time through query optimisation and strategic database indexing.",
      "Integrated JWT-based authentication and role-based access control, securing endpoints across multiple user roles in a HIPAA-sensitive environment.",
      "Built dynamic, responsive UI components in Angular and TypeScript, improving cross-device experience and reducing UI-related support tickets by ~25%.",
      "Co-developed a government university web platform serving 10,000+ students across multiple departments, handling concurrent sessions and dynamic content delivery.",
      "Implemented patient PDF report generation and automated email/SMS notification workflows using Thymeleaf and Spring integrations, saving ~3 hours per week of manual reporting.",
      "Maintained clean, well-documented codebases with Git and GitLab across Agile sprint cycles, consistently passing peer code review.",
    ],
    stack: [
      { label: "Spring Boot", slug: "springboot" },
      { label: "Java", slug: "openjdk" },
      { label: "Angular", slug: "angular" },
      { label: "MySQL", slug: "mysql" },
      { label: "GitLab", slug: "gitlab" },
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Work experience" title="Where I've shipped.">
      <ol className="space-y-10">
        {JOBS.map((job, i) => (
          <Reveal key={job.title} delay={i * 60}>
            <li className="grid gap-5 sm:grid-cols-[168px_1fr] sm:gap-8">
              <div className="sm:pt-1">
                <p className="font-mono text-[12.5px] text-ink">{job.date}</p>
                <p className="mt-1.5 text-[13px] text-muted">{job.place}</p>
                {job.current ? (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pos-tint px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.09em] text-pos">
                    <span className="h-1.5 w-1.5 rounded-full bg-pos" />
                    Current
                  </span>
                ) : null}
              </div>

              <div>
                <h3 className="text-[21px] font-semibold tracking-[-0.028em] text-ink">
                  {job.title}
                </h3>
                <p className="mt-1 text-[15.5px] font-medium text-brand">{job.org}</p>

                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-5 text-[15.5px] leading-[1.62] text-body"
                    >
                      <span className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li
                      key={t.label}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[12.5px] text-body"
                    >
                      <TechIcon slug={t.slug} label={t.label} />
                      {t.label}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
