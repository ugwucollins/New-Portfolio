import { useState, type ReactElement } from "react";
import { expertiseArray, tech } from "../../Context/assets";
import Card from "../../Context/Card";

const HomeCore = () => {
  const [selectIndex, setSelectIndex] = useState(3);
  const [selectIndexCard, setSelectIndexCard] = useState(1);
  function handleIndex(num: any | number) {
    setSelectIndex(num);
  }
  function handleIndexCard(num: any | number) {
    setSelectIndexCard(num);
  }
  return (
    <div className="py-25">
      {/* Core Expertise */}
      <section className="py-35 mb-15">
        <div className="flex flex-col justify-center w-full text-center items-center gap-3 mb-8">
          <h2
            className="text-2xl font-bold capitalize text-portfolio-heading"
            data-aos="zoom-in"
          >
            Core Technical Stack
          </h2>

          <p
            data-aos="zoom-in-left"
            className="font-semibold opacity-65 dark:text-gray-500"
          >
            Deep expertise in modern web technologies with a focus on
            performance type-safety, and user experience
          </p>
        </div>

        <div className="flex flex-row justify-center items-center py-5 flex-wrap w-full relative max-md:gap-y-8 gap-6">
          {tech.map((item, index: number) => {
            const even = index % 2 === 0;

            return (
              <div
                data-aos={even ? "zoom-in-up" : "zoom-in-down"}
                data-aos-duration={even ? "1000" : "1200"}
                key={index}
                onClick={() => handleIndex(index)}
              >
                <TechCard
                  icon={item.icon}
                  selectIndex={selectIndex}
                  index={index}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Expertise */}
      <section className="pb-35 pt-20">
        <div className="w-full mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-portfolio-primary">✦</span>
            <h2 className="text-2xl font-bold text-portfolio-heading">
              Core Expertise
            </h2>
          </div>

          <p
            data-aos="zoom-in-left"
            className="font-semibold opacity-65 text-gray-500"
          >
            Focused on building scalable product that combine technical
            excellence with delightful user Interfaces.
          </p>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center py-10 gap-6">
          {expertiseArray.map((item, idx) => {
            const even = idx % 2 === 0;
            return (
              <div
                onClick={() => handleIndexCard(idx)}
                key={idx}
                data-aos-duration={even ? "1000" : "1200"}
                data-aos={even ? "zoom-in-up" : "zoom-in-right"}
              >
                <Card
                  icon={item.icon}
                  index={idx}
                  message={item.message}
                  selectIndexCard={selectIndexCard}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// export const Ex = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-3 max-[800px]:grid-cols-1 max-[1200px]:grid-cols-2 gap-6">
//         {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
//         {expertise.map((item, idx) => (
//           <div
//             key={idx}
//             className="p-8 bg-portfolio-card border border-portfolio-border rounded-2xl hover:border-portfolio-primary transition group"
//           >
//             <div className="text-portfolio-primary mb-6 text-3xl">
//               {item.icon}
//             </div>
//             <h3 className="text-xl font-bold text-portfolio-heading mb-3">
//               {item.title}
//             </h3>
//             <p className="text-portfolio-body leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const expertise = [
//   {
//     title: "Responsive Design",
//     desc: "Fluid layouts that maintain pixel-perfection across all device sizes.",
//     icon: "📱",
//   },
//   {
//     title: "Interactive UI",
//     desc: "Engaging animations and micro-interactions that guide users.",
//     icon: "🌐",
//   },
//   {
//     title: "Performance",
//     desc: "Optimizing every byte for lightning-fast load times and smooth 60fps.",
//     icon: "⚡",
//   },
// ];

export default HomeCore;

export function TechCard({
  icon,
  title,
  index,
  selectIndex,
  className,
}: {
  icon?: ReactElement;
  index: Number | boolean;
  selectIndex: Number | boolean;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`w-auto flex rounded-xl border border-portfolio-body/25 shadow shadow-portfolio-primary/50 drop-shadow-2xl justify-center items-center hover:shadow-portfolio-primary/60 cursor-pointer hover:shadow-2xl transition-all duration-200 hover:drop-shadow-lg gap-2 bg-portfolio-border px-4.5 dark:border-portfolio-primary/35 py-2.5 ${index === selectIndex ? "shadow-2xl drop-shadow-2xl shadow-portfolio-primary/80" : null}`}
    >
      {icon && <div className="text-lg text-portfolio-primary">{icon}</div>}
      <span className={`font-bold capitalize text-base ${className}`}>
        {title}
      </span>
    </div>
  );
}
