import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Navbar";
import { menu } from "../../Context/assets";
import ThemeToggle from "../../Context/ThemeToggle";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const MobileNav = () => {
  const location = useLocation().pathname;
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(!open);
  }
  return (
    <>
      <nav className="fixed w-full px-14 max-md:px-16 max-sm:px-5 max-[170px]:px-2 left-0 top-0 z-50 bg-portfolio-bg/90 border-b border-portfolio-border max-[850px]:flex hidden flex-row justify-between items-center h-[11.5vh] backdrop-blur-2xl shadow-md drop-shadow-md drop-shadow-portfolio-card">
        <div>
          <Logo />
        </div>

        <div className="flex items-center gap-x-1.5">
          <div className="max-[210px]:hidden">
            <ThemeToggle />
          </div>
          <BiMenu
            className="text-3xl font-bold cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </nav>

      {open && (
        <>
          <nav className="fixed w-full transition-all duration-300  left-0 top-0 z-50 bg-portfolio-bg/10 border-b border-portfolio-border max-[850px]:block hidden h-screen backdrop-blur-md shadow-md drop-shadow-2xl drop-shadow-portfolio-card">
            <div className="w-full px-14 max-md:px-16 max-sm:px-5 max-[170px]:px-2 flex items-center flex-row justify-between bg-portfolio-bg/20 border-b  rounded-2xl border-portfolio-border backdrop-blur-xl shadow-portfolio-primary shadow-md drop-shadow-2xl drop-shadow-portfolio-card h-[12vh]">
              <div>
                <Logo />
              </div>

              <div className="flex items-center gap-x-1.5">
                <div className="max-[210px]:hidden">
                  <ThemeToggle />
                </div>
                <BiX
                  className="text-3xl font-bold cursor-pointer"
                  onClick={handleClose}
                />
              </div>
            </div>

            <div className="flex flex-col h-full gap-y-14 justify-center w-full items-center">
              {menu.map(({ title, path }, index: number) => (
                <Link to={path!} key={index} onClick={handleClose}>
                  <div
                    className={`text-xl  capitalize ${location === path ? "font-bold text-portfolio-primary border border-portfolio-border backdrop-blur-2xl shadow-portfolio-primary  drop-shadow-2xl shadow px-5 pb-4 pt-3 rounded-full" : "font-semibold"}`}
                  >
                    {title}
                  </div>
                </Link>
              ))}
              <div className="max-[210px]:block hidden">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default MobileNav;
