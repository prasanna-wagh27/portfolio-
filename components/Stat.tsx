/**
 * A figure set the way a magazine sets one: the numeral large, the unit
 * dropped to a smaller size and hung off the top, the caption underneath.
 */
export default function Stat({
  value,
  unit,
  prefix,
  label,
  size = "lg",
}: {
  value: string;
  unit?: string;
  prefix?: string;
  label: string;
  size?: "lg" | "sm";
}) {
  const big = size === "lg" ? "text-[clamp(38px,4.6vw,52px)]" : "text-[30px]";
  const small = size === "lg" ? "text-[clamp(17px,2vw,22px)]" : "text-[15px]";

  return (
    <div>
      <p className="flex items-start text-ink">
        {prefix ? (
          <span className={`${small} mt-[0.28em] font-medium tracking-[-0.02em] text-muted`}>
            {prefix}
          </span>
        ) : null}
        <span className={`${big} font-semibold leading-[0.9] tracking-[-0.045em]`}>{value}</span>
        {unit ? (
          <span className={`${small} mt-[0.18em] ml-[0.06em] font-medium tracking-[-0.02em] text-brand`}>
            {unit}
          </span>
        ) : null}
      </p>
      <p className="mt-3 max-w-[22ch] text-[13.5px] leading-[1.45] text-muted">{label}</p>
    </div>
  );
}
