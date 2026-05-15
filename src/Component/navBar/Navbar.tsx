import { CgCode } from "react-icons/cg";
// import ThemeToggle from "../../Context/ThemeToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Container from "../../Context/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container className="w-full">
      <DesktopNav />
      <MobileNav />
    </Container>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full z-50 bg-portfolio-bg/80 backdrop-blur-md border-b border-portfolio-border">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-portfolio-primary rounded-lg flex items-center justify-center text-white font-bold">
//             DP
//           </div>
//           <span className="text-portfolio-heading font-bold tracking-tight text-xl">
//             DEVPORTFOLIO
//           </span>
//         </div>

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-portfolio-body">
//           <a href="#about" className="hover:text-portfolio-primary transition">
//             About
//           </a>
//           <a href="#skills" className="hover:text-portfolio-primary transition">
//             Skills
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-portfolio-primary transition"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-portfolio-primary transition"
//           >
//             Contact
//           </a>
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="relative flex justify-start items-center flex-row gap-1">
        <div className="w-auto p-3.5 text-portfolio-bg text-2xl flex justify-center rounded-lg items-center font-bold bg-portfolio-primary">
          <CgCode />
        </div>
        <div className="flex capitalize gap-0 flex-row font-bold text-base w-auto max-[301px]:hidden">
          <span className="text-portfolio-heading">Dev</span>
          <h1 className="text-portfolio-primary">PORTFOLIO</h1>
        </div>
      </div>
    </Link>
  );
};
