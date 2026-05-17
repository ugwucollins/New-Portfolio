import { PiPlugFill } from "react-icons/pi";
import Header from "../../Context/Header";
import SkillsLine from "../../Context/SkillsLine";
import type { SkillsProp } from "../../Lib/types";

const SkillsCards = () => {
  return (
    <div>
      <div>
        <Header icon={<PiPlugFill />} text="my expertise" />
        <div className="w-full flex justify-center items-center flex-col gap-1">
          <h1
            data-aos="zoom-in-left"
            className="w-full  justify-center items-center flex flex-col gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading font-bold capitalize"
          >
            Skills & Technologies
          </h1>

          <p className=" opacity-60 font-semibold text-sm">
            A comperhensive overview of my techinal skills and proficiency
            levels
          </p>
        </div>

        <div className="grid grid-cols-3 pt-25 max-[1200px]:grid-cols-2 max-[1200px]:justify-center max-[900px]:flex max-[900px]:flex-row max-[900px]:flex-wrap justify-center items-start max-[900px]:justify-center gap-8 gap-y-10">
          <div
            data-aos="zoom-in"
            className="flex flex-col w-full max-w-2xl justify-center  gap-8 max-lg:pl-8 max-[1000px]:px-5 max-[1000px]:pl-0 py-12 px-10 border border-portfolio-border/70 bg-transparent shadow-2xl drop-shadow-2xl dark:hover:shadow-portfolio-primary/50 transition-all duration-200 hover:shadow-portfolio-border dark:shadow-portfolio-primary/20 rounded-xl my-5"
          >
            <div className="flex w-full flex-col gap-6">
              <div
                data-aos="zoom-in-left"
                className="w-full flex flex-row gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading items-end justify-start font-bold capitalize"
              >
                <div className=" w-0.5 h-6 bg-portfolio-primary rounded-full" />
                <h1>frontend Development</h1>
              </div>
              <hr className="w-full h-0.5 bg-portfolio-border border-none" />
            </div>
            {SkillsArray.map((skill, index: number) => {
              return (
                <SkillsLine
                  key={index}
                  title={skill.title}
                  width={skill.width}
                />
              );
            })}
          </div>

          {/* Backend */}
          <div
            data-aos="zoom-in"
            className="flex flex-col w-full max-w-2xl justify-center  gap-8 max-lg:pl-8 max-[1000px]:px-5 max-[1000px]:pl-0 py-12 px-10 border border-portfolio-border/70 bg-transparent shadow-2xl drop-shadow-2xl dark:hover:shadow-portfolio-primary/50 transition-all duration-200 hover:shadow-portfolio-border dark:shadow-portfolio-primary/20 rounded-xl my-5"
          >
            <div className="flex w-full flex-col gap-6">
              <div
                data-aos="zoom-in-left"
                className="w-full flex flex-row gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading items-end justify-start font-bold capitalize"
              >
                <div className=" w-0.5 h-6 bg-portfolio-primary rounded-full" />
                <h1>Backend & APIS</h1>
              </div>
              <hr className="w-full h-0.5 bg-portfolio-border border-none" />
            </div>
            {SkillsArrayBack.map((skill, index: number) => {
              return (
                <SkillsLine
                  key={index}
                  title={skill.title}
                  width={skill.width}
                />
              );
            })}
          </div>

          {/* tools */}
          <div
            data-aos="zoom-in"
            className="flex flex-col w-full max-w-2xl justify-center  gap-8 max-lg:pl-8 max-[1000px]:px-5 max-[1000px]:pl-0 py-12 px-10 border border-portfolio-border/70 bg-transparent shadow-2xl drop-shadow-2xl dark:hover:shadow-portfolio-primary/50 transition-all duration-200 hover:shadow-portfolio-border dark:shadow-portfolio-primary/20 rounded-xl my-5"
          >
            <div className="flex w-full flex-col gap-6">
              <div
                data-aos="zoom-in-left"
                className="w-full flex flex-row gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading items-end justify-start font-bold capitalize"
              >
                <div className=" w-0.5 h-6 bg-portfolio-primary rounded-full" />
                <h1>Tools & others</h1>
              </div>
              <hr className="w-full h-0.5 bg-portfolio-border border-none" />
            </div>
            {SkillsArrayTools.map((skill, index: number) => {
              return (
                <SkillsLine
                  key={index}
                  title={skill.title}
                  width={skill.width}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCards;

export const SkillsArray: SkillsProp[] = [
  {
    title: "HTML5",
    width: "90%",
  },
  {
    title: "Css  (Native)",
    width: "95%",
  },
  {
    title: "React.js",
    width: "90%",
  },
  {
    title: "JavaScript",
    width: "90%",
  },
  {
    title: "Next.js",
    width: "80%",
  },
  {
    title: "TypeScript",
    width: "85%",
  },
  {
    title: "Tailwindcss css",
    width: "98%",
  },
  {
    title: "React native",
    width: "75%",
  },
];

export const SkillsArrayBack: SkillsProp[] = [
  {
    title: "node.js",
    width: "85%",
  },
  {
    title: "express.js",
    width: "80%",
  },
  {
    title: "mongodb",
    width: "90%",
  },
  {
    title: "REST APIS",
    width: "95%",
  },
  {
    title: "postgress",
    width: "70%",
  },
];
export const SkillsArrayTools: SkillsProp[] = [
  {
    title: "git & Github",
    width: "85%",
  },
  {
    title: "responsive design",
    width: "90%",
  },
  {
    title: "Figma",
    width: "80%",
  },
  {
    title: "vite",
    width: "90%",
  },
];
