import { BiCode } from "react-icons/bi";
import Header from "../Context/Header";
import { Logo } from "../Component/navBar/Navbar";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowUp, BsDot } from "react-icons/bs";
import { quicks, socials } from "../Context/assets";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full backdrop-blur-2xl bg-portfolio-card shadow-md py-4 drop-shadow-2xl pt-7 shadow-portfolio-heading">
      <div className="flex flex-col gap-y-4">
        <div className="w-full font-bold text-center text-balance justify-center capitalize items-center flex flex-col text-4xl">
          <h1>
            Let's build something{" "}
            <span className="text-portfolio-primary">together</span>
          </h1>
          <Header icon={<BiCode />} text="Ready for the next challenge" />
        </div>

        <div className="w-full py-4 gap-4 px-10 max-sm:px-5 flex flex-row flex-wrap items-start justify-between">
          {/* Logo */}
          <div>
            <Logo />
            <div className="w-full max-w-xs pt-4 font-semibold opacity-50">
              A passionate Frontend Developer focused on creating high-impact
              digital experiences through clean code and modern aesthetics.
            </div>
          </div>

          {/* Quick */}
          <div>
            {quicks.map((quick, index: number) => (
              <div key={index}>
                <h1 className="font-bold uppercase">{quick.title}</h1>
                <div className="flex flex-col pt-4 gap-y-2">
                  {quick.lists.map(({ title, path }, index: number) => (
                    <Link
                      key={index}
                      className="font-semibold opacity-50 capitalize"
                      to={path}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div>
            {socials.map((social, index: number) => (
              <div key={index}>
                <h1 className="font-bold uppercase">{social.title}</h1>
                <div className="flex flex-col gap-y-2 pt-4">
                  {social.lists.map(({ title, path }, index: number) => (
                    <Link
                      key={index}
                      className="font-semibold opacity-50 capitalize"
                      to={path}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h1 className="font-bold uppercase">Contact</h1>
            <div className="flex text-base pt-4 gap-2 font-semibold opacity-60 items-center">
              <MdEmail className="text-portfolio-primary  text-2xl" />
              hello@developer.io
            </div>
            <div className="flex text-base gap-2 opacity-60 font-semibold items-center">
              <CiLocationOn className="text-portfolio-primary text-2xl" />
              Austin, Texas (CST)
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-portfolio-border" />
        <div className="w-full px-10 max-sm:px-5 flex justify-between items-center flex-row flex-wrap max-sm:justify-center gap-4">
          <div className="flex items-center justify-center capitalize text-base font-semibold opacity-55">
            @{date.getFullYear()}
            <BsDot />
            All rights reserved
          </div>
          <div className="flex items-center justify-center capitalize text-base font-semibold ">
            <span className="opacity-55">made with </span>
            <BiCode className="text-xl font-bold text-portfolio-primary" />
            <span className="opacity-55"> by Tony Collins frontend</span>
          </div>
          <div className="flex py-3 flex-row-reverse items-center justify-center text-base font-bold opacity-60 gap-2 uppercase">
            <div className=" w-auto py-3 cursor-pointer px-2 rounded-full outline-2 outline-portfolio-heading text-2xl">
              <BsArrowUp />
            </div>
            Back to top
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
