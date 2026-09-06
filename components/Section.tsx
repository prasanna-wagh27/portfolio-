import type { ReactNode } from "react";
import Rail from "./Rail";

/** A top level page section: a hairline, then the label rail and its content. */
export default function Section({
  id,
  label,
  children,
  soft = false,
}: {
  id: string;
  label: string;
  children: ReactNode;
  soft?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${soft ? "wash-section" : "bg-white"}`}>
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {soft ? null : <hr className="rule" />}
        <Rail label={label}>{children}</Rail>
      </div>
    </section>
  );
}
