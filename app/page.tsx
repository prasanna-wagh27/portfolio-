import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Pillars from "@/components/Pillars";
import Work from "@/components/Work";
import BeforeAfter from "@/components/BeforeAfter";
import Statement from "@/components/Statement";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-[14px] focus:font-medium focus:text-white"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Pillars />
        <Work />
        <BeforeAfter />
        <Statement />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
