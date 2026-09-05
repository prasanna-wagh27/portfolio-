import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Two column editorial frame: a label rail on the left, content on the right.
 * Keeps the page reading as a document instead of a stack of centred blocks.
 */
export default function Section({
  id,
  label,
  title,
  children,
  soft = false,
}: {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
  soft?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${soft ? "wash-soft" : "bg-white"}`}>
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="grid gap-8 py-16 sm:py-24 lg:grid-cols-[168px_1fr] lg:gap-14">
          <Reveal>
            <p className="t-label flex items-center gap-2.5 pt-1 text-muted lg:sticky lg:top-24">
              <span className="h-[5px] w-[5px] rounded-full bg-brand" />
              {label}
            </p>
          </Reveal>
          <div>
            {title ? (
              <Reveal>
                <h2 className="t-h2 mb-12 max-w-[20ch] text-[clamp(26px,3.2vw,36px)] text-ink">
                  {title}
                </h2>
              </Reveal>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
