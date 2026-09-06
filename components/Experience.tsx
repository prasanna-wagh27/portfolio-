import { duration } from "@/lib/duration";
import Reveal from "./Reveal";
import Section from "./Section";

/**
 * Ownership and outcome, in that order. The stack is deliberately absent here:
 * it is on the work cards and in the toolkit, and a third repetition would tell
 * a reader nothing they did not already know.
 */
const JOBS = [
  {
    start: "2025-07-01",
    end: undefined,
    date: "Jul 2025 to now",
    org: "Octogle Technologies",
    title: "Full-stack engineer · Technical lead",
    place: "Pune, on site",
    current: true,
    scope: ["Tour booking marketplace", "4 role portals", "3 engineers", "Spain and Europe"],
    points: [
      "Led the product from an empty repository to production, across four role-specific portals for Customer, Guide, Tour Operator and Admin.",
      "Replaced the third-party auth provider with a custom JWT and RBAC layer, cutting auth-related support issues by roughly 60%.",
      "Put Redis caching and BullMQ queues in front of the booking and notification pipelines: redundant database queries down about 40%, average page load down about 30%.",
      "Built CI/CD on Docker and Railway, taking a release from hours of manual work to under ten minutes for any engineer on the team.",
    ],
  },
  {
    start: "2023-07-01",
    end: "2024-10-01",
    date: "Jul 2023 to Oct 2024",
    org: "Averta Strategy Pvt Ltd",
    title: "Java full-stack engineer",
    place: "Pune, on site",
    scope: ["Healthcare platform", "Government university platform", "10,000+ students"],
    points: [
      "Built and tuned Spring Boot REST APIs for a production healthcare platform, taking response time down 40% through query optimisation and indexing.",
      "Secured endpoints with JWT authentication and role-based access control across multiple roles in a HIPAA-sensitive environment.",
      "Shipped responsive Angular and TypeScript components, cutting UI-related support tickets by about 25%.",
      "Co-built a government university platform serving over 10,000 students, handling concurrent sessions and dynamic content delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol>
        {JOBS.map((job, i) => (
          <Reveal key={job.org} delay={i * 60}>
            <li className={i > 0 ? "mt-12 border-t border-line pt-12" : ""}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
                <h3 className="t-h3 text-[clamp(21px,2.4vw,27px)] text-ink">{job.org}</h3>
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

              <p className="mt-2 text-[16px] font-medium text-ink-2">{job.title}</p>

              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[13.5px]">
                <span className="t-meta text-muted">{job.date}</span>
                <span className="t-meta text-faint">{duration(job.start, job.end)}</span>
                <span className="text-line-2">·</span>
                <span className="text-muted">{job.place}</span>
              </p>

              <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2">
                {job.scope.map((s) => (
                  <li key={s} className="rounded-full bg-tint px-3 py-1 text-[12.5px] text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>

              <ul className="mt-7 space-y-3.5">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="relative max-w-[76ch] pl-6 text-[15.5px] leading-[1.6] text-body sm:text-[16px]"
                  >
                    <span className="absolute left-0 top-[11px] h-px w-3 grad-hairline" />
                    {p}
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
