import { BsDot } from "react-icons/bs";
import { assets } from "../../Context/assets";
import Header from "../../Context/Header";
import { BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const AboutHeader = () => {
  return (
    <div className="w-full py-40 overflow-hidden">
      <div className="w-full flex justify-center items-center gap-6 gap-y-20 flex-row max-[1000px]:flex-col-reverse">
        <div
          data-aos="zoom-in-right"
          className="w-full flex justify-start pl-18 max-sm:pl-0 items-center lg:w-1/2 relative"
        >
          <div className="w-full max-w-100 h-auto relative max-sm:max-w-90 pb-5 dark:pb-8">
            <div className="w-full size-90 relative border-2 border-portfolio-primary dark:rounded-full rounded-2xl bg-cyan-800/70 flex justify-center items-center overflow-hidden shadow-xl drop-shadow-2xl shadow-portfolio-border dark:shadow-portfolio-primary">
              <img
                loading="lazy"
                src={assets.profile1}
                className=" object-contain pt-10"
                alt="profile photo"
              />
            </div>
            <div className="absolute bottom-0 dark:right-0 max-md:right-0 right-0">
              <div className="w-auto bg-portfolio-bg px-2 items-center py-1 font-bold rounded-xl text-[12px] flex justify-center uppercase dark:text-portfolio-primary shadow drop-shadow-2xl">
                <BsDot size={30} className="text-portfolio-primary" />
                Available for work
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-left" className="w-full lg:w-1/2">
          <div className="w-full text-left flex flex-col gap-y-4 items-start justify-start">
            <div data-aos="zoom-in-down" data-aos-duration="1100">
              <Header
                icon={<BiUser />}
                className=" justify-start"
                text="About me"
              />
            </div>
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="w-full text-[min(20vw,60px)] max-[350px]:text-[min(20vw,40px)] font-bold"
            >
              frontend developer &
              <span className="text-portfolio-primary">
                {" "}
                Backend Enthusiast
              </span>
            </h1>

            <div
              data-aos="flip-up"
              data-aos-duration="1200"
              className="w-full text-left "
            >
              <p className="font-semibold text-lg opacity-60 pb-3">
                {" "}
                I specialize in building high-performance, accessible, and
                visually stunning web experience. With a deep passion for clean
                code and user-centric design, I bridge th gap between complex
                logic and elegant interfaces.
              </p>
              <div
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="w-full flex py-5 justify-start flex-row flex-wrap items-center gap-4"
              >
                <div className="flex text-base pt-4 gap-2 font-semibold items-center">
                  <MdEmail className="text-portfolio-primary  text-2xl" />
                  <span className=" opacity-50">ugwucollins027@gamil.com</span>
                </div>
                <div className="flex justify-center text-base gap-2 font-semibold items-center">
                  <IoLocation className="text-portfolio-primary text-2xl" />
                  <span className=" opacity-50">Owerri, Nigeria </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
