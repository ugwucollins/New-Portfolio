import type { CardProp } from "../Lib/types";

const Card = ({
  index,
  icon,
  title,
  message,
  className,
  selectIndexCard,
}: CardProp) => {
  return (
    <div
      className={`w-full   ${className ? className : "max-sm:max-w-3xl max-w-110"}`}
    >
      <div
        className={`p-8 bg-portfolio-card border border-portfolio-border rounded-2xl hover:border-portfolio-primary hover:cursor-pointer transition hover:drop-shadow-2xl hover:shadow-portfolio-primary/40 group ${index === selectIndexCard ? "shadow drop-shadow-2xl shadow-portfolio-primary/40" : null}`}
      >
        <div className="w-full flex justify-start items-center">
          <div className="text-portfolio-primary mb-6 p-2.5  bg-portfolio-primary/10 border border-portfolio-primary/15 w-auto rounded-lg shadow-xl drop-shadow-2xl shadow-portfolio-primary/15 text-2xl backdrop-blur-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold pt-2 text-portfolio-heading mb-3">
          {title}
        </h3>
        <p className="text-portfolio-body leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default Card;
