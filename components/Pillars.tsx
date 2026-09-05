import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "I ship the whole slice.",
    body: "A feature is not done when the component renders. I take it from schema and migration through the API, the UI, the permission checks, and the deploy — across React, Node, TypeScript and PostgreSQL.",
    icon: (
      <path d="M4 7h16M4 12h16M4 17h16M8 3v18" />
    ),
  },
  {
    title: "I make it fast, then prove it.",
    body: "Redis caching, BullMQ queues, indexing and query tuning — measured before and after. On the booking platform that meant 40% fewer redundant reads and 30% quicker page loads; on a healthcare API, 40% off response time.",
    icon: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6.3 6.3l2.8 2.8m5.8 5.8 2.8 2.8m0-11.4-2.8 2.8m-5.8 5.8-2.8 2.8" />,
  },
  {
    title: "I own the release.",
    body: "Docker images, Railway and Vercel pipelines, GitHub Actions. Manual deploys that took hours became a sub-ten-minute pipeline, so the team could ship on a Friday without flinching.",
    icon: <path d="M12 3 4 7v6c0 4.4 3.4 7.6 8 8 4.6-.4 8-3.6 8-8V7l-8-4Zm-2 9 1.8 1.8L15 10" />,
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            How I work
          </p>
          <h2 className="display mx-auto mt-5 max-w-[20ch] text-center text-[clamp(30px,4.6vw,52px)] text-ink">
            Three things I do on every project.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="flex h-full flex-col rounded-3xl bg-tint p-7 sm:p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand shadow-[0_10px_24px_-16px_rgba(7,99,168,0.6)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                </span>
                <h3 className="mt-7 text-[clamp(21px,2.3vw,25px)] font-semibold tracking-[-0.03em] text-ink-2">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.62] text-body">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
