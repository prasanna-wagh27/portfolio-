import Link from "next/link";

import { FEATURED, SIDE, type Project } from "@/lib/work";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

function LiveDot({ note }: { note: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pos">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pos opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pos" />
      </span>
      {note}
    </span>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <article className={index > 0 ? "mt-12 border-t border-line pt-12" : ""}>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="t-h3 text-[clamp(22px,2.6vw,28px)] text-ink">{project.name}</h3>
          {project.liveNote ? <LiveDot note={project.liveNote} /> : null}
        </div>
        <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px] text-muted">
          <span>{project.role}</span>
          <span className="text-line-2">·</span>
          <span className="t-meta">{project.period}</span>
        </p>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-7">
          <ProjectVisual project={project} />
        </div>
      </Reveal>

      <Reveal delay={90}>
        <div className="mt-7 max-w-[70ch]">
          <p className="text-[16px] leading-[1.65] text-body">{project.summary}</p>
          <p className="mt-4 text-[16px] leading-[1.65] text-body">{project.hardPart}</p>

          <p className="mt-5 text-[14px] leading-[1.6] text-muted">
            {project.stack.map((t) => t.label).join(", ")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.study ? (
              <Link href={`/work/${project.slug}`} className="link text-[15px] font-medium text-link">
                How it works
              </Link>
            ) : null}
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener"
                className="link text-[15px] font-medium text-link"
              >
                {project.link.label}
              </a>
            ) : (
              <span className="text-[13.5px] text-faint">{project.access}</span>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[168px_1fr] lg:gap-14">
          <Reveal>
            <h2 className="t-label flex items-center gap-2.5 pt-1 text-muted lg:sticky lg:top-24">
              <span className="h-[6px] w-[6px] rounded-full bg-brand" />
              Work
            </h2>
          </Reveal>

          <div className="min-w-0">
            {FEATURED.map((p, i) => (
              <Card key={p.slug} project={p} index={i} />
            ))}

            {SIDE.map((p) => (
              <Reveal key={p.slug}>
                <article className="mt-12 border-t border-line pt-12">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="t-h3 text-[20px] text-ink">{p.name}</h3>
                    {p.link ? (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener"
                        className="link text-[14px] font-medium text-link"
                      >
                        {p.link.label}
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[14px] text-muted">
                    {p.role} · {p.period}
                  </p>
                  <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.65] text-body">
                    {p.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
