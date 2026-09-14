"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  ALL_PHASES,
  ALL_TOPIC_IDS,
  DAILY,
  DSA_TARGET,
  PASS_BAR,
  SPACED_REVISION,
  type Module,
  type Phase,
} from "@/lib/roadmap";

const KEY = "pw.roadmap.v2";

type Saved = { done: string[]; solved: { easy: number; medium: number } };
const EMPTY: Saved = { done: [], solved: { easy: 0, medium: 0 } };

function read(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const p = JSON.parse(raw) as Partial<Saved>;
    return {
      // ids that no longer exist are dropped, so editing the plan cannot
      // inflate the count
      done: Array.isArray(p.done) ? p.done.filter((id) => ALL_TOPIC_IDS.includes(id)) : [],
      solved: {
        easy: Math.max(0, Number(p.solved?.easy) || 0),
        medium: Math.max(0, Number(p.solved?.medium) || 0),
      },
    };
  } catch {
    return EMPTY;
  }
}

function Bar({ done, total, className = "" }: { done: number; total: number; className?: string }) {
  const pct = total ? (done / total) * 100 : 0;
  return (
    <span
      role="progressbar"
      aria-valuenow={done}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`${done} of ${total} done`}
      className={`block h-[3px] overflow-hidden rounded-full bg-line ${className}`}
    >
      <span
        className="block h-full rounded-full bg-brand transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${pct}%` }}
      />
    </span>
  );
}

function Box({ size = 18 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ height: size, width: size }}
      className="relative grid flex-none place-items-center rounded-[5px] border border-line-2 bg-white transition-[background-color,border-color] duration-200 group-hover:border-brand peer-checked:border-brand peer-checked:bg-brand peer-indeterminate:border-brand peer-checked:[&>.tick]:scale-100 peer-checked:[&>.tick]:opacity-100 peer-indeterminate:[&>.dash]:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand"
    >
      <svg
        viewBox="0 0 14 14"
        className="tick h-3 w-3 scale-50 text-white opacity-0 transition duration-200 ease-[cubic-bezier(0.34,1.36,0.5,1)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
      </svg>
      <span className="dash absolute h-[2px] w-2 rounded-full bg-brand opacity-0 transition-opacity duration-200" />
    </span>
  );
}

/** Highlights the part of a label that matched the search box. */
function Mark({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const at = text.toLowerCase().indexOf(q.toLowerCase());
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-tint text-ink">{text.slice(at, at + q.length)}</mark>
      {text.slice(at + q.length)}
    </>
  );
}

