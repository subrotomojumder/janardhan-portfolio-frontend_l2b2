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
    <div className={cn("md:grid grid-cols-5", className)}>
      <div className="col-span-1 flex md:flex-col justify-center lg:justify-center gap-4 pr-2">
        {images.map((image: string, i: number) => (
          <div
            key={i}
            onClick={() => setImageIndex(i)}
            className={cn(
              "bg-white p-2 border-2 border-blue-300 hover:border-blue-500 rounded opacity-70 hover:opacity-100 cursor-pointer overflow-hidden",
              {
                "opacity-100 border-blue-500": imageIndex === i,
              }
            )}
          >
            <Image
              src={image}
              width={300}
              height={200}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className=" bg-white col-span-4 p-4">
        <Image
          src={images[imageIndex]}
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProjectDetailsImage;
