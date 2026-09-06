/**
 * Hand-drawn system diagrams, one per case study.
 *
 * These are the product visual. A portfolio that claims system design should
 * show a system, so the shapes here are the real request path rather than
 * decoration: what talks to what, and what sits behind a queue.
 *
 * Drop a real screenshot into /public and set `shot` on the project to take
 * priority over the diagram.
 */

type Tone = "surface" | "api" | "data" | "worker";

const TONE: Record<Tone, { fill: string; stroke: string; title: string; sub: string }> = {
  surface: { fill: "#ffffff", stroke: "rgba(26,160,230,0.32)", title: "#08151d", sub: "#566f7d" },
  api: { fill: "#0a1f2e", stroke: "rgba(98,233,255,0.34)", title: "#ffffff", sub: "#9fc0d2" },
  data: { fill: "#e7f6fe", stroke: "rgba(26,160,230,0.34)", title: "#08151d", sub: "#41677d" },
  worker: { fill: "#ffffff", stroke: "rgba(26,160,230,0.24)", title: "#102434", sub: "#566f7d" },
};

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  tone = "surface",
  dashed = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  tone?: Tone;
  dashed?: boolean;
}) {
  const t = TONE[tone];
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={t.fill}
        stroke={t.stroke}
        strokeWidth="1.25"
        strokeDasharray={dashed ? "5 5" : undefined}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 5 : y + h / 2 + 5}
        textAnchor="middle"
        fill={t.title}
        fontSize="15"
        fontWeight="560"
        letterSpacing="-0.02em"
      >
        {title}
      </text>
      {sub ? (
        <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fill={t.sub} fontSize="11.5">
          {sub}
        </text>
      ) : null}
    </g>
  );
}

/** Vertical connector with a small head, drawn top down. */
function Down({ x, from, to }: { x: number; from: number; to: number }) {
  return (
    <g stroke="rgba(26,160,230,0.55)" strokeWidth="1.25" fill="none">
      <path d={`M${x} ${from}V${to - 6}`} />
      <path d={`M${x - 4} ${to - 6} ${x} ${to} ${x + 4} ${to - 6}`} fill="rgba(26,160,230,0.55)" stroke="none" />
    </g>
  );
}

function Frame({
  label,
  alt,
  children,
  width,
}: {
  /** Shown in the header strip. Short, because the project name is directly above it. */
  label: string;
  /** The full description, for anyone who cannot see the drawing. */
  alt: string;
  children: React.ReactNode;
  width: number;
}) {
  return (
    <figure className="diagram">
      <figcaption className="visual-head flex items-baseline justify-between gap-4 px-6 py-4">
        <span className="t-label text-muted">{label}</span>
        <span className="text-meta text-faint lg:hidden">swipe</span>
      </figcaption>
      {/* Scrolls rather than scales below 620px: shrinking the whole frame to a
          phone would take the labels under 7px and make the diagram useless. The
          mask fades the cut edge so it reads as continuing, not as clipped. */}
      <div className="diagram-scroll overflow-x-auto px-6 py-8">
        <svg
          viewBox={`0 0 ${width} 452`}
          role="img"
          aria-label={alt}
          className="block h-auto w-full min-w-[620px]"
          fontFamily="inherit"
        >
          {children}
        </svg>
      </div>
    </figure>
  );
}

const W = 940;
/** Four evenly spaced columns across the frame. */
const COL = [20, 255, 490, 725];
const CW = 195;

function Bus({ y, from, to }: { y: number; from: number; to: number }) {
  return <path d={`M${from} ${y}H${to}`} stroke="rgba(26,160,230,0.4)" strokeWidth="1.25" fill="none" />;
}

