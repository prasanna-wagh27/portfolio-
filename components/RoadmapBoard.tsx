"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import Rail from "./Rail";
import {
  ALL_ITEM_IDS,
  DAILY,
  DSA,
  PASS_BAR,
  PHASES,
  SPACED_REVISION,
  type Item,
} from "@/lib/roadmap";

const KEY = "pw.roadmap.v1";

type Saved = { done: string[]; solved: { easy: number; medium: number } };

const EMPTY: Saved = { done: [], solved: { easy: 0, medium: 0 } };

function read(): Saved {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Saved>;
    return {
      // drop ids that no longer exist, so an edited roadmap cannot inflate the count
      done: Array.isArray(parsed.done) ? parsed.done.filter((id) => ALL_ITEM_IDS.includes(id)) : [],
      solved: {
        easy: Math.max(0, Number(parsed.solved?.easy) || 0),
        medium: Math.max(0, Number(parsed.solved?.medium) || 0),
      },
    };
  } catch {
    return EMPTY;
  }
}

function Check({
  checked,
  onToggle,
  item,
}: {
  checked: boolean;
  onToggle: () => void;
  item: Item;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 py-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="mt-[2px] grid h-[18px] w-[18px] flex-none place-items-center rounded-[5px] border border-line-2 bg-white transition-[background-color,border-color] duration-200 group-hover:border-brand peer-checked:border-brand peer-checked:bg-brand peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand"
      >
        <svg
          viewBox="0 0 14 14"
          className="h-3 w-3 scale-50 text-white opacity-0 transition duration-200 ease-[cubic-bezier(0.34,1.36,0.5,1)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
        </svg>
      </span>
      <span className="min-w-0">
        <span
          className={`block text-note transition-colors duration-200 ${
            checked ? "text-faint" : "text-ink-2"
          }`}
        >
          {item.label}
        </span>
        {item.detail ? (
          <span className={`mt-1 block text-fine ${checked ? "text-faint" : "text-muted"}`}>
            {item.detail}
          </span>
        ) : null}
      </span>
    </label>
  );
}

function Bar({ done, total }: { done: number; total: number }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <span
      role="progressbar"
      aria-valuenow={done}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`${done} of ${total} done`}
      className="block h-[3px] w-full overflow-hidden rounded-full bg-line"
    >
      <span
        className="block h-full rounded-full bg-brand transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${pct}%` }}
      />
    </span>
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
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0">
      <span className="text-note text-ink-2">{label}</span>
      <span className="flex items-center gap-3">
        <span className="t-meta w-16 text-right text-muted">
          <span className={value >= target ? "text-pos" : "text-ink"}>{value}</span> / {target}
        </span>
        <span className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onChange(Math.max(0, value - 1))}
            aria-label={`One fewer ${label}`}
            className="grid h-7 w-7 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-link"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M2.5 6h7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onChange(value + 1)}
            aria-label={`One more ${label}`}
            className="grid h-7 w-7 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-link"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M6 2.5v7M2.5 6h7" />
            </svg>
          </button>
        </span>
      </span>
    </div>
  );
}

