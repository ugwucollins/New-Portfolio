import type { ButtonProp } from "../Lib/types";

const Button = ({ type, className, icon, title, onClick }: ButtonProp) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          type === "blue"
            ? `bg-portfolio-primary capitalize text-white px-8 py-4 rounded-lg font-semibold hover:font-bold hover:opacity-90 hover:cursor-pointer transition flex items-center gap-2 ${className} `
            : type === "glow"
              ? `bg-portfolio-card border border-portfolio-primary/20 hover:border-portfolio-primary/40 transition-all duration-150 text-portfolio-heading px-8 hover:font-bold py-4 rounded-lg hover:bg-portfolio-border/40 cursor-pointer shadow
            hover:shadow-md drop-shadow-2xl shadow-portfolio-primary/50 hover:shadow-portfolio-primary gap-2 font-semibold text-base flex capitalize items-center ${className}`
              : `bg-portfolio-card border capitalize border-portfolio-primary/20 hover:border-portfolio-primary/40 transition-all duration-150 text-portfolio-heading px-8 hover:font-bold py-4 rounded-lg hover:bg-portfolio-border/50 cursor-pointer
            hover:shadow drop-shadow-2xl shadow-portfolio-primary/20 font-semibold text-base flex items-center justify-center gap-1.5 ${className}`
        }
      >
        {icon ? icon : null}
        {title}
      </button>
    </div>
  );
};

export default Button;
