"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TProject } from "@/types/project.type";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";
import { Badge } from "./badge";

const ProjectContent = ({ projects }: { projects: TProject[] }) => {
  const [tab, setTab] = useState("all");
  return (
    <Tabs onValueChange={(value) => setTab(value)} defaultValue="all">
      <div className="border-b space-y-5 pb-5">
        <TabsList data-aos="fade-right" className="border border-gray-50">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
        </TabsList>
        <p data-aos="fade-right" className="text-slate-500">
          As a web developer specializes in designing, creating and maintaining
          websites and web applications. Ensured optimal performance, user
          experience and functionality through coding, debugging and debugging
          using HTML, CSS, JavaScript framework based technologies.
        </p>
      </div>
      <TabsContent value={tab}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-24 mt-24 ">
          {projects
            .filter((project) =>
              tab === "all" ? project : project.projectType === tab
            )
            .map((project) => (
              <Link href={`products/${project._id}`} key={project._id}>
                <div
                  className="relative p-6 bg-white text-center shadow-md hover:shadow-xl duration-100 group hover:scale-[1.05] "
                >
                  {project.images && (
                    <div
                      className="w-10/12 mx-auto -mt-16"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%)",
                      }}
                    >
                      <Image
                        src={project.images[0]}
                        alt="Image"
                        width={800}
                        height={800}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h1 className="text-xl font-bold line-clamp-1 mt-4">
                    {project.title}
                  </h1>
                  <Badge
                    className="rounded-sm bg-green-500 capitalize mt-4"
                    variant={"destructive"}
                  >
                    {project.projectType}
                  </Badge>
                  {/* <p className="capitalize text-sm mt-1">
                    ({project.projectType})
                  </p> */}
                  <p className="line-clamp-4 mt-5 text-sm mb-4 text-slate-700">
                    {project.des}
                  </p>
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-600",
                      {
                        "from-pink-500 via-purple-300 to-red-300":
                          project.projectType === "backend",
                        "from-fuchsia-600 via-yellow-200 to-pink-500":
                          project.projectType === "frontend",
                      }
                    )}
                  />
                  <div className="bg-black/50 absolute inset-0 w-full rounded-sm flex justify-center items-center duration-500 opacity-0 group-hover:opacity-100">
                    <Button variant="outline" className="rounded-full mb-1">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProjectContent;
