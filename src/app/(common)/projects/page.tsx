import ProjectContent from "@/components/ui/ProjectContent";
import React from "react";

const AllProjects = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/projects`, {
    next: { revalidate: 30 },
  });
  const { data } = await res.json();
  return (
    <div
      id="blog"
      className="min-h-screen flex flex-col justify-center pt-14 lg:pt-10 px-4 pb-32 md:px-16 space-y-16 relative"
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

export default AllProjects;
