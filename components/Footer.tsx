export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="flex flex-col gap-3 py-8 text-fine text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Prasanna Wagh</span>
          <span className="t-meta">Pune, Maharashtra, India</span>
          <a href="#top" className="link-quiet self-start text-fine sm:self-auto">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
