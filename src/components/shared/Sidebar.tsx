"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarContent from "../ui/SidebarContent";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="w-full md:hidden fixed top-0 left-0 z-10 py-1 px-3 flex justify-between items-center bg-[#2837c3e8] text-white">
          <SheetTrigger>
            <RxHamburgerMenu size={26} />
          </SheetTrigger>
          <Link href={"/"}>
            <div className="w-9 h-9 mx-auto rounded-full overflow-hidden object-center border-2 avatar border-gradient-to-t from-red-500 to-blue-600">
              <Image
                src={"https://i.ibb.co/DYMCF0N/IMG-20220710-130806-698.jpg"}
                width={100}
                height={100}
                className="size-[130%] object-cover"
                alt="profile"
              />
            </div>
          </Link>
        </div>
        <SheetContent
          side={"left"}
          className="w-[300px] h-screen overflow-y-auto pb-0"
        >
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div className="bg-slate-200/70 w-full max-w-64 lg:max-w-72 h-screen overflow-y-auto hidden md:block sticky top-0 left-0">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
