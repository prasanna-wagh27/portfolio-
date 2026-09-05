import Reveal from "./Reveal";

const ROWS = [
  {
    who: "Tour Operator · Barcelona",
    sub: "Gothic Quarter walking tour",
    detail: "18 seats · Sat 09:30",
    status: "Confirmed",
    tone: "pos",
  },
  {
    who: "Guide portal",
    sub: "Manifest published",
    detail: "BullMQ · 40ms",
    status: "Queued",
    tone: "brand",
  },
  {
    who: "Customer · Valencia",
    sub: "Sunset boat experience",
    detail: "2 adults · Redis hit",
    status: "Paid",
    tone: "pos",
  },
  {
    who: "Admin · payouts",
    sub: "Operator settlement run",
    detail: "Cron · nightly",
    status: "Scheduled",
    tone: "muted",
  },
];

const TONE: Record<string, string> = {
  pos: "bg-pos-tint text-pos",
  brand: "bg-tint text-brand-ink",
  muted: "bg-haze text-muted",
};

export default function Hero() {
  return (
    <section id="top" className="grad-hero relative">
      <div className="mx-auto max-w-6xl px-5 pb-56 pt-16 text-center sm:px-8 sm:pb-64 sm:pt-24">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[13.5px] font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Open to full-stack engineering roles — Pune (hybrid)
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-xl mx-auto mt-7 max-w-[15ch] text-[clamp(40px,7.6vw,80px)] text-white">
            Full-stack engineer who ships the whole thing
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-[54ch] text-[clamp(16.5px,2vw,20px)] leading-[1.55] text-white">
            Frontend, API, database, deploy — I take products from an empty repo to production.
            Currently leading a tour booking marketplace{" "}
            <span className="font-medium">live across Spain and Europe</span>, reporting to the CEO
            and guiding a team of three.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
              download
              className="inline-flex w-full max-w-sm items-center gap-3.5 rounded-full bg-white px-6 py-3.5 text-left shadow-[0_18px_40px_-24px_rgba(2,32,56,0.75)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-tint text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 19h14" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[16px] font-semibold tracking-[-0.02em] text-ink">
                  Download résumé
                </span>
                <span className="block text-[13.5px] text-muted">One page · PDF</span>
              </span>
            </a>

            <a
              href="#work"
              className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-6 py-4 text-[15.5px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
            >
              See selected work
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Console mock — overlaps into the section below, like the reference hero */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1/2 px-5 sm:px-8">
        <Reveal delay={320}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-[0_40px_80px_-40px_rgba(2,32,56,0.5)] backdrop-blur-xl">
            <div className="flex items-center gap-2.5 border-b border-line px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
              <span className="ml-2 font-mono text-[12px] text-muted">
                bookings — production
              </span>
              <span className="ml-auto hidden items-center gap-1.5 rounded-full bg-pos-tint px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-[0.08em] text-pos sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-pos" />
                LIVE
              </span>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-[11px] uppercase tracking-[0.12em] text-muted">
                  <th scope="col" className="px-5 py-2.5 font-medium">Source</th>
                  <th scope="col" className="hidden px-5 py-2.5 font-medium sm:table-cell">Event</th>
                  <th scope="col" className="px-5 py-2.5 text-right font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.who} className="border-b border-line last:border-0">
                    <td className="px-5 py-3">
                      <span className="block text-[14px] font-medium text-ink">{r.who}</span>
                      <span className="block text-[12.5px] text-muted">{r.sub}</span>
                    </td>
                    <td className="hidden px-5 py-3 font-mono text-[12.5px] text-body sm:table-cell">
                      {r.detail}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[12px] font-medium ${TONE[r.tone]}`}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
