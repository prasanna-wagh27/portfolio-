import Rail from "./Rail";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <hr className="rule" />
        <Rail label="Contact">
          <div>
            <Reveal>
              <p className="max-w-[54ch] text-prose text-body">
                If you are hiring, send me the job description and I will tell you honestly whether
                I am a fit. I reply the same day.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="mailto:prasannawagh146@gmail.com"
                  className="link text-prose font-medium text-link"
                >
                  prasannawagh146@gmail.com
                </a>
                <a href="tel:+917798701635" className="link-quiet text-note text-body">
                  +91 77987 01635
                </a>
                <a
                  href="/Prasanna-Wagh-Fullstack-Engineer.pdf"
                  download
                  className="link-quiet text-note text-body"
                >
                  Résumé (PDF)
                </a>
              </p>
            </Reveal>
          </div>
        </Rail>
      </div>
    </section>
  );
}
