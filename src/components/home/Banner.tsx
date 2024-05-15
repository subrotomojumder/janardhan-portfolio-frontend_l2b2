"use client";
import { Button } from "../ui/button";
import Lottie from "react-lottie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import SquareLoading from "../ui/SquareLoading";
import developerAnimation from "@/assets/lottie/developer1.json";
import helloAnimation from "@/assets/lottie/hello1.json";
import frontendAnimation from "@/assets/lottie/frontend.json";
import { cn } from "@/lib/utils";
import { Wave1 } from "../ui/TextWaveAni";
import { IoDownloadOutline } from "react-icons/io5";
const bannerData = [
  {
    heading1: "Hi!",
    heading2: "I'm Janardhan",
    des: " Passionate web developer skilled in creating dynamic, user-friendly websites with innovative design and seamless functionality. Web Developer.",
    bg: "https://i.ibb.co/WndYYCR/address.jpg",
    smBg: "https://i.ibb.co/3CF7wxP/woman1.jpg",
    animation: {
      loop: true,
      autoplay: true,
      animationData: helloAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  {
    heading1: "Hi! I'm a",
    heading2: "Web Developer",
    des: "Proficient MERN stack developer specializing in building robust web applications with MongoDB, Express.js, React, and Node.js technologies.",
    bg: "https://i.ibb.co/0C24Nkr/mern-stack1.jpg",
    smBg: "https://i.ibb.co/3CF7wxP/woman1.jpg",
    animation: {
      loop: true,
      autoplay: true,
      animationData: developerAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
  {
    heading1: "Hi! I am a",
    heading2: "Frontend Developer",
    des: "Experienced Next.js developer adept at building fast, scalable web applications with cutting-edge features and optimal performance enhancements.",
    bg: "https://i.ibb.co/WPhvx63/frontend1.jpg",
    smBg: "https://i.ibb.co/3CF7wxP/woman1.jpg",
    animation: {
      loop: true,
      autoplay: true,
      animationData: frontendAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  },
];
const Banner = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);
  if (width === 0) {
    return (
      <div className="h-screen max-h-[600px] flex justify-center items-center">
        <SquareLoading />
      </div>
    );
  }
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
          duration: 0,
        }}
        className="relative mx-auto"
      >
        <CarouselContent className="">
          {bannerData.map((item, index) => (
            <CarouselItem key={index}>
              <div>
                <div
                  style={{
                    background:
                      width === 0
                        ? ""
                        : width > 768
                          ? `linear-gradient(90deg, rgba(249, 250, 250, 100), rgba(249, 250, 250, 90), rgba(249, 250, 250, 0.90), rgba(249, 250, 250, 0.0), rgba(249, 250, 250, 0.0)), url(${item.bg})`
                          : `linear-gradient(to bottom, rgba(135, 227, 208, 0.80), rgba(135, 227, 208, 0.88), rgba(249, 250, 250, 0.80), rgba(249, 250, 250, 0.30), rgba(249, 250, 250, 0.0)), url(${item.smBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",                    
                  }}
                  className={`md:h-screen md:max-h-[600px] xl:max-h-[700px] flex flex-col md:justify-center bg-gradient-to-r from-white via-white to-transparent bg-no-repeat bg-cover`}
                >
                  <div className="px-8 md:px-20 pt-32 md:pt-0 pb-10 space-y-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight lg:leading-snug font-serif">
                      {item.heading1}
                      <br />

                      <Wave1 text={`${item.heading2}!`} />
                    </h1>
                    <p className="max-w-[40ch] md:max-w-[50ch] mx-auto md:mx-0 text-slate-600 text-sm lg:text-base">
                      {item.des}
                    </p>
                    <div
                      className={cn("pt-6", {
                        "pt-4": index === 2,
                      })}
                    >
                      <a href='https://drive.google.com/file/d/1rE8Bp_NvdhsbgDD2S-kCYeJt34nRN2Ro/view?usp=drive_link' target='blank' >
                        <Button variant={"outline"} size={"lg"} className="shadow-sm animate-bounce rounded-none border-gray-400 gap-2">
                          Download CV <IoDownloadOutline />
                        </Button>
                      </a>
                    </div>
                    <div
                      className={cn("pt-2 md:hidden", {
                        "pt-0 ": index === 2,
                      })}
                    >
                      <div className={cn("", {
                        "-my-14":
                          index === 2,
                      })}>
                        <Lottie options={item.animation} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className={cn("hidden md:block", {
                  "-my-14":
                    index === 2,
                })}>
                  <Lottie options={item.animation} />
                </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div >
  );
};

export default Banner;
