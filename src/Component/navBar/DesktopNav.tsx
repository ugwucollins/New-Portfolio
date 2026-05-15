import { Link, useLocation } from "react-router-dom";
import { menu } from "../../Context/assets";
import { Logo } from "./Navbar";
import ThemeToggle from "../../Context/ThemeToggle";

const DesktopNav = () => {
  const location = useLocation().pathname;
  return (
    <nav className="fixed max-[850px]:hidden w-full px-14 max-md:px-16 max-sm:px-5 max-[170px]:px-2 left-0 top-0 z-50 bg-portfolio-bg/90 border-b border-portfolio-border flex flex-row justify-between items-center h-[10vh] backdrop-blur-2xl shadow-md drop-shadow-md drop-shadow-portfolio-card">
      <div>
        <Logo />
      </div>
      {location === "/" ? (
        <div className="flex   gap-x-8 flex-row justify-start items-center">
          {menu.slice(1).map(({ title, path }, index: number) => (
            <Link to={path!} key={index}>
              <div
                className={`text-base  capitalize ${location === path ? "font-bold text-portfolio-primary border border-portfolio-border backdrop-blur-2xl  shadow px-3.5 pb-2 pt-1.5 rounded-full" : "font-semibold"}`}
              >
                {title}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex   gap-x-8 flex-row justify-start items-center">
          {menu.map(({ title, path }, index: number) => (
            <Link to={path!} key={index}>
              <div
                className={`text-base  capitalize ${location === path ? "font-bold text-portfolio-primary border border-portfolio-border backdrop-blur-2xl  shadow px-3.5 pb-2 pt-1.5 rounded-full" : "font-semibold"}`}
              >
                {title}
              </div>
            </Link>
          ))}
        </div>
      )}

      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default DesktopNav;
