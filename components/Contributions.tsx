import Reveal from "./Reveal";
import Section from "./Section";

/**
 * One line and a small strip. A commit count cannot say whether the work was a
 * typo fix or a system, so it does not get more room than that. The number is
 * pulled live rather than typed in, so it cannot go stale.
 */
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
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, {
      next: { revalidate: 21600 },
    });
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
    if (new Date(day.date).getUTCDay() === 0 && week.length) {
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

  const weeks = toWeeks(data.contributions);
  const total = data.total.lastYear ?? Object.values(data.total)[0] ?? 0;

  return (
    <Section id="github" label="GitHub">
      <Reveal>
        <p className="max-w-[58ch] text-[15.5px] leading-[1.65] text-body">
          <span className="font-medium text-ink">{total.toLocaleString("en")} contributions</span>{" "}
          in the last year, pulled live from{" "}
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noopener"
            className="link font-medium text-link"
          >
            github.com/{USER}
          </a>
          . Most of my work is in client repositories, so this only shows part of it.
        </p>
      </Reveal>

      <Reveal delay={70}>
        <div
          className="mt-7 overflow-hidden [mask-image:linear-gradient(90deg,#000_0%,#000_88%,transparent_100%)]"
          aria-hidden="true"
        >
          <div className="flex gap-[2px]">
            {weeks.map((week, i) => (
              <div key={i} className="flex w-[7px] flex-none flex-col gap-[2px]">
                {Array.from({ length: 7 }).map((_, d) => {
                  const day = week.find((x) => new Date(x.date).getUTCDay() === d);
                  return (
                    <span
                      key={d}
                      className={`h-[7px] w-[7px] rounded-[1.5px] ${day ? LEVEL[day.level] : ""}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
