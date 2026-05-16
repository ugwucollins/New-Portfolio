import { useState } from "react";
import { AboutCardArray } from "../../Context/assets";
import AboutCard from "./AboutCard";

const AboutTech = () => {
  const [selectIndex, setSelectIndex] = useState(1);

  function handleIndex(num: any) {
    setSelectIndex(num);
  }

  return (
    <div className="w-full py-20">
      <div
        data-aos="zoom-in-left"
        className="w-full flex flex-col gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading font-bold capitalize"
      >
        <h1>Technical Proficiency</h1>
        <div className=" w-20 h-1 bg-portfolio-primary rounded-full" />
      </div>

      <div className="w-full py-8 flex flex-row justify-center items-center flex-wrap gap-4 max-sm:p-8">
        {AboutCardArray.map((card, index: number) => {
          const even = index % 2 === 0;
          return (
            <div
              data-aos={even ? "zoom-in-up" : "zoom-in-down"}
              data-aos-duration={`1000 ${+index} `}
              key={index}
              onClick={() => handleIndex(index)}
            >
              <AboutCard
                icon={card.icon}
                title={card.title}
                index={index}
                selectIndex={selectIndex}
                tech={card.tech}
                desc={card.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTech;
