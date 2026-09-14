import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RoadmapBoard from "@/components/RoadmapBoard";
import ScrollProgress from "@/components/ScrollProgress";
import { GOAL } from "@/lib/roadmap";

/**
 * A private working page. It is reachable from the footer and nowhere else:
 * not in the nav, not in the command menu, and not in search results.
 */
export const metadata: Metadata = {
  title: "Roadmap · Prasanna Wagh",
  description: "Interview preparation plan and progress.",
  robots: { index: false, follow: false, nocache: true },
};

export default function RoadmapPage() {
  return (
    <>
      <ScrollProgress />
      <Nav home={false} />

      <main>
        <header id="top" className="wash-top">
          <div className="mx-auto max-w-5xl px-6 pb-16 pt-12 sm:px-10 sm:pb-20 sm:pt-16">
            <Link href="/" className="link-quiet inline-flex items-center gap-2 text-fine text-muted">
              <span aria-hidden="true">←</span> Back to the site
            </Link>

            <h1 className="rise t-name mt-8 max-w-[14ch] text-ink">Interview roadmap</h1>

            <p className="rise mt-8 max-w-[62ch] text-prose text-body" style={{ "--d": "60ms" } as React.CSSProperties}>
              {GOAL}
            </p>
          </div>
        </header>

        <div className="-mt-8">
          <RoadmapBoard />
        </div>
      </main>

      <Footer roadmap={false} />
    </>
  );
}
