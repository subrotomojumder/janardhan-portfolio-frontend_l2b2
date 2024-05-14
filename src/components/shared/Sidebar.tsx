import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SidebarContent from "../ui/SidebarContent";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Sheet>
        <div className="w-full md:hidden fixed top-0 left-0 z-10 py-2 px-4 flex justify-between items-center bg-[#c3285533]">
          <SheetTrigger className="">
            <RxHamburgerMenu size={26} />
          </SheetTrigger>
          <Link href={"/"}>
            <h1 className="text-lg font-semibold font-serif">Janardhan</h1>
          </Link>
        </div>
        <SheetContent
          side={"left"}
          className="w-[300px] h-screen overflow-y-auto pb-0"
        >
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <div className="bg-slate-200/70 min-w-64 lg:min-w-72 h-screen overflow-y-auto hidden md:block sticky top-0 left-0">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;
