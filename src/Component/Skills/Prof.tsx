import Header from "../../Context/Header";
import { FiSettings } from "react-icons/fi";

const Prof = () => {
  return (
    <div className="w-full flex flex-col gap-y-3 justify-center items-center">
      <div>
        <Header icon={<FiSettings />} text="my expertise" />
        <div className="w-full flex justify-center items-center flex-col gap-1">
          <h1
            data-aos="zoom-in-left"
            className="w-full  justify-center items-center flex flex-col gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading font-bold capitalize"
          >
            Professional Skills
          </h1>

          <p className=" opacity-60 font-semibold text-sm">
            A comperhensive overview of my techinal skills,Professional skills
            and proficiency levels
          </p>
        </div>
      </div>
      <div className=" py-10 justify-around px-5 w-full bg-portfolio-card border border-portfolio-border rounded-2xl hover:cursor-pointer transition hover:drop-shadow-2xl backdrop-blur-2xl hover:shadow-portfolio-primary/30 group hover:shadow-2xl hover:border-portfolio-primary/20 shadow drop-shadow-2xl shadow-portfolio-primary/50 flex max-md:justify-center items-center flex-row flex-wrap gap-8">
        {profArray.map(({ width, title }, index: number) => (
          <div key={index}>
            <ProfCard width={width} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prof;

const ProfCard = ({ width, title }: PropCard) => {
  return (
    <div>
      <div className=" relative flex flex-col gap-y-2 justify-center items-center">
        <div className="size-26 flex justify-center items-center rounded-full relative shadow-md drop-shadow-2xl backdrop-blur-2xl shadow-portfolio-primary/30 bg-portfolio-bg overflow-hidden transition-colors duration-200">
          <div
            className="h-full absolute top-0 left-0 bg-portfolio-primary z-0"
            style={{ width: width }}
          />
          <div className="w-[80%] z-1 rounded-full flex justify-center items-center text-base font-bold h-[80%] bg-portfolio-heading/90 backdrop-blur-2xl border border-portfolio-border/20 shadow drop-shadow-2xl text-portfolio-bg">
            <p>{width}</p>
          </div>
        </div>
        <h1 className="font-bold text-base text-shadow-2xs text-shadow-portfolio-heading capitalize">
          {title}
        </h1>
      </div>
    </div>
  );
};

export type PropCard = {
  width: string;
  title: string;
};

export const profArray: PropCard[] = [
  {
    width: "95%",
    title: "Team work",
  },
  {
    width: "95%",
    title: "Communication",
  },
  {
    width: "85%",
    title: "Time Management",
  },
  {
    width: "90%",
    title: "Pressure Management",
  },
  {
    width: "93%",
    title: "Attention Skill",
  },
];
