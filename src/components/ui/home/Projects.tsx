import ProjectContent from "../ProjectContent";

const Projects = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/projects`, {
    next: { revalidate: 30 },
  });
  const { data } = await res.json();
  return (
    <div
      id="project"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-20 space-y-16 relative"
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
    </div>
  );
};

export default Projects;
