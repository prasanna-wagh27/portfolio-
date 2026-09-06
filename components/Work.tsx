import Link from "next/link";

import { FEATURED, SIDE, type Project } from "@/lib/work";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";

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
    <article className={index > 0 ? "mt-20 border-t border-line pt-20 sm:mt-28 sm:pt-28" : ""}>
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="t-meta text-faint">{project.n}</span>
          <h3 className="t-h3 text-[clamp(25px,3.4vw,38px)] text-ink">{project.name}</h3>
          {project.liveNote ? <LiveDot note={project.liveNote} /> : null}
        </div>
        <p className="mt-3 max-w-[52ch] text-[16.5px] leading-[1.5] text-ink-2 sm:text-[18px]">
          {project.tagline}
        </p>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px] text-muted">
          <span>{project.role}</span>
          <span className="text-line-2">·</span>
          <span className="t-meta">{project.period}</span>
        </p>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-9">
          <ProjectVisual project={project} />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="min-w-0">
          <Reveal>
            <p className="max-w-[68ch] text-[16px] leading-[1.65] text-body">{project.summary}</p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-9">
              <h4 className="t-label text-faint">The interesting part</h4>
              <p className="mt-4 max-w-[68ch] text-[16px] leading-[1.65] text-body">
                {project.hardPart}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              {project.study ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 text-[14.5px] font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_-16px_rgba(26,160,230,0.75)]"
                >
                  Read the case study
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10m0 0-3.6-3.6M13 8l-3.6 3.6" />
                  </svg>
                </Link>
              ) : null}

              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener"
                  className="link text-[14.5px] font-medium text-link"
                >
                  {project.link.label} ↗
                </a>
              ) : (
                <span className="text-[13.5px] text-faint">{project.access}</span>
              )}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={80}>
            <h4 className="t-label text-faint">What I owned</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.owned.map((o) => (
                <li
                  key={o}
                  className="rounded-full bg-tint px-3 py-1.5 text-[12.5px] font-medium text-ink-2"
                >
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          {project.metrics.length ? (
            <Reveal delay={120}>
              <h4 className="t-label mt-9 text-faint">Result</h4>
              <dl className="mt-4 space-y-4">
                {project.metrics.slice(0, 3).map((m) => (
                  <div key={m.label} className="flex items-baseline gap-3">
                    <dt className="t-h3 w-[74px] flex-none text-[19px] text-brand-large">
                      {m.value}
                    </dt>
                    <dd className="text-[14px] leading-[1.45] text-body">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}

          <Reveal delay={160}>
            <h4 className="t-label mt-9 text-faint">Built with</h4>
            <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              {project.stack.map((t) => (
                <li key={t.label} className="inline-flex items-center gap-1.5 text-[12.5px] text-muted">
                  <TechIcon slug={t.slug} className="h-[15px] w-[15px]" />
                  {t.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="t-label flex items-center gap-2.5 text-muted">
                <span className="h-[6px] w-[6px] rounded-full bg-brand" />
                Selected work
              </h2>
              <p className="t-meta text-faint">Two systems, in depth</p>
            </div>
          </Reveal>

          <div className="mt-14">
            {FEATURED.map((p, i) => (
              <Card key={p.slug} project={p} index={i} />
            ))}
          </div>

          {SIDE.length ? (
            <div className="mt-20 border-t border-line pt-12 sm:mt-28">
              <Reveal>
                <h3 className="t-label text-faint">Also built</h3>
              </Reveal>
              <ul className="mt-6">
                {SIDE.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <li className="border-b border-line py-6 last:border-0">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h4 className="t-h3 text-[19px] text-ink">{p.name}</h4>
                        {p.link ? (
                          <a
                            href={p.link.href}
                            target="_blank"
                            rel="noopener"
                            className="link text-[14px] font-medium text-link"
                          >
                            {p.link.label} ↗
                          </a>
                        ) : null}
                        <span className="t-meta ml-auto text-faint">{p.period}</span>
                      </div>
                      <p className="mt-2.5 max-w-[70ch] text-[15.5px] leading-[1.6] text-body">
                        {p.summary}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
