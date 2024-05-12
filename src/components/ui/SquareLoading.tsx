import { cn } from "@/lib/utils";
import "@/styles/squareLoading.module.css";
const SquareLoading = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-fit",className)}>
      <div className={cn("bg-gray-200/40 w-fit")}>
        <div className="loader mx-2 mt-2"></div>
      </div>
        <div className="text-xs text-center text-gray-500">Loading...</div>
    </div>
  );
};

export default SquareLoading;
