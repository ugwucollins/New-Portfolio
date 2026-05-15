import type { SkillsNumProp, SkillsProp } from "../Lib/types";

const SkillsLine = ({ title, width, className }: SkillsProp) => {
  return (
    <div className="w-full max-w-xl relative">
      <div
        className={`flex relative flex-col capitalize gap-1.5 text-[min(10vw,20px)] font-bold ${className}`}
      >
        <div className="w-full max-w-150 flex justify-between items-center">
          <h1>{title}</h1>
          <div className="text-xl  text-portfolio-primary font-bold">
            {width}
          </div>
        </div>
        <div className="w-full max-w-xl h-2.5 relative rounded-full bg-portfolio-border">
          <div
            style={{
              width: width,
            }}
            className="absolute rounded-full top-0 left-0 h-full bg-portfolio-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsLine;

export function SkillsNum({ title, className, text }: SkillsNumProp) {
  return (
    <div
      className={`w-auto flex flex-col justify-center items-center gap-0.5 ${className}`}
    >
      <h3 className="text-3xl font-bold text-portfolio-heading dark:text-portfolio-primary">
        {title}
      </h3>
      <p className=" opacity-45 font-bold text-base uppercase">{text}</p>
    </div>
  );
}
