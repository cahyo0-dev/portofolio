import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="dark:bg-[#0D0D0D] bg-[#F7F6F3] min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
