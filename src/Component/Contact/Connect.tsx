import type { ReactElement } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { ImInstagram } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Connect = () => {
  return (
    <div data-aos="zoom-in-right" className="w-full max-w-2xl">
      <div className="w-full flex flex-col gap-y-7">
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="text-[min(10vw,50px)] font-bold capitalize"
        >
          Let's build something{" "}
          <span className="text-portfolio-primary">extraOrdinary.</span>
        </h1>

        <p
          data-aos="fade-up-right"
          data-aos-duration="1000"
          className="text-wrap font-semibold text-lg opacity-50"
        >
          Currently available for freelance opportunities and full-time senior
          roles. Reach out and let's discuss your next project
        </p>

        <div
          data-aos="flip-up"
          data-aos-duration="1100"
          className="flex flex-col gap-y-1"
        >
          <div className="w-full flex gap-4 py-2 items-center justify-start">
            <SocialCard
              icon={<MdEmail />}
              className="bg-portfolio-primary/10"
            />
            <div className="flex flex-col items-start justify-start text-left">
              <h1 className="font-bold text-lg opacity-50">Email</h1>
              <p className=" font-bold text-sm">ugwucollins027@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex gap-4 py-2 items-center justify-start">
            <SocialCard
              icon={<GoLocation />}
              className="bg-portfolio-primary/10"
            />
            <div className="flex flex-col items-start justify-start text-left">
              <h1 className="font-bold text-lg opacity-50">location</h1>
              <p className=" font-bold text-sm">Owerri, Nigeria</p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          className="w-full flex justify-start gap-4 items-center flex-row flex-wrap"
        >
          <SocialCard icon={<BsGithub />} className="shadow" />
          <SocialCard icon={<ImInstagram />} />
          <SocialCard icon={<BsTwitter />} />
        </div>
      </div>
    </div>
  );
};

export default Connect;

export function SocialCard({
  icon,

  className,
}: {
  icon: ReactElement;
  index?: Number | boolean;
  selectIndex?: Number | boolean;
  className?: string;
}) {
  return (
    <div
      className={`size-20 flex rounded-xl border border-portfolio-body/25 shadow shadow-portfolio-primary/50 drop-shadow-lg justify-center backdrop-blur-2xl items-center hover:shadow-portfolio-primary/60 cursor-pointer hover:shadow-2xl transition-all duration-200 hover:drop-shadow-lg gap-2 bg-portfolio-border/50 px-5 dark:border-portfolio-primary/35 py-3 ${className}`}
    >
      <div className="text-2xl text-portfolio-primary">{icon}</div>
    </div>
  );
}
