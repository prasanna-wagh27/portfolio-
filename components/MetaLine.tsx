import { Fragment, type ReactNode } from "react";

/**
 * A row of small facts: role, company, dates.
 *
 * Middot separated on a wide screen. On a narrow one the items stack and the
 * separators disappear, because a wrapping middot row leaves a dot stranded at
 * the end of a line, which is the sort of thing that makes a page look unfinished.
 */
export default function MetaLine({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  const shown = items.filter(Boolean);
  return (
    <p className={`flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 ${className}`}>
      {shown.map((item, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <span aria-hidden="true" className="hidden text-line-2 sm:inline">
              ·
            </span>
          ) : null}
          <span>{item}</span>
        </Fragment>
      ))}
    </p>
  );
}
