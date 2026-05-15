import { TechCard } from "../Home/HomeCore";
import type { AboutCardProp } from "../../Lib/types";

const AboutCard = ({
  selectIndex,
  index,
  icon,
  tech,
  title,
  desc,
}: AboutCardProp) => {
  return (
    <div className="w-full max-sm:max-w-3xl max-w-md">
      <div
        className={`p-8 bg-portfolio-card border border-portfolio-border rounded-2xl hover:border-portfolio-primary hover:cursor-pointer transition hover:drop-shadow-2xl hover:shadow-portfolio-primary/40 group ${index === selectIndex ? "shadow drop-shadow-2xl shadow-portfolio-primary/40" : null}`}
      >
        <div className="w-full flex justify-start items-center">
          <div className="text-portfolio-primary mb-6 p-2.5  bg-portfolio-primary/10 border border-portfolio-primary/15 w-auto rounded-lg shadow-xl drop-shadow-2xl shadow-portfolio-primary/15 text-2xl backdrop-blur-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-[min(10vw,21px)] font-bold pt-2 text-portfolio-heading mb-3">
          {title}
        </h3>
        <p className="text-portfolio-body opacity-80 leading-relaxed">{desc}</p>

        <div className="w-full pt-5 py-2 flex flex-row flex-wrap gap-4">
          {tech.map((card, index: number) => (
            <div key={index}>
              <TechCard
                className="text-sm"
                index={index}
                selectIndex={selectIndex!}
                title={card}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
