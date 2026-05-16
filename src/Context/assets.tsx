import { IoFlash } from "react-icons/io5";
import type { AboutCardProp, CardProp, MenuProp, TechProp } from "../Lib/types";
import { DiNodejs, DiReact } from "react-icons/di";
import { BiCode, BiWorld } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBackpack, BsJavascript, BsPhoneFill } from "react-icons/bs";
import { SiExpress, SiVite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFrameCorners } from "react-icons/pi";

import {
  BiBookOpen,
  BiDownload,
  BiGitBranch,
  BiStar,
  BiTerminal,
} from "react-icons/bi";
import { BsEyeFill, BsGithub, BsLayersFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { LuFileCode2 } from "react-icons/lu";

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

export const filters = [
  "All Work",
  "React",
  "Next.js",
  "TypeScript",
  "Architecture",
];
export const projects = [
  {
    title: "Nova Analytics Dashboard",
    description:
      "A real-time data visualization platform for enterprise logistics, handling millions of data points with sub-second latency.",
    tags: ["NEXT.JS", "D3.JS", "TYPESCRIPT"],
    imageType: "mesh",
    buttons: [
      {
        label: "Live Demo",
        icon: <FiExternalLink size={14} />,
        primary: true,
      },
      { label: "GitHub", icon: <BsGithub size={14} />, primary: false },
    ],
  },
  {
    title: "SynthUI Framework",
    description:
      "A high-performance CSS-in-JS library focused on design systems and extreme customization with zero runtime overhead.",
    tags: ["REACT", "RUST", "SWC"],
    imageType: "code",
    buttons: [
      { label: "Docs", icon: <BiTerminal size={14} />, primary: true },
      {
        label: "1.2k Stars",
        icon: <BiStar size={14} className="fill-current" />,
        primary: false,
      },
    ],
  },
  {
    title: "Cognitive Hub AI",
    description:
      "Integration of multi-modal AI models into a collaborative workspace with real-time vector database synchronization.",
    tags: ["OPENAI", "REDIS", "TAILWIND"],
    imageType: "glass",
    buttons: [
      { label: "Access", icon: <BsLayersFill size={14} />, primary: true },
      { label: "Read Me", icon: <BiBookOpen size={14} />, primary: false },
    ],
  },
  {
    title: "Streamline CRM",
    description:
      "A lightweight customer relationship management tool built with offline-first principles and PWA capabilities.",
    tags: ["PWA", "DEXIE.JS", "VITEST"],
    imageType: "grid",
    buttons: [
      { label: "Preview", icon: <BsEyeFill size={14} />, primary: true },
      { label: "Updates", icon: <BiGitBranch size={14} />, primary: false },
    ],
  },
  {
    title: "Nexus API Gateway",
    description:
      "Self-hosted API orchestration layer with built-in rate limiting, caching, and comprehensive telemetry metrics.",
    tags: ["NODE.JS", "DOCKER", "GRAFANA"],
    imageType: "lines",
    buttons: [
      { label: "Install", icon: <BiDownload size={14} />, primary: true },
      { label: "Wiki", icon: <LuFileCode2 size={14} />, primary: false },
    ],
  },
];

export type PROJECT = {
  title: string;
  categroy: string;
  description: string;
  imageUrl?: string;
  git?: string;
  path: string;
  tags: string[] | [string];
};

export const ProjectsArray: PROJECT[] = [
  {
    title: "Clear Cut Ai",
    categroy: "full",
    description:
      "Built a modern AI-driven platform that combines clean UI design with intelligent automation to create fast, responsive, and engaging user experiences. Focused on scalability, performance optimization, and intuitive frontend development.",
    path: "https://clear-cut-ai-five.vercel.app/",
    git: "https://github.com/ugwucollins/Clear_cut_AI",
    tags: ["react", "tailwind", "javascript", "mongodb", "node.js", "express"],
  },
  {
    title: "Nelly-J Catering Services Website",
    categroy: "mern",
    description:
      "A modern and responsive catering services website built with the MERN stack, showcasing food services, brand identity, and seamless user experience through clean UI design and optimized performance across all devices.",
    path: "https://nelly-j.vercel.app",
    git: "https://github.com/ugwucollins/NellyJ",
    tags: ["react", "tailwind", "javascript", "mongodb", "node.js", "express"],
  },

  {
    title: "First Landing Page",
    categroy: "html",
    description:
      "Created a visually appealing and fully responsive landing page using HTML, CSS, and JavaScript. Emphasized modern design principles, interactive user experience, and optimized frontend performance across devices",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html",
    git: "https://github.com/ugwucollins/Html-Css-and-JavaScrpit-projects/tree/main/landening1",
    tags: ["html", "css"],
  },
  {
    title: "Birthday Website",
    categroy: "html javascript",
    description:
      "Built an interactive birthday celebration webpage featuring dynamic animations, responsive layouts, and creative UI elements using HTML, CSS, and JavaScript. Designed to showcase frontend creativity and user-focused web design skills.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/",
    git: "https://github.com/ugwucollins/Html-Css-and-JavaScrpit-projects/tree/main/Birthday",
    tags: ["html", "css", "javascript"],
  },
  {
    title: "Amazon Ecommerce",
    categroy: "css javascript",
    description:
      "Developed a responsive Amazon-style eCommerce web application featuring dynamic product layouts, intuitive navigation, and interactive frontend functionality. Showcases strong skills in HTML, CSS, and JavaScript for building modern web interfaces.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html",
    git: "https://github.com/ugwucollins/Html-Css-and-JavaScrpit-projects/tree/main/amazon-project",
    tags: ["html", "css", "javascript"],
  },
  {
    title: "Youtube Clone",
    categroy: "css",
    description:
      "Created a YouTube-inspired video streaming interface using HTML, CSS, and JavaScript. Focused on responsive layouts, modern UI design, and interactive frontend elements to replicate the experience of a real-world media platform.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Youtube/YouTube.html",
    git: "https://github.com/ugwucollins/Html-Css-and-JavaScrpit-projects/tree/main/Youtube",
    tags: ["html", "css", "javascript"],
  },
  // react
  {
    title: "Acme Rocket",
    categroy: "css react",
    description:
      "Developed a sleek, high-performance web interface powered by Tailwind CSS with an emphasis on responsiveness, modern aesthetics, and seamless user experience. Demonstrates strong frontend development skills and efficient utility-first styling techniques.",
    path: "https://rocket-tailwind.vercel.app/",
    git: "https://github.com/ugwucollins/Rocket-tailwind",
    tags: ["html", "tailwind", "react"],
  },
  {
    title: "Gym Excerise",
    categroy: "css react",
    description:
      "Developed a responsive gym exercise tracking website using React and Sass. Implemented interactive UI components and a clean, modern design to enhance user experience.",
    path: "https://exercise-iota.vercel.app/",
    git: "https://github.com/ugwucollins/exercise",
    tags: ["html", "scss", "javascript", "react"],
  },
  {
    title: "Movie Cards",
    categroy: "react",
    description:
      "Created a responsive movie application featuring dynamic movie listings, search functionality, and interactive UI components. Showcases strong frontend development skills, API integration, and performance-focused web design using modern JavaScript practices.",
    path: "https://movie-app-ten-ashen.vercel.app/",
    git: "https://github.com/ugwucollins/Movie-App",
    tags: ["tailwind", "javascript", "react"],
  },
  {
    title: "React Form Handling",
    categroy: "css react",
    description:
      "Developed a responsive form handling solution using React and Tailwind CSS. Implemented intuitive UI components and seamless user experience for efficient data input and validation.",
    path: "https://react-form-handling.vercel.app/",
    git: "https://github.com/ugwucollins/react-form-handling",
    tags: ["html", "tailwind", "javascript", "react"],
  },
  {
    title: "Wikipedia",
    categroy: "next",
    description:
      "Built a responsive Next.js application showcasing modern frontend development practices, including optimized performance, reusable components, and clean UI design. Demonstrates experience with scalable React frameworks and production-ready web development",
    path: "https://next02-ten.vercel.app/",
    git: "https://github.com/ugwucollins/next02",
    tags: ["tailwind", "javascript", "react", "next"],
  },
  {
    title: "Users",
    categroy: "next",
    description:
      "Built a responsive Next.js application showcasing modern frontend development practices, including optimized performance, reusable components, and clean UI design. Demonstrates experience with scalable React frameworks and production-ready web development",
    path: "https://next01-ivory.vercel.app/",
    git: "https://github.com/ugwucollins/next01",
    tags: ["html", "tailwind", "javascript", "react", "next"],
  },

  {
    title: "Ascone Landing Page",
    categroy: "css react",

    description:
      "Created a high-quality responsive landing page for a fintech-style product, emphasizing modern design aesthetics, user trust, and clear call-to-action structure. Focused on performance, mobile responsiveness, and intuitive UI/UX patterns to simulate a real-world SaaS marketing website.",
    path: "https://ascone-landing-page.vercel.app/",
    git: "https://github.com/ugwucollins/Ascone-landing-page-",
    tags: ["tailwindcss", "javascript", "react"],
  },
  {
    title: "Cloned Ai",
    categroy: "next",
    imageUrl: "cloned_ai",
    description:
      "Built an AI-themed web application showcasing modern frontend development practices, including responsive design, reusable components, and dynamic UI interactions. Emphasizes clean architecture, user-focused design, and integration of intelligent-feeling interface patterns.",
    path: "https://cloned-ai-five.vercel.app/",
    git: "https://github.com/ugwucollins/Cloned_Ai",
    tags: [
      "css",
      "tailwind",
      "node.js",
      "react",
      "next",
      "typescript",
      "mongodb",
    ],
  },
  {
    title: "Blog Post",
    categroy: "react next",
    description:
      "A blog post written in MDX (Markdown + JSX) format. Built a modern blog web application featuring a clean reading interface and structured content layout for publishing articles. Developed with a focus on responsive design, dynamic routing, and reusable components to deliver a smooth and engaging reading experience",

    path: "https://blog-post-omega-five.vercel.app/",
    git: "https://github.com/ugwucollins/Blog_Post",
    tags: ["css", "tailwind", "javascript", "react", "next"],
  },
  {
    title: "Animal Image Slider",
    categroy: "css react",
    imageUrl: "image slider",
    description:
      "Developed a responsive and interactive slider application using React, featuring smooth drag interactions, dynamic state updates, and clean UI design. Demonstrates strong understanding of component-based architecture, user input handling, and modern frontend interactivity.",
    path: "https://react-slider-rosy.vercel.app/",
    git: "https://github.com/ugwucollins/React-slider",
    tags: ["html", "css", "tailwind", "javascript", "react"],
  },
  // react blog post with mern stack
  {
    title: "Blog Post",
    categroy: "mern react",
    description:
      "Developed a responsive blog platform using modern frontend practices, featuring clean typography, organized post layouts, and intuitive navigation. Demonstrates strong skills in UI design, component structure, and building content-driven web applications..",
    path: "https://blog-zone-beta.vercel.app/",
    git: "https://github.com/ugwucollins/BlogZone",
    tags: [
      "tailwindcss",
      "javascript",
      "react",
      "node.js",
      "express",
      "mongodb",
      "typescript",
    ],
  },
];

export const filtersArray = [
  {
    title: "All Project",
    path: "All Work",
  },
  {
    title: "HTML",
    path: "html",
  },
  {
    title: "CSS / TailwindCss",
    path: "css",
  },
  {
    title: "JavaScript",
    path: "javascript",
  },
  {
    title: "React",
    path: "react",
  },
  {
    title: "Next.Js",
    path: "next",
  },
  {
    title: "Mern-Stack",
    path: "mern",
  },
  {
    title: "Full-Stack",
    path: "full",
  },
];
