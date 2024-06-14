import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import WorkExperience from "@/components/home/WorkExperience";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}
