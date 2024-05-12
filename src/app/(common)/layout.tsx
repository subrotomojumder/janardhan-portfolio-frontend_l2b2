import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/shared/Sidebar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full lg:max-w-6xl xl:max-w-7xl mx-auto relative">
      <Sidebar />
      <div className="flex-1">
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default CommonLayout;
