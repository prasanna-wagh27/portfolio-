import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[168px_1fr] lg:gap-14">
          <Reveal>
            <h2 className="t-label flex items-center gap-2.5 pt-1 text-muted">
              <span className="h-[6px] w-[6px] rounded-full bg-brand" />
              Contact
            </h2>
          </Reveal>

          <div className="min-w-0">
            <Reveal>
              <p className="max-w-[54ch] text-[16px] leading-[1.65] text-body sm:text-[17px]">
                If you are hiring, send me the job description and I will tell you honestly whether
                I am a fit. I reply the same day.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="mailto:prasannawagh146@gmail.com"
                  className="link text-[16px] font-medium text-link"
                >
                  prasannawagh146@gmail.com
                </a>
                <a href="tel:+917798701635" className="link-quiet text-[15px] text-body">
                  +91 77987 01635
                </a>
                <a
                  href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
                  download
                  className="link-quiet text-[15px] text-body"
                >
                  Résumé (PDF)
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
