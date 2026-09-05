/** "Jul 2025" style label plus a live duration, so it never goes stale. */
export function duration(startISO: string, endISO?: string): string {
  const start = new Date(startISO);
  const end = endISO ? new Date(endISO) : new Date();
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  months = Math.max(months, 1);

  const years = Math.floor(months / 12);
  const rest = months % 12;

  if (years === 0) return `${rest} mo${rest === 1 ? "" : "s"}`;
  if (rest === 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} yr${years === 1 ? "" : "s"} ${rest} mo${rest === 1 ? "" : "s"}`;
}
