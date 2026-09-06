import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import TechIcon from "@/components/TechIcon";
import { PROJECTS, projectBySlug } from "@/lib/work";

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.study).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const title = `${project.name} · Prasanna Wagh`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description: project.summary, type: "article" },
  };
}

/** Lowercases each label for use mid-sentence, leaving acronyms like REST API alone. */
function lower(items: string[]): string[] {
  return items.map((i) => (/^[A-Z][A-Z/]/.test(i) ? i : i[0].toLowerCase() + i.slice(1)));
}

/** Section frame for the case study: a sticky label rail beside the prose. */
function Block({
  label,
  children,
  soft = false,
}: {
  label: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <section className={soft ? "wash-section" : "bg-white"}>
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {soft ? null : <hr className="rule" />}
        <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[168px_1fr] lg:gap-14">
          <Reveal>
            <p className="t-label flex items-center gap-2.5 pt-1 text-muted lg:sticky lg:top-24">
              <span className="h-[6px] w-[6px] rounded-full bg-brand" />
              {label}
            </p>
          </Reveal>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

const DECISION_ROWS = [
  { key: "problem", label: "Problem" },
  { key: "decision", label: "Decision" },
  { key: "tradeoff", label: "Trade-off" },
  { key: "result", label: "Result" },
] as const;

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project?.study) notFound();

  const study = project.study;
  const others = PROJECTS.filter((p) => p.study && p.slug !== project.slug);

  return (
    <>
      <ScrollProgress />
      <Nav home={false} />

      <main>
        <header className="wash-top">
          <div className="mx-auto max-w-5xl px-6 pb-14 pt-12 sm:px-10 sm:pb-20 sm:pt-16">
            <Link
              href="/#work"
              className="link-quiet inline-flex items-center gap-2 text-[14px] text-muted"
            >
              <span aria-hidden="true">←</span> All work
            </Link>

            <div className="rise mt-8">
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="t-meta text-faint">{project.n}</span>
                {project.liveNote ? (
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pos">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pos opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pos" />
                    </span>
                    {project.liveNote}
                  </span>
                ) : null}
              </p>

              <h1 className="t-name mt-4 max-w-[18ch] text-[clamp(34px,6.2vw,68px)] text-ink">
                {project.name}
              </h1>

              <p className="mt-6 max-w-[52ch] text-[clamp(17px,1.9vw,21px)] font-medium leading-[1.45] tracking-[-0.022em] text-ink-2">
                {project.tagline}
              </p>

              <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px] text-muted">
                <span>{project.role}</span>
                <span className="text-line-2">·</span>
                <span className="t-meta">{project.period}</span>
                <span className="text-line-2">·</span>
                <span>{project.access}</span>
              </p>
            </div>
          </div>
        </header>

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <Reveal>
              <div className="-mt-6">
                <ProjectVisual project={project} />
              </div>
            </Reveal>
          </div>
        </section>

        <Block label="The problem">
          <Reveal>
            <div className="space-y-5">
              {study.problem.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[70ch] text-[16px] leading-[1.7] text-body sm:text-[17px]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Block>

        <Block label="My part" soft>
          <Reveal>
            <p className="max-w-[66ch] text-[16px] leading-[1.7] text-body sm:text-[17px]">
              {study.responsibility}
            </p>
            <p className="mt-5 max-w-[66ch] text-[16px] leading-[1.7] text-body">
              The parts I was responsible for: {lower(project.owned).join(", ")}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="t-label mt-9 text-faint">Built with</h2>
            <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
              {project.stack.map((t) => (
                <li key={t.label} className="inline-flex items-center gap-2 text-[13.5px] text-body">
                  <TechIcon slug={t.slug} className="h-4 w-4" />
                  {t.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </Block>

        {study.surfaces ? (
          <Block label="The surfaces">
            <Reveal>
              <p className="max-w-[64ch] text-[16px] leading-[1.7] text-body">{project.hardPart}</p>
            </Reveal>
            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {study.surfaces.map((s, i) => (
                <Reveal key={s.name} delay={i * 50}>
                  <li className="border-t border-line pt-5">
                    <h3 className="t-h3 text-[18px] text-ink">{s.name}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-body">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Block>
        ) : null}

        <section id="decisions" className="wash-dark scroll-mt-20">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <div className="grid gap-8 py-12 sm:py-18 lg:grid-cols-[168px_1fr] lg:gap-14">
              <Reveal>
                <p className="t-label flex items-center gap-2.5 pt-1 text-[#7f9aab] lg:sticky lg:top-24">
                  <span className="h-[6px] w-[6px] rounded-full bg-cyan" />
                  Decisions
                </p>
              </Reveal>

              <div className="min-w-0">
                <Reveal>
                  <h2 className="t-h2 max-w-[24ch] text-[clamp(24px,3.2vw,36px)] text-white">
                    A few decisions worth explaining.
                  </h2>
                </Reveal>

                <ol className="mt-12">
                  {study.decisions.map((d, i) => (
                    <Reveal key={d.title} delay={i * 60}>
                      <li className={i > 0 ? "mt-12 pt-12" : ""}>
                        {i > 0 ? <hr className="rule-dark mb-12 -mt-12" /> : null}
                        <div className="flex items-baseline gap-4">
                          <span className="t-meta flex-none text-[#5c7a8c]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="t-h3 max-w-[34ch] text-[clamp(18px,2.1vw,22px)] text-white">
                            {d.title}
                          </h3>
                        </div>

                        <dl className="mt-6 sm:pl-[38px]">
                          {DECISION_ROWS.map((row) => (
                            <div
                              key={row.key}
                              className="grid gap-x-6 gap-y-1 border-t border-[rgba(92,201,246,0.16)] py-4 sm:grid-cols-[92px_1fr]"
                            >
                              <dt className="t-label pt-1 text-[#5c7a8c]">{row.label}</dt>
                              <dd className="max-w-[64ch] text-[15.5px] leading-[1.65] text-[#a8c0cf]">
                                {d[row.key]}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <Block label="Outcome">
          <ul className="space-y-4">
            {study.outcome.map((o, i) => (
              <Reveal key={o} delay={i * 50}>
                <li className="relative max-w-[70ch] pl-6 text-[16px] leading-[1.65] text-body sm:text-[17px]">
                  <span className="absolute left-0 top-[12px] h-px w-3 grad-hairline" />
                  {o}
                </li>
              </Reveal>
            ))}
          </ul>

        </Block>

        {study.notBuilt ? (
          <Block label="Not built" soft>
            <Reveal>
              <p className="max-w-[60ch] text-[16px] leading-[1.7] text-body">
                Things I considered and left out on purpose.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-5">
              {study.notBuilt.map((n, i) => (
                <Reveal key={n} delay={i * 50}>
                  <li className="relative max-w-[68ch] pl-6 text-[15.5px] leading-[1.65] text-body">
                    <span className="absolute left-0 top-[12px] h-px w-3 grad-hairline" />
                    {n}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Block>
        ) : null}

        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10">
            <hr className="rule" />
            <div className="flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-20">
              <div>
                <p className="t-label text-faint">Next</p>
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/work/${o.slug}`}
                    className="t-h3 link mt-3 block max-w-[16ch] text-[clamp(23px,3.2vw,34px)] text-ink"
                  >
                    {o.name}
                  </Link>
                ))}
              </div>
              <a
                href="mailto:prasannawagh146@gmail.com"
                className="link flex-none self-start text-[15px] font-medium text-link sm:self-auto"
              >
                prasannawagh146@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
