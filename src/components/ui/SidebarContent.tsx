import { sideRoutes } from "@/utils/routeConstants";
import Image from "next/image";
import Link from "next/link";

const SidebarContent = () => {
  return (
    <div>
      <div className="px-5 text-center py-10">
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden object-center border">
          <Image
            src={"https://i.ibb.co/DYMCF0N/IMG-20220710-130806-698.jpg"}
            width={1000}
            height={1000}
            className="size-[120%] object-cover"
            alt="profile"
          />
        </div>
        <h3 className="text-xl font-bold mt-8 mb-3.5 font-mono tracking-tight">
          Janardhan Majumder
        </h3>
        <p className="text-[11px] uppercase leading-4 ">
          <span className="text-green-600">Front-End</span>/
          <span className="text-green-600">Backend</span> Developer in
          Bangladesh{" "}
        </p>
        <div className="mt-8 text-[13px] uppercase flex flex-col gap-4">
          <Link href={sideRoutes[0].path} className="w-fit mx-auto group">
            <span className=" px-1">{sideRoutes[0].name}</span>
            <div className="w-0 group-hover:w-full mx-auto duration-300 h-[1.3px] bg-green-400 mt-1" />
          </Link>
          {sideRoutes[0].children.map((nav) => (
            <a
              href={`#${nav.name}`}
              key={nav.name}
              className="w-fit mx-auto group"
            >
              <span className="px-1">{nav.name}</span>
              <div className="w-0 group-hover:w-full mx-auto duration-300 h-[1.3px] bg-green-400 mt-1" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t text-center pt-3 pb-4">
        <span className="text-xs">@ 2024 All rights reserved!!</span>
        <div></div>
      </div>
    </div>
  );
};

export default SidebarContent;