function ModuleCard({
  module: m,
  topics,
  done,
  open,
  query,
  onToggleOpen,
  onToggleTopic,
  onToggleAll,
}: {
  module: Module;
  topics: Module["topics"];
  done: Set<string>;
  open: boolean;
  query: string;
  onToggleOpen: () => void;
  onToggleTopic: (id: string) => void;
  onToggleAll: (next: boolean) => void;
}) {
  const total = m.topics.length;
  const count = m.topics.filter((t) => done.has(t.id)).length;
  const all = count === total;
  const some = count > 0 && !all;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = some;
  }, [some]);

  const panelId = `panel-${m.id}`;

  return (
    <div className={`border-b border-line ${all ? "opacity-60 transition-opacity" : ""}`}>
      <div className="flex items-center gap-3 py-3">
        <label className="group relative flex cursor-pointer items-center" title="Tick the whole module">
          <input
            ref={ref}
            type="checkbox"
            checked={all}
            onChange={() => onToggleAll(!all)}
            className="peer sr-only"
            aria-label={`Tick every topic in ${m.title}`}
          />
          <Box />
        </label>

        <button
          type="button"
          onClick={onToggleOpen}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <span className="min-w-0 flex-1">
            <span className={`block text-note font-medium ${all ? "text-faint" : "text-ink"}`}>
              <Mark text={m.title} query={query} />
            </span>
            {m.note ? <span className="mt-1 block text-fine text-muted">{m.note}</span> : null}
          </span>

          <span className="t-meta flex-none text-faint">
            {count}/{total}
          </span>
          <Bar done={count} total={total} className="hidden w-16 flex-none sm:block" />
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className={`h-3.5 w-3.5 flex-none text-faint transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 3.5 5 4.5-5 4.5" />
          </svg>
        </button>
      </div>

      {open ? (
        <ul id={panelId} className="pb-3 pl-8">
          {topics.map((t) => {
            const checked = done.has(t.id);
            return (
              <li key={t.id}>
                <label className="group flex cursor-pointer items-center gap-3 py-[7px]">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleTopic(t.id)}
                    className="peer sr-only"
                  />
                  <Box size={16} />
                  <span
                    className={`text-fine transition-colors duration-200 ${
                      checked ? "text-faint line-through decoration-line-2" : "text-body"
                    }`}
                  >
                    <Mark text={t.label} query={query} />
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function Counter({
  label,
  value,
  target,
  onChange,
}: {
  label: string;
  value: number;
  target: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0">
      <span className="text-note text-ink-2">{label}</span>
      <span className="flex items-center gap-3">
        <span className="t-meta w-16 text-right text-muted">
          <span className={value >= target ? "text-pos" : "text-ink"}>{value}</span> / {target}
        </span>
        {[
          { d: -1, path: "M2.5 6h7", aria: `One fewer ${label}` },
          { d: 1, path: "M6 2.5v7M2.5 6h7", aria: `One more ${label}` },
        ].map((b) => (
          <button
            key={b.d}
            type="button"
            onClick={() => onChange(Math.max(0, value + b.d))}
            aria-label={b.aria}
            className="grid h-7 w-7 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-link"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d={b.path} />
            </svg>
          </button>
        ))}
      </span>
    </div>
  );
}

export default function RoadmapBoard() {
  const [saved, setSaved] = useState<Saved>(EMPTY);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [remainingOnly, setRemainingOnly] = useState(false);

  useEffect(() => {
    const s = read();
    setSaved(s);
    // open the first module that still has work in it, so there is somewhere
    // obvious to start. Everything else begins collapsed: 67 modules expanded
    // is a wall, not a checklist.
    const doneSet = new Set(s.done);
    for (const p of ALL_PHASES) {
      const next = p.modules.find((m) => m.topics.some((t) => !doneSet.has(t.id)));
      if (next) {
        setOpen(new Set([next.id]));
        break;
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      /* private mode or full storage: the board still works for this session */
    }
  }, [saved, ready]);

  const done = useMemo(() => new Set(saved.done), [saved.done]);

  const toggleTopic = useCallback((id: string) => {
    setSaved((prev) => {
      const next = new Set(prev.done);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { ...prev, done: [...next] };
    });
  }, []);

  const toggleAll = useCallback((m: Module, on: boolean) => {
    setSaved((prev) => {
      const next = new Set(prev.done);
      for (const t of m.topics) {
        if (on) next.add(t.id);
        else next.delete(t.id);
      }
      return { ...prev, done: [...next] };
    });
  }, []);

  const q = query.trim().toLowerCase();

  /** Topics left after the search box and the remaining-only switch. */
  const topicsFor = useCallback(
    (m: Module) => {
      let list = m.topics;
      if (q && !m.title.toLowerCase().includes(q)) {
        list = list.filter((t) => t.label.toLowerCase().includes(q));
      }
      if (remainingOnly) list = list.filter((t) => !done.has(t.id));
      return list;
    },
    [q, remainingOnly, done],
  );

  const modulesFor = useCallback(
    (p: Phase) =>
      p.modules
        .map((m) => ({ m, topics: topicsFor(m) }))
        .filter(({ m, topics }) => {
          if (q) return topics.length > 0 || m.title.toLowerCase().includes(q);
          if (remainingOnly) return topics.length > 0;
          return true;
        }),
    [topicsFor, q, remainingOnly],
  );

  const phases = useMemo(
    () => ALL_PHASES.map((p) => ({ p, rows: modulesFor(p) })).filter(({ rows }) => rows.length > 0),
    [modulesFor],
  );

  const totalDone = ALL_TOPIC_IDS.filter((id) => done.has(id)).length;
  const total = ALL_TOPIC_IDS.length;
  const phaseCount = (p: Phase) => {
    const ids = p.modules.flatMap((m) => m.topics.map((t) => t.id));
    return { done: ids.filter((id) => done.has(id)).length, total: ids.length };
  };

  const allModuleIds = ALL_PHASES.flatMap((p) => p.modules.map((m) => m.id));
  const searching = q.length > 0;

  const switches = (
    <>
      <label className="group flex cursor-pointer items-center gap-2 text-fine text-body">
        <input
          type="checkbox"
          checked={remainingOnly}
          onChange={() => setRemainingOnly((v) => !v)}
          className="peer sr-only"
        />
        <Box size={16} />
        Only what is left
      </label>

      <span className="flex items-center gap-3 text-fine text-muted">
        <button type="button" onClick={() => setOpen(new Set(allModuleIds))} className="link-quiet">
          Expand all
        </button>
        <span aria-hidden="true" className="text-line-2">
          /
        </span>
        <button type="button" onClick={() => setOpen(new Set())} className="link-quiet">
          Collapse
        </button>
      </span>

      <button
        type="button"
        onClick={() => {
          if (confirm("Clear every tick and reset the problem counts?")) setSaved(EMPTY);
        }}
        className="link-quiet text-fine text-muted"
      >
        Reset
      </button>
    </>
  );

  return (
    <>
      {/* Control bar. Sticks under the site nav so progress and search stay
          reachable from anywhere in a 354 item list. On a phone only progress,
          search and the jump menu stay pinned; the switches sit below it, where
          they do not cost a third of the screen. */}
      <div className="sticky top-16 z-30 border-y border-line bg-white/92 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-6 py-3 sm:px-10">
          <div className="flex items-center gap-4">
            <p className="t-meta flex-none text-muted">
              <span className="text-ink">{totalDone}</span> / {total}
            </p>
            <Bar done={totalDone} total={total} className="min-w-0 flex-1" />
            <p className="t-meta flex-none text-faint">
              {total ? Math.round((totalDone / total) * 100) : 0}%
            </p>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <label className="relative min-w-0 flex-1 lg:max-w-[260px] lg:flex-none">
              <span className="sr-only">Search topics</span>
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-faint"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="9" cy="9" r="5.5" />
                <path d="m13.5 13.5 3 3" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 354 topics"
                className="w-full rounded-full border border-line bg-white py-2 pl-9 pr-3 text-fine text-ink outline-none transition-colors placeholder:text-faint focus:border-brand"
              />
            </label>

            <label className="flex-none lg:hidden">
              <span className="sr-only">Jump to a phase</span>
              <select
                value=""
                onChange={(e) => {
                  document
                    .getElementById(e.target.value)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="w-[104px] rounded-full border border-line bg-white px-3 py-2 text-fine text-muted outline-none focus:border-brand"
              >
                <option value="" disabled>
                  Jump to
                </option>
                {ALL_PHASES.map((ph) => (
                  <option key={ph.id} value={ph.id}>
                    {ph.n === "\u2014" ? "DSA" : `${ph.n}. ${ph.title}`}
                  </option>
                ))}
              </select>
            </label>

            <div className="hidden items-center gap-4 lg:flex">{switches}</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-4 sm:px-10 lg:hidden">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">{switches}</div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
          {/* phase index, fixed for the whole page rather than per section */}
          <nav aria-label="Phases" className="hidden lg:block">
            <ul className="sticky top-[168px] py-16">
              {ALL_PHASES.map((p) => {
                const c = phaseCount(p);
                return (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="group flex items-baseline gap-3 py-2 text-fine text-muted transition-colors hover:text-link"
                    >
                      <span className="t-meta w-5 flex-none text-faint">{p.n}</span>
                      <span className="min-w-0 flex-1">{p.title}</span>
                      <span
                        className={`t-meta flex-none text-[11px] ${
                          c.done === c.total ? "text-pos" : "text-faint"
                        }`}
                      >
                        {c.done}/{c.total}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="min-w-0">
            {/* standing rules */}
            <section className="py-16">
              <h2 className="t-label flex items-center gap-3 text-muted">
                <span className="h-[5px] w-[5px] flex-none rounded-full bg-brand" />
                Standing rules
              </h2>

              <div className="mt-8 grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="t-h3 text-ink">The pass bar</h3>
                  <p className="mt-3 text-prose text-body">
                    A topic is not done because you read it. Tick it when all three are true.
                  </p>
                  <ol className="mt-5 border-t border-line">
                    {PASS_BAR.map((rule, i) => (
                      <li key={rule} className="flex gap-4 border-b border-line py-3">
                        <span className="t-meta flex-none pt-[3px] text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-fine text-ink-2">{rule}</span>
                      </li>
                    ))}
                  </ol>
                  <h3 className="t-h3 mt-10 text-ink">Spaced revision</h3>
                  <p className="mt-3 text-prose text-body">{SPACED_REVISION}</p>
                </div>

                <div>
                  <h3 className="t-h3 text-ink">The day</h3>
                  <dl className="mt-5 border-t border-line">
                    {DAILY.map((d) => (
                      <div key={d.task} className="flex items-baseline gap-4 border-b border-line py-3">
                        <dt className="t-meta w-14 flex-none text-muted">{d.minutes}m</dt>
                        <dd className="min-w-0">
                          <span className="text-fine text-ink-2">{d.task}</span>
                          {d.note ? <span className="ml-2 text-fine text-faint">{d.note}</span> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-fine text-muted">
                    {DAILY.reduce((s, d) => s + d.minutes, 0)} minutes a day.
                  </p>
                </div>
              </div>
            </section>

            {phases.length === 0 ? (
              <p className="py-16 text-prose text-muted">
                Nothing matches {query ? `“${query}”` : "that filter"}.
              </p>
            ) : null}

            {phases.map(({ p, rows }) => {
              const c = phaseCount(p);
              return (
                <section key={p.id} id={p.id} className="scroll-mt-[168px] border-t border-line py-16">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h2 className="t-label flex items-center gap-3 text-muted">
                      <span className="h-[5px] w-[5px] flex-none rounded-full bg-brand" />
                      {p.n === "—" ? "Daily" : `Phase ${p.n}`}
                    </h2>
                    <p className="t-meta text-faint">
                      {c.done} / {c.total}
                    </p>
                  </div>

                  <h3 className="t-h3 mt-4 text-ink">{p.title}</h3>
                  {p.note ? <p className="mt-3 max-w-[62ch] text-prose text-body">{p.note}</p> : null}
                  <Bar done={c.done} total={c.total} className="mt-6 max-w-[360px]" />

                  <div className="mt-6 border-t border-line">
                    {rows.map(({ m, topics }) => (
                      <ModuleCard
                        key={m.id}
                        module={m}
                        topics={topics}
                        done={done}
                        query={query}
                        open={searching || open.has(m.id)}
                        onToggleOpen={() =>
                          setOpen((prev) => {
                            const next = new Set(prev);
                            if (next.has(m.id)) next.delete(m.id);
                            else next.add(m.id);
                            return next;
                          })
                        }
                        onToggleTopic={toggleTopic}
                        onToggleAll={(on) => toggleAll(m, on)}
                      />
                    ))}
                  </div>

                  {p.id === "dsa" ? (
                    <div className="mt-10">
                      <h4 className="t-label text-faint">Problems solved</h4>
                      <p className="mt-3 text-fine text-muted">
                        Target is {DSA_TARGET.easy + DSA_TARGET.medium}: {DSA_TARGET.easy} easy and{" "}
                        {DSA_TARGET.medium} medium.
                      </p>
                      <div className="mt-4 max-w-[420px] border-t border-line">
                        <Counter
                          label="Easy"
                          value={saved.solved.easy}
                          target={DSA_TARGET.easy}
                          onChange={(easy) => setSaved((p2) => ({ ...p2, solved: { ...p2.solved, easy } }))}
                        />
                        <Counter
                          label="Medium"
                          value={saved.solved.medium}
                          target={DSA_TARGET.medium}
                          onChange={(medium) =>
                            setSaved((p2) => ({ ...p2, solved: { ...p2.solved, medium } }))
                          }
                        />
                      </div>
                    </div>
                  ) : null}
                </section>
              );
            })}

            <p className="border-t border-line py-8 text-fine text-faint">
              Progress is saved in this browser only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
