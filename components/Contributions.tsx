import Reveal from "./Reveal";
import Section from "./Section";

const USER = "prasanna-wagh27";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Payload = { total: Record<string, number>; contributions: Day[] };

const LEVEL = [
  "bg-[#eaf0f4]",
  "bg-[rgba(26,160,230,0.28)]",
  "bg-[rgba(26,160,230,0.5)]",
  "bg-[rgba(26,160,230,0.75)]",
  "bg-brand",
];

async function getContributions(): Promise<Payload | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`,
      { next: { revalidate: 21600 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as Payload;
  } catch {
    return null;
  }
}

/** Groups the flat day list into calendar weeks, each column starting Sunday. */
function toWeeks(days: Day[]): Day[][] {
  const weeks: Day[][] = [];
  let week: Day[] = [];
  for (const day of days) {
    const weekday = new Date(day.date).getUTCDay();
    if (weekday === 0 && week.length) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  }
  if (week.length) weeks.push(week);
  return weeks;
}

export default async function Contributions() {
  const data = await getContributions();
  if (!data) return null;

  const days = data.contributions;
  const weeks = toWeeks(days);
  const total = data.total.lastYear ?? Object.values(data.total)[0] ?? 0;

  // one label per month, positioned at the week its month first appears
  const labels: { col: number; text: string }[] = [];
  let lastMonth = "";
  weeks.forEach((week, i) => {
    const first = week[0];
    if (!first) return;
    const month = new Date(first.date).toLocaleString("en", { month: "short", timeZone: "UTC" });
    if (month === lastMonth) return;
    lastMonth = month;
    // a label needs three columns of room, otherwise the first two collide
    const previous = labels[labels.length - 1];
    if (previous && i - previous.col < 3) return;
    labels.push({ col: i, text: month });
  });

  return (
    <Section id="activity" label="Activity" soft>
      <Reveal>
        <p className="max-w-[54ch] text-[16px] leading-[1.65] text-body">
          <span className="font-medium text-ink">{total.toLocaleString("en")} contributions</span>{" "}
          in the last year on{" "}
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noopener"
            className="link font-medium text-link"
          >
            github.com/{USER}
          </a>
          . Pulled live from GitHub, not a screenshot.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-9 overflow-x-auto pb-2 [mask-image:linear-gradient(90deg,#000_0%,#000_94%,transparent_100%)] lg:[mask-image:none]">
          <div className="min-w-[680px]">
            <div className="mb-2 flex gap-[3px] pl-0">
              {weeks.map((_, i) => {
                const label = labels.find((l) => l.col === i);
                return (
                  <span key={i} className="w-[11px] shrink-0 text-[10px] text-faint">
                    {label ? label.text : ""}
                  </span>
                );
              })}
            </div>

            <div className="flex gap-[3px]">
              {weeks.map((week, i) => (
                <div key={i} className="flex w-[11px] shrink-0 flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, d) => {
                    const day = week.find((x) => new Date(x.date).getUTCDay() === d);
                    if (!day) return <span key={d} className="h-[11px] w-[11px]" />;
                    return (
                      <span
                        key={d}
                        title={`${day.count} on ${day.date}`}
                        className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL[day.level]}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11.5px] text-faint">
              <span>Less</span>
              {LEVEL.map((c, i) => (
                <span key={i} className={`h-[11px] w-[11px] rounded-[2px] ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
