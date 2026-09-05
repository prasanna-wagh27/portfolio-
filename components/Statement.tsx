import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="grad-night py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="display mx-auto max-w-[22ch] text-[clamp(30px,5vw,56px)] text-white">
            The engineers worth hiring are the ones who can follow a bug from the button to the
            index that made it slow.
          </h2>
          <p className="mt-8 text-[clamp(22px,3vw,34px)] font-medium tracking-[-0.03em] text-cyan-on-night">
            That&rsquo;s the engineer you&rsquo;re hiring.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
