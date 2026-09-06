import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Masthead from "@/components/Masthead";
import Proof from "@/components/Proof";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Toolkit from "@/components/Toolkit";
import Contributions from "@/components/Contributions";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-[14px] focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main>
        <Masthead />
        <Proof />
        <Work />
        <Experience />
        <Approach />
        <Toolkit />
        <Contributions />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
