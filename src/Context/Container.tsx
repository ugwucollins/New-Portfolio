import type { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full px-18 max-md:px-16 max-sm:px-5 max-[170px]:px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
