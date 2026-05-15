import Aos from "aos";
import { useEffect } from "react";
import SkillsLine, { SkillsNum } from "../../Context/SkillsLine";
import type { SkillsNumProp, SkillsProp } from "../../Lib/types";

const AboutSkills = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: "ease-in-out",
      delay: 2,
    });
  }, []);
  return (
    <div className="w-full relative transition-all duration-150 py-24">
      <div
        data-aos="zoom-in"
        className="grid grid-cols-2 w-full justify-around  gap-8 max-lg:pl-8 max-[1000px]:px-5 max-[1000px]:pl-0 py-12 px-10 border border-portfolio-border/70 bg-transparent shadow-2xl drop-shadow-2xl dark:hover:shadow-portfolio-primary/50 transition-all duration-200 hover:shadow-portfolio-border dark:shadow-portfolio-primary/20 rounded-xl my-5 max-[1000px]:grid-cols-1"
      >
        {AboutSkillsArray.map((skill, index: number) => {
          return (
            <SkillsLine key={index} title={skill.title} width={skill.width} />
          );
        })}
      </div>
      <div className="flex flex-row w-full gap-4 py-24 px-5 justify-around items-center flex-wrap">
        {AboutSkillsArrayNum.map((skill, index: number) => {
          const even = index % 2 === 0;
          return (
            <div key={index} data-aos={even ? "flip-up" : "flip-down"}>
              <SkillsNum title={skill.title} text={skill.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSkills;

export const AboutSkillsArray: SkillsProp[] = [
  {
    title: "React/Next.js",
    width: "90%",
  },
  {
    title: "TypeScript",
    width: "80%",
  },
  {
    title: "Tailwindcss css",
    width: "98%",
  },
  {
    title: "Design Skill",
    width: "70%",
  },
  {
    title: "Backend Integration",
    width: "75%",
  },
  {
    title: "Performance optimization",
    width: "95%",
  },
];
export const AboutSkillsArrayNum: SkillsNumProp[] = [
  {
    title: "5+",
    text: "years experience",
  },
  {
    title: "26+",
    text: "Projects completed",
  },
  {
    title: "2",
    text: "awards won",
  },
  {
    title: "98%",
    text: "happy clients",
  },
  // {
  //   title:'Performance optimization',
  //   text:'95%'
  // },
];
