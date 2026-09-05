import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-line ${tinted ? "bg-haze" : "bg-white"}`}>
      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </p>
          <h2 className="display mt-3 text-[clamp(25px,3.4vw,34px)] text-ink">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
