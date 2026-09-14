import Link from "next/link";

export default function Footer({ roadmap = true }: { roadmap?: boolean }) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="flex flex-col gap-3 py-8 text-fine text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Prasanna Wagh</span>
          <span className="t-meta">Pune, Maharashtra, India</span>
          <span className="flex items-center gap-6 self-start sm:self-auto">
            {roadmap ? (
              <Link href="/roadmap" className="link-quiet text-fine">
                Roadmap
              </Link>
            ) : null}
            <a href="#top" className="link-quiet text-fine">
              Back to top
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
