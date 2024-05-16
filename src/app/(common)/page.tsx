import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
