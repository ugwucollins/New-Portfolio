import { useState } from "react";
import { expertiseSkillsArray } from "../../Context/assets";
import Card from "../../Context/Card";
import Header from "../../Context/Header";
import { GiSpanner } from "react-icons/gi";

const OtherSkills = () => {
  const [selectIndex, setSelectIndex] = useState(3);

  function handleIndex(num: any | number) {
    setSelectIndex(num);
  }

  return (
    <div>
      <div>
        <Header icon={<GiSpanner />} text="what i offer" />
        <div className="w-full flex justify-center items-center flex-col gap-1">
          <h1
            data-aos="zoom-in-left"
            className="w-full  justify-center items-center flex flex-col gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading font-bold capitalize"
          >
            Built for Innovation Designed for results
          </h1>

          <p className=" opacity-60 font-semibold text-sm">
            comperhensive solution to transform your ideals into exceptional
            digital Experiences levels
          </p>
        </div>
      </div>
      <div className="w-full pt-15">
        <div className="grid grid-cols-2 max-[900px]:flex max-[900px]:flex-row max-[900px]:flex-wrap w-full max-[900px]:items-center py-5 gap-6 max-[900px]:justify-center">
          {expertiseSkillsArray.slice(0, 2).map((item, idx) => {
            const even = idx % 2 === 0;
            return (
              <div
                onClick={() => handleIndex(idx)}
                key={idx}
                data-aos-duration={even ? "1000" : "1200"}
                data-aos={even ? "zoom-in-up" : "zoom-in-right"}
              >
                <Card
                  icon={item.icon}
                  index={idx}
                  className="w-full max-w-3xl max-[1000px]:max-w-110 max-sm:max-w-3xl"
                  message={item.message}
                  selectIndexCard={selectIndex}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 max-[1000px]:grid-cols-2 justify-start items-start max-[900px]:flex max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:justify-center max-[900px]:items-center py-10 gap-6">
          {expertiseSkillsArray.slice(2).map((item, idx) => {
            const even = idx % 2 === 0;
            return (
              <div
                onClick={() => handleIndex(idx)}
                key={idx}
                data-aos-duration={even ? "1000" : "1200"}
                data-aos={even ? "zoom-in-up" : "zoom-in-right"}
              >
                <Card
                  icon={item.icon}
                  index={idx}
                  message={item.message}
                  selectIndexCard={selectIndex}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
