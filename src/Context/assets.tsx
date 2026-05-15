import { IoFlash } from "react-icons/io5";
import type { AboutCardProp, CardProp, MenuProp, TechProp } from "../Lib/types";
import { DiNodejs, DiReact } from "react-icons/di";
import { BiCode, BiWorld } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBackpack, BsJavascript, BsPhoneFill } from "react-icons/bs";
import { SiExpress, SiVite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFrameCorners } from "react-icons/pi";

const profile = "/profile.png";
const avater = "/avater.png";
const profile1 = "/profile1.png";
const hero = "/hero.jpg";
const hero1 = "/hero1.jpg";
export const assets = {
  profile,
  profile1,
  avater,
  hero,
  hero1,
};

export const menu: MenuProp[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "skills",
    path: "/skills",
  },
  {
    title: "projects",
    path: "/projects",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

export const quicks = [
  {
    title: "Quick Links",
    lists: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "skills",
        path: "/skills",
      },
      {
        title: "projects",
        path: "/projects",
      },
      {
        title: "contact",
        path: "/contact",
      },
    ],
  },
];

export const socials = [
  {
    title: "socials",
    lists: [
      {
        title: "GirHub",
        path: "#",
      },
      {
        title: "Linkedin",
        path: "#",
      },
      {
        title: "Twitter",
        path: "#",
      },
      {
        title: "Instagram",
        path: "#",
      },
      {
        title: "Facebook",
        path: "#",
      },
    ],
  },
];

export const tech: TechProp[] = [
  {
    icon: <DiReact />,
    title: "React",
  },
  {
    icon: <IoFlash />,
    title: "Next.js",
  },
  {
    icon: <BiCode />,
    title: "TypeScript",
  },
  {
    icon: <RiTailwindCssFill />,
    title: "TailwindCss",
  },
  {
    icon: <BsJavascript />,
    title: "Javascript",
  },
  {
    icon: <DiNodejs />,
    title: "Node.js",
  },
  {
    icon: <SiExpress />,
    title: "express",
  },
];

export const expertiseArray: CardProp[] = [
  {
    title: "Responsive Design",
    message:
      "Fluid layouts that maintain pixel-perfection across all device sizes.",
    icon: <TbBrandReactNative />,
  },
  {
    title: "Interactive UI",
    message: "Engaging animations and micro-interactions that guide users.",
    icon: <BiWorld />,
  },
  {
    title: "Performance",
    message:
      "Optimizing every byte for lightning-fast load times and smooth 60fps.",
    icon: <IoFlash />,
  },
];
export const expertiseSkillsArray: CardProp[] = [
  {
    title: "Frontend Development",
    message:
      "Building responsive and performant web application using React,Next.js and  other modern javascript frameworks with perfect designs",
    icon: <SiVite />,
  },
  {
    title: "Responsive Design",
    message:
      "crafting mobile-first responsive interface that  Fluid layouts which maintain pixel-perfection across all device sizes for user Experiences.",
    icon: <BsPhoneFill />,
  },
  {
    title: "custom components",
    message:
      "Engaging in reliable and scaleable components liberies and design system that maintain constency.",
    icon: <BiCode />,
  },
  {
    title: "Interactive UI",
    message: "Engaging animations and micro-interactions that guide users.",
    icon: <BiWorld />,
  },
  {
    title: "Performance optimization",
    message:
      "Optimizing web applications for speed and efficiency through codes .Optimizing every byte for lightning-fast load times and smooth 60fps.",
    icon: <IoFlash />,
  },
];

export const AboutCardArray: AboutCardProp[] = [
  {
    icon: <BiCode />,
    title: "Languages",
    desc: "The core building blocks of my web applications",
    tech: ["TypeScript", "JavaScript", "HTML5/CSS3", "GraphQL"],
  },
  {
    icon: <PiFrameCorners />,
    title: "Frameworks",
    desc: "Modern libraries and Framework I use to  scale projects.",
    tech: ["React.js", "Next.js", "TailwindCss", "React Native"],
  },
  {
    icon: <BsBackpack />,
    title: "Backend Tools",
    desc: "Essential tools for creating and building a seamless APIS and Auths",
    tech: ["Express", "Node.js", "MongoDb", "Jwt"],
  },
];
