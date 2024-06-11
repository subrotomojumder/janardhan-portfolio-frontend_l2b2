import { LocateFixed, Mail, MapPinned, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
const About = () => {
  const topStatus = [
    {
      content: "50+",
      status: "Projects",
      aos: "zoom-in-right",
    },
    {
      content: "03+",
      status: "Experiences",
      aos: "zoom-in-down",
    },
    {
      content: "25+",
      status: "Technology",
      aos: "zoom-in-left",
    },
  ];
  return (
    <div
      id="about"
      // style={{ background: `linear-gradient(90deg, rgba(255, 0, 150, 0.3), rgba(63, 0, 149, 0.8)), url(https://i.ibb.co/vj3HVVc/DSC-0022.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'center' }}
      className="min-h-screen flex flex-col justify-center py-32 lg:py-40 space-y-16 px-8 md:px-20"
    >
      <div className="space-y-3">
        <p className="text-xs text-slate-400 font-mono">ABOUT US</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-600"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          WHO AM I?
        </h5>
      </div>
      <div className="space-y-4 font-sans text-slate-500">
        <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
          <b>Hi! I&apos;m Janardhan Majumder</b> working in Web Development for
          a long time, Expertise in HTML, CSS, and JavaScript to craft dynamic,
          user-centric digital experiences. With three years of experience,
          specializes in creating responsive, visually stunning websites that
          align with client objectives and industry standards.{" "}
        </p>
        <p data-aos="fade-up" data-aos-anchor-placement="bottom-center">
          Frontend and Backend development uses frameworks like NextJs, ReactJs
          and ExpressJs to create efficient, scalable solutions. Consistently
          delivers high-quality, intuitive web solutions that increase user
          engagement and drive business success.
        </p>
      </div>
      <div
        className="md:flex justify-between space-y-10 md:space-y-0"
        // style={{ background: `linear-gradient(to top, rgba(255, 0, 150, 0.3), rgba(63, 0, 149, 0.8)), url(https://i.ibb.co/zsDVY69/cover-bg-1-jpg.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPositionY: "center" }}
      >
        {topStatus.map((status, index) => (
          <div
            key={index}
            data-aos={status.aos}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-mirror="true"
            className="w-full md:w-40 lg:w-48 border border-b-0 border-slate-50 shadow-xl shadow-gray-300 flex flex-col justify-between rounded-t-sm"
          >
            <div className="space-y-3 px-8 pt-6 bg-white h-36">
              <h1 className="text-2xl font-bold">{status.content}</h1>
              <h4 className="text-lg ">{status.status}</h4>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-600"></div>
          </div>
        ))}
      </div>
      <div className="bg-yellow-500/90 px-8 py-12 text-center text-white">
        <h3 className=" text-center text-2xl md:text-3xl font-serif leading-snug mb-8">
          I am happy to know you <br /> that 50+ projects done successfully!
        </h3>
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <PhoneCall size={21} />
            <a href="tel:+8801631901754" target="blank">
              <Button
                variant="link"
                className="text-base tracking-wide text-white"
              >
                +880 1631-901754
              </Button>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <Mail size={21} />
            <a href="mailto:janardhan.md03@gmail.com" target="blank">
              <Button
                variant="link"
                className="text-base tracking-wide text-white"
              >
                janardhan.md03@gmail.com
              </Button>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <MapPinned size={21} />
            <a href="https://maps.app.goo.gl/LxRxvCxovRvPQ3sv9" target="blank">
              <Button
                variant="link"
                className="text-base tracking-wide text-white"
              >
                Noakhali , Bangladesh
              </Button>
            </a>
          </div>
        </div>
        <a href="mailto:janardhan.md03@gmail.com" target="blank">
          <Button
            variant={"outline"}
            size={"sm"}
            className="rounded-none border-w text-white hover:text-white bg-yellow-500/80 hover:bg-yellow-500/80 "
          >
            HIRE ME
          </Button>
        </a>
      </div>
    </div>
  );
};

export default About;
