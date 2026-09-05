import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-[14px] focus:font-medium focus:text-white"
      >
        Skip to experience
      </a>
      <Nav />
      <main>
        <Header />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}