function TourDiagram() {
  const centres = COL.map((x) => x + CW / 2);
  return (
    <Frame width={W} label="Request path" alt="Request path through the tour booking marketplace: four role portals above one REST API, with PostgreSQL, Redis and BullMQ behind it and workers off the request path.">
      <Box x={COL[0]} y={16} w={CW} h={66} title="Customer" sub="search, book, pay" />
      <Box x={COL[1]} y={16} w={CW} h={66} title="Guide" sub="assigned schedule" />
      <Box x={COL[2]} y={16} w={CW} h={66} title="Tour Operator" sub="listings, availability" />
      <Box x={COL[3]} y={16} w={CW} h={66} title="Admin" sub="oversight, correction" />

      {centres.map((c) => (
        <Down key={c} x={c} from={82} to={116} />
      ))}
      <Bus y={116} from={centres[0]} to={centres[3]} />
      <Down x={W / 2} from={116} to={148} />

      <Box
        x={20}
        y={148}
        w={W - 40}
        h={84}
        tone="api"
        title="REST API · Node and Express"
        sub="JWT verified and role checked at the boundary, not in the UI"
      />

      <Down x={165} from={232} to={276} />
      <Down x={W / 2} from={232} to={276} />
      <Down x={W - 165} from={232} to={276} />

      <Box x={20} y={276} w={290} h={80} tone="data" title="PostgreSQL" sub="bookings, listings, availability" />
      <Box x={325} y={276} w={290} h={80} tone="data" title="Redis" sub="read-through cache, evicted on write" />
      <Box x={630} y={276} w={290} h={80} tone="data" title="BullMQ" sub="confirmation and notification jobs" />

      <Down x={775} from={356} to={392} />
      <Box
        x={630}
        y={392}
        w={290}
        h={54}
        tone="worker"
        dashed
        title="Workers"
        sub="retry on failure, off the request path"
      />
    </Frame>
  );
}

function RecruiterDiagram() {
  const centres = COL.map((x) => x + CW / 2);
  return (
    <Frame width={W} label="Access model" alt="Access model for the recruiter marketplace: four platforms above one REST API that resolves permissions from the referral relationship, over vacancies, pipeline states and commission attribution.">
      <Box x={COL[0]} y={16} w={CW} h={66} title="Employer" sub="post, review, accept" />
      <Box x={COL[1]} y={16} w={CW} h={66} title="Recruiter" sub="bid, refer, earn" />
      <Box x={COL[2]} y={16} w={CW} h={66} title="Candidate" sub="own profile only" />
      <Box x={COL[3]} y={16} w={CW} h={66} title="Admin" sub="oversight, disputes" />

      {centres.map((c) => (
        <Down key={c} x={c} from={82} to={116} />
      ))}
      <Bus y={116} from={centres[0]} to={centres[3]} />
      <Down x={W / 2} from={116} to={148} />

      <Box
        x={20}
        y={148}
        w={W - 40}
        h={84}
        tone="api"
        title="REST API · relationship-scoped authorisation"
        sub="who referred whom, against which vacancy: resolved per request, not per role"
      />

      <Down x={165} from={232} to={276} />
      <Down x={W / 2} from={232} to={276} />
      <Down x={W - 165} from={232} to={276} />

      <Box x={20} y={276} w={290} h={80} tone="data" title="PostgreSQL" sub="vacancies, bids, referrals" />
      <Box x={325} y={276} w={290} h={80} tone="data" title="Pipeline states" sub="explicit transitions, recorded" />
      <Box x={630} y={276} w={290} h={80} tone="data" title="Attribution" sub="referral chain, commission" />

      <Down x={W / 2} from={356} to={392} />
      <Box
        x={325}
        y={392}
        w={290}
        h={54}
        tone="worker"
        dashed
        title="Audit trail"
        sub="who moved a candidate, and when"
      />
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => React.ReactElement> = {
  "tour-booking-marketplace": TourDiagram,
  "recruiter-marketplace": RecruiterDiagram,
};

export default function Diagram({ slug }: { slug: string }) {
  const D = DIAGRAMS[slug];
  return D ? <D /> : null;
}

export function hasDiagram(slug: string): boolean {
  return slug in DIAGRAMS;
}
