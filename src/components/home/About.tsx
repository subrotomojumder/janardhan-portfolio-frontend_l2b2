const bg = require("@/assets/banner/frontend.jpg")
import Image from "next/image";
const About = () => {
  return (
    <div
      style={{
        background: `linear-gradient(90deg, rgba(231, 205, 218, 0.78), rgba(231, 205, 218, 0.68)), url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen"
    >
         <Image
            src={bg}
            width={100}
            height={100}
            className=" object-cover"
            alt="profile"
          />
      About
    </div>
  );
};

export default About;
