import { createElement } from "react";
import { TbWorldSearch } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import ContactForm from "../ui/ContactForm";
const Contact = () => {
  const info = [
    {
      icon: TbWorldSearch,
      info: "janardhan.md03@gmail.com",
      link: "mailto:janardhan.md03@gmail.com",
    },
    {
      icon: LuPhoneCall,
      info: "+880 1631-901754",
      link: "tel:+8801631901754",
    },
    {
      icon: GrMapLocation,
      info: "Noakhali-4, Bangladesh",
      link: "https://maps.app.goo.gl/LxRxvCxovRvPQ3sv9",
    },
  ];
  
  return (
    <div
      id="contact"
      // style={{
      //   background: `linear-gradient(rgba(6, 28, 61, 0.7), rgba(6, 28, 61, 0.6)), url(https://www.wpdownloadmanager.com/wp-content/uploads/2019/10/WordPress-Private-Message.png)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      // }}
      className="min-h-screen flex flex-col justify-center py-32 lg:py-40 px-4 md:px-16 space-y-16 relative bg-yellow-50"
    >
      <div className="space-y-3">
        <p className="text-xs text-slate-400 font-mono">GET IN TOUCH</p>
        <h5
          className="text-lg md:text-xl font-medium font-serif text-slate-600"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-center"
        >
          CONTACT
        </h5>
      </div>
      <div className="pt-10 pb-10 md:pb-0 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-20">
        <div className="space-y-9">
          {info.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:gap-5"
              data-aos="fade-right"
            >
              <div className="bg-purple-100 rounded-sm p-3 lg:p-8 text-blue-500 shadow-sm ">
                <div> {createElement(item.icon, { size: "34" })}</div>
              </div>
              <a href={item.link} target="blank" className="text-blue-500">
                {item.info}
              </a>
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
