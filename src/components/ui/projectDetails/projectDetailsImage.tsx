"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TImageProps = {
  className?: string;
  images: string[];
};

const ProjectDetailsImage = ({ images, className }: TImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={cn("md:grid grid-cols-7 px-5 md:px-10", className)}>
      <div className="bg-white col-span-6 shadow-lg shadow-inherit border border-green-500">
        <Image
          src={images[imageIndex]}
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-full"
        />
      </div>
      <div className="md:order-first col-span-1 flex md:flex-col justify-center lg:justify-center gap-2 md:gap-4 py-7 md:py-4 px-4 md:px-0 md:pr-5">
        {images.map((image: string, i: number) => (
          <div
            key={i}
            onClick={() => setImageIndex(i)}
            className={cn(
              "bg-white p-0.5 md:p-1 border border-blue-300 hover:border-blue-500 rounded-sm opacity-70 hover:opacity-100 cursor-pointer overflow-hidden max-w-20 md:max-w-full max-w-h-20",
              {
                "opacity-100 border-blue-500": imageIndex === i,
              }
            )}
          >
            <Image
              src={image}
              width={400}
              height={300}
              alt="image"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailsImage;
