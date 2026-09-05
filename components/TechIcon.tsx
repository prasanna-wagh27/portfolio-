import { ICONS } from "@/lib/icons";

/**
 * Renders a real brand mark from the simple-icons set (see lib/icons.ts).
 * Anything without an official mark gets a monogram tile instead of an
 * invented logo.
 */
export default function TechIcon({ slug }: { slug?: string; label?: string }) {
  const icon = slug ? ICONS[slug] : undefined;

  // No official brand mark exists for this one — show the label alone rather
  // than inventing a logo for it.
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-none"
      fill={icon.hex}
      role="img"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