export default function RoadmapBoard() {
  const [saved, setSaved] = useState<Saved>(EMPTY);
  const [ready, setReady] = useState(false);
  const [remainingOnly, setRemainingOnly] = useState(false);

  // read after mount: the server render has no localStorage, so the first paint
  // is always the empty board and the saved state lands a tick later
  useEffect(() => {
    setSaved(read());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      /* private mode, or storage is full. The board still works for this session. */
    }
  }, [saved, ready]);

  const done = useMemo(() => new Set(saved.done), [saved.done]);

  const toggle = useCallback((id: string) => {
    setSaved((prev) => {
      const next = new Set(prev.done);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { ...prev, done: [...next] };
    });
  }, []);

  const totalDone = ALL_ITEM_IDS.filter((id) => done.has(id)).length;
  const total = ALL_ITEM_IDS.length;

  const countFor = (items: Item[]) => items.filter((i) => done.has(i.id)).length;
  const visible = (items: Item[]) =>
    remainingOnly ? items.filter((i) => !done.has(i.id)) : items;

  const groups = [
    ...PHASES.map((p) => ({ id: p.id, n: p.n, title: p.title, note: p.note, items: p.items })),
    { id: "dsa", n: "—", title: "DSA", note: DSA.note, items: DSA.items },
  ];

  return (
    <>
      {/* summary and controls */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="visual rounded-2xl px-6 py-6 sm:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="t-label text-muted">Progress</p>
            <p className="t-meta text-muted">
              <span className="text-ink">{totalDone}</span> of {total} done
            </p>
          </div>
          <div className="mt-4">
            <Bar done={totalDone} total={total} />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <label className="flex cursor-pointer items-center gap-2 text-fine text-body">
              <input
                type="checkbox"
                checked={remainingOnly}
                onChange={() => setRemainingOnly((v) => !v)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className="grid h-[16px] w-[16px] place-items-center rounded-[4px] border border-line-2 bg-white transition-colors peer-checked:border-brand peer-checked:bg-brand peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand"
              >
                <svg viewBox="0 0 14 14" className="h-[10px] w-[10px] text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7.5 5.5 10.5 11.5 3.5" />
                </svg>
              </span>
              Show only what is left
            </label>

            <button
              type="button"
              onClick={() => {
                if (confirm("Clear every tick and reset the problem counts?")) setSaved(EMPTY);
              }}
              className="link-quiet text-fine text-muted"
            >
              Reset progress
            </button>

            <span className="text-fine text-faint">Saved in this browser only</span>
          </div>
        </div>
      </div>

      {/* standing rules */}
      <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 sm:px-10">
        <hr className="rule" />
        <Rail label="Standing rules">
          <div>
            <div>
              <h3 className="t-h3 text-ink">The pass bar</h3>
              <p className="mt-3 max-w-[60ch] text-prose text-body">
                A module is not finished when you have read it. It is finished when all three of
                these are true. Do not move on without them.
              </p>
              <ol className="mt-6 border-t border-line">
                {PASS_BAR.map((rule, i) => (
                  <li key={rule} className="flex gap-4 border-b border-line py-4">
                    <span className="t-meta flex-none pt-[3px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-note text-ink-2">{rule}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <h3 className="t-h3 text-ink">Spaced revision</h3>
              <p className="mt-3 max-w-[60ch] text-prose text-body">{SPACED_REVISION}</p>
            </div>

            <div className="mt-12">
              <h3 className="t-h3 text-ink">The day</h3>
              <dl className="mt-6 border-t border-line">
                {DAILY.map((d) => (
                  <div
                    key={d.task}
                    className="flex items-baseline gap-6 border-b border-line py-4"
                  >
                    <dt className="t-meta w-16 flex-none text-muted">{d.minutes} min</dt>
                    <dd className="min-w-0">
                      <span className="text-note text-ink-2">{d.task}</span>
                      {d.note ? (
                        <span className="ml-3 text-fine text-faint">{d.note}</span>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-fine text-muted">
                {DAILY.reduce((sum, d) => sum + d.minutes, 0)} minutes, two hours and forty.
              </p>
            </div>
          </div>
        </Rail>
      </div>

      {/* the phases */}
      {groups.map((group) => {
        const shown = visible(group.items);
        const gDone = countFor(group.items);
        return (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <div className="mx-auto max-w-5xl px-6 sm:px-10">
              <hr className="rule" />
              <Rail
                label={group.n === "—" ? "Daily" : `Phase ${group.n}`}
                aside={
                  <p className="t-meta text-faint">
                    {gDone} / {group.items.length}
                  </p>
                }
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="t-h3 text-ink">{group.title}</h3>
                    <p className="t-meta text-muted lg:hidden">
                      {gDone} / {group.items.length}
                    </p>
                  </div>
                  {group.note ? (
                    <p className="mt-3 max-w-[62ch] text-prose text-body">{group.note}</p>
                  ) : null}

                  <div className="mt-6 max-w-[360px]">
                    <Bar done={gDone} total={group.items.length} />
                  </div>

                  {shown.length ? (
                    <div className="mt-4 divide-y divide-line border-t border-line">
                      {shown.map((item) => (
                        <Check
                          key={item.id}
                          item={item}
                          checked={done.has(item.id)}
                          onToggle={() => toggle(item.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-6 text-note text-pos">All done.</p>
                  )}

                  {group.id === "dsa" ? (
                    <div className="mt-10">
                      <h4 className="t-label text-faint">Problems solved</h4>
                      <p className="mt-3 max-w-[54ch] text-fine text-muted">
                        Target is {DSA.target.easy + DSA.target.medium}: {DSA.target.easy} easy and{" "}
                        {DSA.target.medium} medium.
                      </p>
                      <div className="mt-4 max-w-[420px] border-t border-line">
                        <Counter
                          label="Easy"
                          value={saved.solved.easy}
                          target={DSA.target.easy}
                          onChange={(easy) =>
                            setSaved((p) => ({ ...p, solved: { ...p.solved, easy } }))
                          }
                        />
                        <Counter
                          label="Medium"
                          value={saved.solved.medium}
                          target={DSA.target.medium}
                          onChange={(medium) =>
                            setSaved((p) => ({ ...p, solved: { ...p.solved, medium } }))
                          }
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </Rail>
            </div>
          </section>
        );
      })}
    </>
  );
}
