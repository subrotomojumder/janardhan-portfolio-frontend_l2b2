import { sideRoutes } from "@/utils/routeConstants";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SidebarContent = () => {
  return (
    <div>
      <div className="px-5 text-center py-10">
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden object-center border-8 avatar border-gradient-to-t from-red-500 to-blue-600">
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
      <div className="mt-8 border-t border-gray-200 text-center pt-3 pb-4">
        <span className="text-xs">@ 2024 All rights reserved!!</span>
        <nav className="text-2xl text-blue-500 flex justify-center mt-4 h-10">
          <a href="https://github.com/subrotomojumder" target="blank">
            <FaGithub className="hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px]  hover:mt-[-3px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/janardhan-majumder/"
            target="blank"
          >
            <FaLinkedin className="hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]" />
          </a>
          <a href="https://web.facebook.com/subroto.mojumder.14" target="blank">
            {" "}
            <FaFacebook className="hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]" />
          </a>
          <a
            href="https://www.instagram.com/subroto.mojumder.14/"
            target="blank"
          >
            <FaInstagram className="hover:text-orange-400 hover:text-3xl mx-2 hover:mx-[5px] hover:mt-[-3px]" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SidebarContent;
