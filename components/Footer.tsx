export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} Prasanna Wagh</span>
        <span className="font-mono text-[12px]">Pune, Maharashtra, India</span>
        <span>Next.js · TypeScript · Tailwind — no tracking</span>
      </div>
    </footer>
  );
}
