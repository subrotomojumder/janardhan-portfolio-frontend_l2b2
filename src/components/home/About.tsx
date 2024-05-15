import Image from "next/image";
const About = () => {

  const topStatus = [
    {
      content: "50+",
      status: "Projects",
      aos: "zoom-in-right"
    },
    {
      content: "03+",
      status: "Experiences",
      aos: "zoom-in-down"
    },
    {
      content: "20+",
      status: "Technology",
      aos: "zoom-in-left"
    },
  ]
  return (
    <div className="">
      <div
        className="min-h-screen flex flex-col justify-center py-20 lg:py-32 space-y-16 px-8 md:px-20"
      >
        <div className="space-y-3">
          <p className="text-xs text-slate-400 font-mono" data-aos="fade-up" data-aos-anchor-placement="bottom-center">ABOUT US</p>
          <h5 className="text-lg font-medium font-serif text-slate-600" data-aos="fade-up"  data-aos-anchor-placement="bottom-center">WHO AM I?</h5>
        </div>
        <div className="space-y-4 font-sans text-slate-500">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-center"><b>Hi! I&apos;m Janardhan Majumder</b> working in Web Development for a long time, Expertise in HTML, CSS, and JavaScript to craft dynamic, user-centric digital experiences. With three years of experience, specializes in creating responsive, visually stunning websites that align with client objectives and industry standards. </p>
          <p data-aos="fade-up"  data-aos-anchor-placement="bottom-center">Frontend and Backend development uses frameworks like NextJs, ReactJs and ExpressJs to create efficient, scalable solutions. Consistently delivers high-quality, intuitive web solutions that increase user engagement and drive business success.</p>
        </div>
        <div className="md:flex justify-between space-y-10 md:space-y-0"
        // style={{ background: `linear-gradient(to top, rgba(255, 0, 150, 0.3), rgba(63, 0, 149, 0.8)), url(https://i.ibb.co/zsDVY69/cover-bg-1-jpg.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPositionY: "center" }}
        >
          {
            topStatus.map(((status, index) => (<div
              key={index}
              data-aos={status.aos}
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-mirror="true"
              className="w-full md:w-40 lg:w-48 border border-b-0 border-slate-50 shadow-2xl shadow-gray-400 flex flex-col justify-between rounded-t-sm"
            >
              <div className="space-y-3 px-8 pt-6 bg-white h-36">
                <h1 className="text-2xl font-bold">{status.content}</h1>
                <h4 className="text-lg ">{status.status}</h4>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-600"></div>
            </div>)))
          }
        </div>
      </div>

    </div>
  );
};

export default About;
