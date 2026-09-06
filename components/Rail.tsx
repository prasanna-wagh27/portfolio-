import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * The page's one layout primitive: a label rail on the left, content on the
 * right. Every section on the site is built from this, so the grid, the sticky
 * behaviour and the optical alignment are defined once instead of being
 * re-typed per component and drifting apart.
 *
 * The label sits 5px down. An 11px label with a line height of 1 has its cap
 * top almost at the box top, while a 16.5px paragraph at 1.68 carries about
 * 5.6px of half-leading above its cap. Nudging the label down by that much is
 * what makes the two read as sitting on the same line.
 */
export default function Rail({
  label,
  children,
  id,
  tone = "light",
}: {
  label: string;
  children: ReactNode;
  id?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[176px_1fr] lg:gap-12">
      <Reveal>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2
            id={id}
            className={`t-label flex items-center gap-3 pt-[5px] ${
              dark ? "text-[#7f9aab]" : "text-muted"
            }`}
          >
            <span
              className={`h-[5px] w-[5px] flex-none rounded-full ${dark ? "bg-cyan" : "bg-brand"}`}
            />
            {label}
          </h2>
          {/* a rule under the running head, the way a section opens in print */}
          <span
            aria-hidden="true"
            className={`mt-4 hidden h-px w-full lg:block ${dark ? "rule-dark" : "rule-tight"}`}
          />
        </div>
      </Reveal>

      <div className="min-w-0">{children}</div>
    </div>
  );
}
