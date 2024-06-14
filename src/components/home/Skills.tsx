import Image from "next/image";
import SkillContent from "../ui/SkillContent";

const Skills = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/skills?sort=createdAt`, {
    next: { revalidate: 30 },
  });
  const { data } = await res.json();

  const logos = [
    {
      image: require("@/assets/skills/nextjs.png"),
    },
    {
      image: require("@/assets/skills/react.jpg"),
    },
    {
      image: require("@/assets/skills/nodejs.png"),
    },
  ];
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-20 space-y-16 relative"
    >
      <div className="space-y-3 px-4 md:px-16">
        <p className="text-xs text-slate-400 font-mono">MY SPECIALTY</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-600"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          MY SKILLS
        </h5>
      </div>
      <div className="space-y-10 px-4 md:px-16">
        <p
          className="text-slate-500"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          With a keen eye for detail and a passion for clean, efficient code, I
          specialize in building exceptional web experiences that captivate
          users. I have experience working with <b>more than 25 technology</b>{" "}
          packages and libraries.
        </p>
        <div className="border-t pt-10">
          <SkillContent skills={data} />
        </div>
        <div className="bg-gray-100 py-1 px-2 font-medium text-sm md:text-base">
          <p>
            Tools : VS code, Figma, Postman, MongoDBCompass, Netlify, Github,
            Vercel, Microsoft-Office-Applications.
          </p>
        </div>
      </div>
      <div
        className="w-full flex justify-evenly gap-10 py-5 mt-5 px-4 md:px-16"
        style={{
          background: `linear-gradient(90deg, rgba(255, 0, 150, 0.6), rgba(63, 0, 149, 0.5)), url(https://i.ibb.co/VHVjVfx/skills.png)`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPositionY: "center",
        }}
      >
        {logos.map((logo: { image: string }, i) => (
          <div
            key={i}
            className="w-16 md:w-28 h-16 md:h-28 overflow-hidden object-center"
            data-aos="zoom-in"
          >
            <Image
              src={logo.image}
              width={400}
              height={400}
              className="w-full h-full"
              alt="logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
