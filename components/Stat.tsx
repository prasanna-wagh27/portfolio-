/**
 * A figure with its claim and its source.
 *
 * Desktop: numeral, label and source stack in three subgrid rows, so the
 * baselines line up across columns no matter how the text wraps.
 * Mobile: the numeral moves into its own column beside the text, which turns
 * a six-line block into three and keeps the panel from running down the page.
 *
 * Prefix and unit sit on the numeral's baseline at a smaller size, and the
 * prefix hangs into the gutter so numerals share a left edge.
 */
export default function Stat({
  value,
  unit,
  prefix,
  label,
  source,
}: {
  value: string;
  unit?: string;
  prefix?: string;
  label: string;
  source?: string;
}) {
  return (
    <div className="grid grid-cols-[6rem_1fr] items-baseline gap-x-3.5 sm:grid-cols-1 sm:row-span-3 sm:grid-rows-subgrid">
      <p className="flex items-baseline text-ink">
        <span className="relative text-[34px] font-semibold leading-[1] tracking-[-0.045em] sm:text-[clamp(40px,4.4vw,54px)]">
          {prefix ? (
            <span
              aria-hidden="true"
              className="absolute bottom-[0.02em] right-full mr-[0.05em] text-[15px] font-medium tracking-[-0.02em] text-faint sm:text-[clamp(19px,2vw,24px)]"
            >
              {prefix}
            </span>
          ) : null}
          {prefix ? (
            <span className="sr-only">{prefix === "~" ? "about " : "under "}</span>
          ) : null}
          {value}
        </span>
        {unit ? (
          <span className="ml-[0.08em] text-[15px] font-medium tracking-[-0.02em] text-brand-large sm:text-[clamp(19px,2vw,24px)]">
            {unit}
          </span>
        ) : null}
      </p>

      <div className="sm:contents">
        <p className="max-w-[26ch] text-[15px] font-medium leading-[1.4] tracking-[-0.015em] text-ink-2 sm:mt-3">
          {label}
        </p>
        {source ? (
          <p className="t-meta mt-1.5 max-w-[38ch] text-[11.5px] leading-[1.55] text-muted sm:mt-2.5 sm:text-[12.5px]">
            {source}
          </p>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
