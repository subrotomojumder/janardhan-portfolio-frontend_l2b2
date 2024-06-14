import Link from "next/link";
import ProjectContent from "../ui/ProjectContent";
import { Button } from "../ui/button";

const Projects = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/projects?limit=6`, {
    next: { revalidate: 30 },
  });
  const { data } = await res.json();
  return (
    <div
      id="project"
      className="min-h-screen flex flex-col justify-center py-32 px-4 md:px-16 space-y-16 relative"
      style={{
        background: `linear-gradient(90deg, rgba(255, 99, 71, 0.1), rgba(0, 0, 0, 0)), url(https://i.ibb.co/NsvqYx8/category-BG.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="space-y-3">
        <p className="text-xs text-slate-400 font-mono uppercase">Projects</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-500"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          RECENT WORK
        </h5>
      </div>
      <ProjectContent projects={data} />
      <div className="text-center">
        <Link href={`projects`}>
          <Button variant="link">See All...</Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
