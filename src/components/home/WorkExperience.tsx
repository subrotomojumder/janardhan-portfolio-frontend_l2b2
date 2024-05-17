import { TExperience } from "@/types/experience.type";
import React from "react";
import { PiPenThin } from "react-icons/pi";
import DateShow from "../ui/DateShow";
import { cn } from "@/lib/utils";

const WorkExperience = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/experiences`);
  const { data } = await res.json();
  console.log(data);
  return (
    <div
      id="experience"
      className="min-h-screen flex flex-col justify-center py-32 px-8 md:px-20 space-y-16 relative"
    >
      <div className="space-y-3">
        <p className="text-xs text-slate-400 font-mono">EXPERIENCE</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-600"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          WORK EXPERIENCE
        </h5>
      </div>
      <div className="relative">
        <div
          className="absolute top-3 left-5 -z-10 bg-slate-200/80 h-full w-1.5"
          data-aos="fade-right"
        />
        <div
          className="absolute left-[9px] -bottom-10 -z-10 rounded-full border-[6px] w-7 h-7"
          data-aos="fade-right"
        />
        <div className="space-y-6">
          {data.map((experience: TExperience, index: number) => (
            <div key={index} className="flex">
              <div
                data-aos="fade-right"
                className={cn(
                  "h-fit bg-blue-300 rounded-full border-4 text-white p-2 mt-1",
                  {
                    "bg-green-300": index % 2 === 0,
                  }
                )}
              >
                <PiPenThin size={24} />
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="bg-blue-100 flex-1 py-6 px-8 relative ml-5 rounded-sm space-y-3 text-slate-600"
              >
                <div
                  className="h-6 w-[17px] bg-blue-100 absolute -left-4 top-4"
                  style={{ clipPath: "polygon(100% 0, 0 59%, 100% 100%)" }}
                ></div>
                <div>
                  <h6 className="font-semibold">{experience.companyName}</h6>
                  <p className="text-sm text-slate-400">
                    {experience.location}
                  </p>
                </div>
                <h4 className="text-xl lg:text-2xl font-medium">
                  <span className="font-medium9">{experience.designation}</span>{" "}
                  <span className="font-[200] capitalize text-sm lg:text-base -tracking-wider">
                    (
                    {new Date(experience.dateOfEntry).toDateString() +
                      " - " +
                      new Date(experience.dateOfDeparture).toDateString()}
                    )
                  </span>
                </h4>
                {experience.des && (
                  <p className="text-sm md:text-base">{experience.des}</p>
                )}
                <div className="text-sm md:text-base">
                  <h2>Responsibilities :</h2>
                  {experience.desBullet && (
                    <ul className="list-disc ml-5">
                      {experience.desBullet.map(
                        (bullet: string, cinx: number) => (
                          <li key={cinx}>{bullet}</li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
