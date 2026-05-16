import { BiPlus } from "react-icons/bi";
import Button from "../../Context/Button";
import { useEffect, useState } from "react";

import { assets, filtersArray, ProjectsArray } from "../../Context/assets";
import { TechCard } from "../Home/HomeCore";
import { Link } from "react-router-dom";
import { PagenationFun } from "../../Context/Pagenation";

const ProjectCard = () => {
  const [activeFilter, setActiveFilter] = useState<String>("All Work");
  const [current, setCurrent] = useState(1);
  return (
    <div className="w-full py-20">
      <section className="flex flex-row dark:text-white flex-wrap gap-4 mb-12">
        {filtersArray.map((filter, index: number) => {
          const even = index % 2 === 0;
          return (
            <button
              data-aos={even ? "zoom-in-up" : "zoom-in-down"}
              data-aos-duration={even ? "1000" : "1100"}
              key={index}
              onClick={() => setActiveFilter(filter.path)}
              className={`px-5 py-3 cursor-pointer text-base font-semibold tracking-wide transition-all text-white bg-portfolio-heading  ${
                activeFilter === filter.path
                  ? " bg-portfolio-primary  rounded-full"
                  : " bg-portfolio-border dark:bg-gray-500/20  rounded-lg"
              }`}
            >
              {filter.title}
            </button>
          );
        })}
      </section>
      <div className="w-full grid grid-cols-3 max-[1000px]:flex max-[1000px]:flex-row max-[1000px]:flex-wrap gap-5 justify-center  gap-y-5">
        {PagenationFun(ProjectsArray, 8, current)
          .datas.filter((card: any) =>
            activeFilter === "All Work"
              ? card
              : activeFilter.includes(card.categroy)
                ? card.categroy
                : null,
          )
          .map((card: any, index: number) => {
            const even = index % 2 === 0;
            return <Card key={index} even={even} data={card} />;
          })}
        {/* <Card /> */}
        <LastCard />
      </div>

      <div className="flex w-full my-10  bg-slate-300 dark:bg-yellow-50/10 justify-center items-center gap-3">
        {PagenationFun(ProjectsArray, 8, current).pages.map(
          (no: any) =>
            no && (
              <div
                key={no}
                onClick={() => setCurrent(no)}
                className={`w-13 h-1.5 cursor-pointer rounded-2xl bg-secondary ${
                  current === no
                    ? "bg-portfolio-primary"
                    : "bg-portfolio-heading"
                }`}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

function LastCard() {
  return (
    <div
      className={`rounded-xl w-full max-w-lg max-[1000px]:max-w-xl border border-dashed flex flex-col items-center justify-center px-10 py-15 text-center transition-all border-portfolio-border shadow-xl drop-shadow-2xl shadow-portfolio-primary/20 gap-y-4 `}
    >
      <div className="text-cyan-400/80 mb-3 w-auto p-4 bg-portfolio-border rounded-full shadow drop-shadow-2xl backdrop-blur-2xl">
        <BiPlus size={24} className="stroke-[1.5]" />
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">Something New?</h3>
        <p
          className={`text-base font-semibold leading-relaxed w-full mb-5 opacity-50`}
        >
          I'm always working on side projects. Check my GitHub for the latest
          experimental repositories and WIPs.
        </p>
      </div>

      <Link to={"https://github.com/ugwucollins/"}>
        <Button title="Visit GitHub Profile" className="my-5" type="ghost" />
      </Link>
    </div>
  );
}
// type CardProp = {};
function Card({ data, even }: { data: any; even: boolean }) {
  const [selectIndex, setSelectIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  function handle(num: any) {
    setSelectIndex(num);
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div
      className={` w-full max-w-md max-[1000px]:max-w-xl max-[1000px]:justify-center border overflow-hidden flex flex-col border-portfolio-border transition-all duration-300 rounded-lg`}
    >
      <div className="h-70 w-full max-w-lg max-[1000px]:max-w-xl relative overflow-hidden flex rounded-2xl items-center justify-center bg-[#070d14] ">
        {!loading ? (
          <iframe
            src={data?.path}
            className="w-full h-full"
            allow="camera;microphone;fullscreen;display-capture"
          />
        ) : (
          <img
            src={assets.hero}
            loading="lazy"
            className="w-full h-full"
            alt="projects"
          />
        )}
      </div>

      <div className="py-5 px-3">
        <div className="flex flex-col justify-start text-left items-start py-4">
          <h1 className="text-[min(10vw,30px)] font-semibold capitalize">
            {data?.title}
          </h1>
          <p className="opacity-50 text-base font-semibold">
            {data?.description.length >= 450
              ? data?.description.slice(0, 450)
              : data?.description.slice(0, 450)}
          </p>

          <div className="w-full pt-5 py-10 flex flex-row flex-wrap gap-4">
            {data?.tags?.map((card: any, index: number) => (
              <div key={index} onClick={() => handle(index)}>
                <TechCard
                  className="text-sm"
                  index={index}
                  selectIndex={selectIndex!}
                  title={card}
                />
              </div>
            ))}
          </div>

          <div
            className={`w-full flex flex-row  gap-y-4 gap-3 px-2 ${even ? "max-sm:flex-col-reverse" : "max-sm:flex-col"}`}
          >
            <Link to={data?.path} className="w-full">
              <Button
                title="Live Demo"
                className="w-full flex justify-center items-center text-center  dark:bg-portfolio-primary bg-portfolio-heading "
                type="blue"
              />
            </Link>
            <Link to={data?.git} className="w-full">
              <Button
                title="Github"
                className="w-full flex justify-center items-center text-center"
                type="ghost"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
