import About from "@/components/ui/home/About";
import Banner from "@/components/ui/home/Banner";
import Projects from "@/components/ui/home/Projects";
import Skills from "@/components/ui/home/Skills";
import WorkExperience from "@/components/ui/home/WorkExperience";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
    </main>
  );
}
