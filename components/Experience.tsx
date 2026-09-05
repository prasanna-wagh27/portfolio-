import { duration } from "@/lib/duration";
import Reveal from "./Reveal";
import Section from "./Section";
import TechIcon from "./TechIcon";

const JOBS = [
  {
    start: "2025-07-01",
    end: undefined,
    date: "Jul 2025 to now",
    title: "Full Stack Developer",
    org: "Octogle Technologies",
    place: "Pune, on site",
    current: true,
    points: [
      "Led a tour booking marketplace from an empty repo to production, now running across Spain and Europe. Four role portals for Tour Operator, Guide, Customer and Admin, built with a team of three reporting to me.",
      "Replaced the third-party auth provider with a custom JWT layer and role-based access control across three roles, which cut auth support issues by roughly 60%.",
      "Put Redis caching and BullMQ job queues in front of the booking and notification pipelines. Redundant database queries fell about 40% and average page load about 30%.",
      "Set up CI/CD with Docker and Railway, taking a release from hours of manual work to under ten minutes.",
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
    start: "2023-07-01",
    end: "2024-10-01",
    date: "Jul 2023 to Oct 2024",
    title: "Java Full Stack Developer",
    org: "Averta Strategy Pvt Ltd",
    place: "Pune, on site",
    points: [
      "Built and tuned REST APIs for a production healthcare platform in Spring Boot, taking response time down 40% through query optimisation and indexing.",
      "Secured endpoints with JWT authentication and role-based access control across multiple roles in a HIPAA-sensitive environment.",
      "Shipped responsive Angular and TypeScript components, which cut UI-related support tickets by about 25%.",
      "Co-built a government university platform serving over 10,000 students, handling concurrent sessions and dynamic content delivery.",
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

              <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[15px]">
                <span className="font-medium text-ink">{job.org}</span>
                <span className="text-line-2">/</span>
                <span className="t-meta text-muted">{job.date}</span>
                <span className="t-meta text-faint">{duration(job.start, job.end)}</span>
                <span className="text-line-2">/</span>
                <span className="text-[14px] text-muted">{job.place}</span>
              </p>

              <ul className="mt-7 space-y-4">
                {job.points.map((p) => (
                  <li key={p} className="relative max-w-[74ch] pl-6 text-[16px] leading-[1.65] text-body">
                    <span className="absolute left-0 top-[11px] h-px w-3 grad-hairline" />
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
