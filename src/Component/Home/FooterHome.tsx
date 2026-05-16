import { BiCode } from "react-icons/bi";
import Button from "../../Context/Button";
import { MdEmail, MdMessage } from "react-icons/md";
import { type ReactElement } from "react";
import { TbBrandReactNative } from "react-icons/tb";
import { SiSpeedtest } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const FooterHome = () => {
  const router = useNavigate();
  return (
    <div className="w-full py-15 mt-0 shadow-xl drop-shadow-2xl shadow-portfolio-primary/40 mb-20 px-8 max-sm:px-0 max-sm:pl-4 bg-portfolio-primary rounded-2xl">
      <div className="flex flex-row max-[1000px]:flex-col gap-4 items-center justify-center">
        <div data-aos="flip-left" className="pb-12 w-full">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className=" capitalize block max-[390px]:hidden text-portfolio-bg font-bold text-balance text-[min(20vw,60px)] max-sm:text-[min(20vw,48px)] max-[290px]:text-[min(10vw,45px)]"
          >
            Let's build something extraordinary.
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className=" capitalize hidden max-[390px]:block text-portfolio-bg font-bold text-balance text-[min(20vw,60px)] max-sm:text-[min(20vw,48px)] max-[310px]:text-[min(10vw,10px)]"
          >
            Let's build something extra ordinary.
          </h1>
          <p className="font-medium text-portfolio-bg opacity-90 text-[min(10vw,20px)] py-4">
            Currently looking for new opportunities in senior frontend
            roles.Reach out for collaboration or just a friendly chat about tech
          </p>
          <div className="w-full flex flex-row flex-wrap gap-4 py-5">
            <Button
              type="ghost"
              className="text-portfolio-primary font-bold text-base"
              icon={<MdEmail />}
              onClick={() => router("/contact", { replace: true })}
              title="Hire me"
            />
            <Button
              type="ghost"
              onClick={() => router("/contact", { replace: true })}
              icon={<MdMessage />}
              title="Let's talk"
            />
          </div>
        </div>

        <div
          data-aos="fade-up-right"
          className=" flex justify-center flex-row flex-wrap gap-6 w-full"
        >
          {CardArray.map((card, index: number) => (
            <div key={index}>
              <CardFooter
                icon={card.icon}
                message={card.message}
                title={card.title}
              />
            </div>
          ))}
        </div>
        {/* <div
          data-aos="fade-up-right"
          className="lg:w-1/2 flex justify-center flex-row flex-wrap gap-6 w-full"
        >
          {CardArray.map((card, index: number) => (
            <div key={index}>
              <CardFooter
                icon={card.icon}
                message={card.message}
                title={card.title}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FooterHome;

export type CardArrProp = {
  icon: ReactElement;
  title: string;
  message: string;
};

function CardFooter({ icon, title, message }: CardArrProp) {
  return (
    <div className="w-full max-w-2xs border-2 border-portfolio-border/25  rounded-2xl bg-portfolio-bg/10 shadow drop-shadow-xl backdrop-blur-2xl py-10 px-8">
      <div className="flex flex-col items-start text-left gap-y-2">
        <div className="text-4xl text-portfolio-bg pb-2">{icon}</div>
        <div>
          <h1 className="text-2xl text-portfolio-bg py-2 font-bold">{title}</h1>
          <p className="font-semibold opacity-55 text-portfolio-bg text-xl">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

const CardArray: CardArrProp[] = [
  {
    icon: <BiCode />,
    title: "Architecture",
    message: "Scalable system design",
  },
  {
    icon: <BiCode />,
    title: "A11y First",
    message: "WCAG 2.1 Compliance",
  },
  {
    icon: <SiSpeedtest />,
    title: "Web Vitals",
    message: "Performance optimization",
  },
  {
    icon: <TbBrandReactNative />,
    title: "Adaptive UI",
    message: "Multi-device mastery",
  },
];
