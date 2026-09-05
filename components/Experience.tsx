import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

const JOBS = [
  {
    date: "Jul 2025 – Present",
    title: "Full Stack Developer",
    org: "Octogle Technologies",
    place: "Pune, Maharashtra",
    current: true,
    points: [
      "Led full-stack development of a large-scale tour booking marketplace, live across Spain and Europe, reporting directly to the CEO and guiding three developers across React.js, Node.js and Express.js. The platform serves Tour Operator, Guide, Customer and Admin portals.",
      "Architected a custom JWT authentication system with role-based access control across three user roles, removing the third-party auth dependency and cutting auth-related support issues by roughly 60%.",
      "Engineered Redis caching and BullMQ background job queues for booking and notification pipelines, reducing redundant database queries by about 40% and improving average page load time by about 30%.",
      "Designed and built a recruiter marketplace in React.js, Vite and TypeScript supporting four independent interfaces (Employer, Recruiter, Candidate, Admin) with distinct permission hierarchies and job-matching workflows.",
      "Delivered RESTful APIs with Node.js, TypeORM and PostgreSQL, and set up CI/CD through Docker and Railway, cutting manual release time from hours to under ten minutes.",
      "Adopted Claude Code with agentic subagents, lifting feature delivery velocity by roughly 35%, and enforced TypeScript and Git standards across the team.",
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
    date: "Jul 2023 – Oct 2024",
    title: "Java Full Stack Developer",
    org: "Averta Strategy Pvt Ltd",
    place: "Pune, Maharashtra",
    points: [
      "Developed and optimised REST APIs for a production healthcare application in Spring Boot, achieving a 40% reduction in API response time through query optimisation and database indexing.",
      "Integrated JWT authentication and role-based access control, securing endpoints across multiple user roles in a HIPAA-sensitive environment.",
      "Built dynamic, responsive UI components in Angular and TypeScript, improving cross-device experience and reducing UI-related support tickets by about 25%.",
      "Co-developed a government university platform serving over 10,000 students across multiple departments, handling concurrent sessions and dynamic content delivery.",
      "Implemented patient PDF report generation and automated email and SMS notification workflows using Thymeleaf and Spring integrations, saving roughly three hours of manual reporting a week.",
      "Maintained clean, documented codebases in Git and GitLab across Agile sprint cycles, consistently passing peer review.",
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
    <Section id="experience" label="Experience">
      <ol>
        {JOBS.map((job, i) => (
          <Reveal key={job.title} delay={i * 60}>
            <li className={i > 0 ? "mt-16 border-t border-line pt-16" : ""}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="t-h3 text-[clamp(23px,2.6vw,29px)] text-ink">{job.title}</h3>
                {job.current ? (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pos">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pos opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pos" />
                    </span>
                    Current
                  </span>
                ) : null}
              </div>

              <p className="mt-2 flex flex-wrap items-baseline gap-x-3 text-[15px]">
                <span className="font-medium text-brand">{job.org}</span>
                <span className="text-line-2">/</span>
                <span className="t-meta text-muted">{job.date}</span>
                <span className="text-line-2">/</span>
                <span className="text-[14px] text-muted">{job.place}</span>
              </p>

              <ul className="mt-7 space-y-4">
                {job.points.map((p) => (
                  <li key={p} className="relative max-w-[74ch] pl-6 text-[16px] leading-[1.65] text-body">
                    <span className="absolute left-0 top-[11px] h-px w-3 bg-line-2" />
                    {p}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {job.stack.map((t) => (
                  <li key={t.label} className="inline-flex items-center gap-2 text-[13px] text-muted">
                    <TechIcon slug={t.slug} />
                    {t.label}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
