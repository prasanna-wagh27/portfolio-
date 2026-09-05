import Reveal from "./Reveal";

const JOBS = [
  {
    date: "Jul 2025 — Present",
    title: "Full Stack Developer",
    org: "Octogle Technologies",
    place: "Pune, Maharashtra",
    current: true,
    points: [
      "Led full-stack development of a large-scale tour booking marketplace live across Spain and Europe, reporting directly to the CEO and guiding a team of three developers across React.js, Node.js and Express.js.",
      "Architected a custom JWT authentication system with role-based access control across three user roles, removing the third-party auth dependency and cutting auth-related support issues by ~60%.",
      "Engineered Redis caching and BullMQ background job queues for booking and notification pipelines — ~40% fewer redundant DB queries and ~30% better average page load.",
      "Designed and built a recruiter marketplace with four independent interfaces and distinct permission hierarchies using React.js, Vite and TypeScript.",
      "Delivered REST APIs with Node.js, TypeORM and PostgreSQL, and established CI/CD via Docker and Railway — manual release time went from hours to under ten minutes per deployment.",
      "Adopted Claude Code with agentic subagents, accelerating feature delivery by ~35%, and enforced TypeScript and Git collaboration standards across the team.",
    ],
  },
  {
    date: "Jul 2023 — Oct 2024",
    title: "Java Full Stack Developer",
    org: "Averta Strategy Pvt Ltd",
    place: "Pune, Maharashtra",
    points: [
      "Developed and optimised REST APIs for a production healthcare application using Spring Boot, achieving a 40% reduction in API response time through query optimisation and database indexing.",
      "Integrated JWT authentication and role-based access control, securing endpoints across multiple user roles in a HIPAA-sensitive environment.",
      "Built dynamic, responsive UI components in Angular and TypeScript, reducing UI-related support tickets by ~25%.",
      "Co-developed a government university platform serving 10,000+ students across multiple departments, handling concurrent sessions and dynamic content delivery.",
      "Implemented patient PDF report generation and automated email/SMS notification workflows, saving ~3 hours of manual reporting each week.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Experience
          </p>
          <h2 className="display mx-auto mt-5 max-w-[18ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Two roles. Both ended in production.
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-4">
          {JOBS.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <li className="grid gap-6 rounded-3xl border border-line p-7 sm:p-9 lg:grid-cols-[240px_1fr] lg:gap-10">
                <div>
                  <span className="inline-flex items-center gap-2 font-mono text-[12.5px] text-brand-ink">
                    {job.current ? <span className="h-1.5 w-1.5 rounded-full bg-pos" /> : null}
                    {job.date}
                  </span>
                  <p className="mt-3 text-[13.5px] text-muted">{job.place}</p>
                </div>
                <div>
                  <h3 className="text-[clamp(20px,2.3vw,25px)] font-semibold tracking-[-0.03em] text-ink-2">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-brand">{job.org}</p>
                  <ul className="mt-6 space-y-3.5">
                    {job.points.map((p) => (
                      <li key={p} className="relative max-w-[78ch] pl-6 text-[15.5px] leading-[1.6] text-body">
                        <span className="absolute left-0 top-[11px] h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
