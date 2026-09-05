import CountUp from "./CountUp";

/**
 * A figure set the way the reference sets one: numeral large, unit dropped
 * smaller and hung off the top, caption underneath.
 */
export default function Stat({
  value,
  unit,
  prefix,
  label,
  size = "lg",
  animate = false,
}: {
  value: string;
  unit?: string;
  prefix?: string;
  label: string;
  size?: "lg" | "sm";
  animate?: boolean;
}) {
  const big = size === "lg" ? "text-[clamp(38px,4.6vw,52px)]" : "text-[30px]";
  const small = size === "lg" ? "text-[clamp(17px,2vw,22px)]" : "text-[15px]";
  const numeric = Number(value);

  return (
    <div>
      <p className="flex items-start text-ink">
        {prefix ? (
          <span className={`${small} mt-[0.3em] font-medium tracking-[-0.02em] text-faint`}>
            {prefix}
          </span>
        ) : null}
        <span className={`${big} font-semibold leading-[0.9] tracking-[-0.045em]`}>
          {animate && Number.isFinite(numeric) ? <CountUp to={numeric} /> : value}
        </span>
        {unit ? (
          <span
            className={`${small} mt-[0.2em] ml-[0.06em] font-medium tracking-[-0.02em] text-brand-text`}
          >
            {unit}
          </span>
        ) : null}
      </p>
      <p className="mt-3 max-w-[22ch] text-[13.5px] leading-[1.45] text-muted">{label}</p>
    </div>
  );
}
