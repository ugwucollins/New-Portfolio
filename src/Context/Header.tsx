import type { ReactElement } from "react";

const Header = ({
  icon,
  text,
  className,
}: {
  icon?: ReactElement;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`w-full flex justify-center text-center items-center py-5 ${className}`}
    >
      <div className="py-1.5 w-auto px-3 rounded-full capitalize bg-portfolio-primary/20 flex items-center gap-1 text-portfolio-primary text-[12px] font-bold border border-portfolio-primary shadow  drop-shadow-2xl">
        <div className="text-xl">{icon}</div>
        {text}
      </div>
    </div>
  );
};

export default Header;
