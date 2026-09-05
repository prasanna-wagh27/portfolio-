import { ICONS } from "@/lib/icons";

/**
 * Real brand marks only, generated from simple-icons into lib/icons.ts.
 * Anything with no official mark returns null and shows as a plain label,
 * rather than getting a logo invented for it.
 */
export default function TechIcon({ slug, className = "h-[18px] w-[18px]" }: { slug?: string; className?: string }) {
  const icon = slug ? ICONS[slug] : undefined;
  if (!icon) return null;

  return (
    <svg viewBox="0 0 24 24" className={`${className} flex-none`} fill={icon.hex} aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
