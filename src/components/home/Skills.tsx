import Image from "next/image";
import SkillContent from "../ui/SkillContent";

const Skills = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/skills?sort=createdAt`);
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
      className="min-h-screen flex flex-col justify-center py-32 lg:py-40 space-y-16 relative"
    >
      <div className="space-y-10 px-8 md:px-20">
        <div className="space-y-3">
          <p className="text-xs text-slate-400 font-mono">MY SPECIALTY</p>
          <h5
            className="text-lg md:text-xl font-medium font-serif text-slate-600"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          >
            MY SKILLS
          </h5>
        </div>
        <p
          className="text-slate-500"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          With a keen eye for detail and a passion for clean, efficient code, I
          specialize in building exceptional web experiences that captivate
          users and drive results.{" "}
        </p>
        <div className="border-t pt-10">
          <SkillContent skills={data} />
        </div>
        <div className="bg-gray-100 py-1 px-2">
          <p>
            Tools : VS code, Figma, Postman, MongoDBCompass, Netlify, Github,
            Vercel, Microsoft-Office-Applications.
          </p>
        </div>
      </div>
      <div
        className="w-full flex justify-evenly gap-10 py-5 mt-5"
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
            className="w-28 h-28 overflow-hidden object-center"
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
