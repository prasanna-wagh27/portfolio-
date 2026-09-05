/**
 * A figure set the way a magazine sets one.
 *
 * Prefix and unit sit on the SAME baseline as the numeral at a smaller size,
 * which is how "85%" is actually set. The previous version raised them with
 * arbitrary margin-top values, which left the four columns visibly ragged.
 */
export default function Stat({
  value,
  unit,
  prefix,
  label,
  source,
  size = "lg",
}: {
  value: string;
  unit?: string;
  prefix?: string;
  label: string;
  source?: string;
  size?: "lg" | "sm";
}) {
  const numeral = size === "lg" ? "text-[clamp(40px,4.4vw,54px)]" : "text-[32px]";
  const affix = size === "lg" ? "text-[clamp(19px,2vw,24px)]" : "text-[16px]";

  return (
    <div className="grid gap-0 sm:row-span-3 sm:grid-rows-subgrid">
      <p className="flex items-baseline text-ink">
        {/* the prefix hangs into the gutter so 40, 60 and 10 share a left edge */}
        <span className={`relative ${numeral} font-semibold leading-[1] tracking-[-0.045em]`}>
          {prefix ? (
            <span
              aria-hidden="true"
              className={`absolute bottom-[0.02em] right-full mr-[0.05em] ${affix} font-medium tracking-[-0.02em] text-faint`}
            >
              {prefix}
            </span>
          ) : null}
          {prefix ? <span className="sr-only">{prefix === "~" ? "about " : "under "}</span> : null}
          {value}
        </span>
        {unit ? (
          <span className={`${affix} ml-[0.08em] font-medium tracking-[-0.02em] text-brand-text`}>
            {unit}
          </span>
        ) : null}
      </p>

      <p className="mt-3 max-w-[24ch] text-[15px] font-medium leading-[1.4] tracking-[-0.015em] text-ink-2">
        {label}
      </p>

      {source ? (
        <p className="t-meta mt-2.5 max-w-[36ch] leading-[1.55] text-muted">{source}</p>
      ) : (
        <span aria-hidden="true" />
      )}
    </div>
  );
}
