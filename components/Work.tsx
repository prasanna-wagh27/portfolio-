import Link from "next/link";

import { FEATURED, SIDE, type Project } from "@/lib/work";
import MetaLine from "./MetaLine";
import ProjectVisual from "./ProjectVisual";
import Rail from "./Rail";
import Reveal from "./Reveal";

function LiveDot({ note }: { note: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-meta font-medium text-pos">
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
        {/* The numeral hangs in the gutter beside the title rather than sitting
            in the text column, so the headings all start on the same edge. */}
        <div className="relative flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span
            aria-hidden="true"
            className="t-meta absolute -left-12 top-[7px] hidden text-faint lg:block"
          >
            {project.n}
          </span>
          <h3 className="t-h3 text-ink">{project.name}</h3>
          {project.liveNote ? <LiveDot note={project.liveNote} /> : null}
        </div>
        <MetaLine
          className="mt-2 text-note text-muted"
          items={[project.role, <span key="when" className="t-meta">{project.period}</span>]}
        />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8">
          <ProjectVisual project={project} />
        </div>
      </Reveal>

      <Reveal delay={90}>
        <div className="mt-8 max-w-[70ch]">
          <p className="text-prose text-body">{project.summary}</p>
          <p className="mt-4 text-prose text-body">{project.hardPart}</p>

          <p className="mt-8 flex flex-wrap gap-x-3 text-fine">
            <span className="t-label pt-[3px] text-faint">Built with</span>
            <span className="min-w-0 flex-1 text-muted">
              {project.stack.map((t) => t.label).join(", ")}
            </span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {project.study ? (
              <Link href={`/work/${project.slug}`} className="link text-note font-medium text-link">
                How it works
              </Link>
            ) : null}
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener"
                className="link text-note font-medium text-link"
              >
                {project.link.label}
              </a>
            ) : (
              <span className="text-fine text-faint">{project.access}</span>
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
        <Rail label="Work">
          <div>
            {FEATURED.map((p, i) => (
              <Card key={p.slug} project={p} index={i} />
            ))}

            {SIDE.map((p) => (
              <Reveal key={p.slug}>
                <article className="mt-12 border-t border-line pt-12">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="t-h3 text-lead text-ink">{p.name}</h3>
                    {p.link ? (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener"
                        className="link text-note font-medium text-link"
                      >
                        {p.link.label}
                      </a>
                    ) : null}
                  </div>
                  <MetaLine
                    className="mt-2 text-note text-muted"
                    items={[p.role, <span key="when" className="t-meta">{p.period}</span>]}
                  />
                  <p className="mt-4 max-w-[70ch] text-prose text-body">
                    {p.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Rail>
      </div>
    </section>
  );
}
