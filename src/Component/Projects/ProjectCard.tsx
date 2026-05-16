import { BiPlus } from "react-icons/bi";
import Button from "../../Context/Button";
import { useState } from "react";
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
import { assets } from "../../Context/assets";
import { TechCard } from "../Home/HomeCore";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  return (
    <div className="w-full py-20">
      <section className="flex flex-row dark:text-white flex-wrap gap-4 mb-12">
        {filtersArray.map((filter, index: number) => {
          const even = index % 2 === 0;
          return (
            <button
              data-aos={even ? "zoom-in-up" : "zoom-in-down"}
              data-aos-duration={even ? "1000" : "1100"}
              key={index}
              onClick={() => setActiveFilter(filter.path)}
              className={`px-5 py-3 cursor-pointer text-base font-semibold tracking-wide transition-all text-white bg-portfolio-heading  ${
                activeFilter === filter.path
                  ? " bg-portfolio-primary  rounded-full"
                  : " bg-portfolio-border dark:bg-gray-500/20  rounded-lg"
              }`}
            >
              {filter.title}
            </button>
          );
        })}
      </section>
      <div className="w-full flex flex-row flex-wrap gap-1 gap-y-5">
        {ProjectsArray.filter((card) =>
          card.categroy === activeFilter ? card.categroy : card,
        ).map((card, index: number) => (
          <Card key={index} data={card} />
        ))}
        {/* <Card /> */}
        <LastCard />
      </div>
    </div>
  );
};

export default ProjectCard;

function LastCard() {
  return (
    <div
      className={`rounded-xl w-full max-w-lg border border-dashed flex flex-col items-center justify-center px-10 py-15 text-center transition-all border-portfolio-border shadow-xl drop-shadow-2xl shadow-portfolio-primary/20 gap-y-4 `}
    >
      <div className="text-cyan-400/80 mb-3 w-auto p-4 bg-portfolio-border rounded-full shadow drop-shadow-2xl backdrop-blur-2xl">
        <BiPlus size={24} className="stroke-[1.5]" />
      </div>
      <div>
        <h3 className="font-bold text-base mb-1">Something New?</h3>
        <p
          className={`text-base font-semibold leading-relaxed w-full mb-5 opacity-50`}
        >
          I'm always working on side projects. Check my GitHub for the latest
          experimental repositories and WIPs.
        </p>
      </div>

      <Button title="Visit GitHub Profile" className="my-5" type="ghost" />
    </div>
  );
}
// type CardProp = {};
function Card({ data }: { data: any }) {
  const [selectIndex, setSelectIndex] = useState(0);

  function handle(num: any) {
    setSelectIndex(num);
  }
  const router = useNavigate();

  return (
    <div
      className={` w-full max-w-md max-[1000px]:max-w-xl max-[1000px]:justify-center border overflow-hidden flex flex-col border-portfolio-border transition-all duration-300 rounded-lg`}
    >
      <div className="h-70 w-full max-w-lg relative overflow-hidden flex rounded-2xl items-center justify-center bg-[#070d14] ">
        {data?.path ? (
          <iframe
            src={data?.path}
            className="w-full h-full"
            allow="camera;microphone;fullscreen;display-capture"
          />
        ) : (
          <img src={assets.hero1} className="w-full h-full" alt="projects" />
        )}
      </div>

      <div className="py-5 px-3">
        <div className="flex flex-col justify-start text-left items-start py-4">
          <h1 className="text-[min(10vw,30px)] font-semibold capitalize">
            {data?.title}
          </h1>
          <p className="opacity-50 text-base font-semibold">
            {data?.description.length >= 450
              ? data?.description.slice(0, 450)
              : data?.description.slice(0, 450)}
          </p>

          <div className="w-full pt-5 py-10 flex flex-row flex-wrap gap-4">
            {data?.tags?.map((card: any, index: number) => (
              <div key={index} onClick={() => handle(index)}>
                <TechCard
                  className="text-sm"
                  index={index}
                  selectIndex={selectIndex!}
                  title={card}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row gap-3 px-2">
            <Button
              title="Live Demo"
              className="w-full flex justify-center items-center text-center  dark:bg-portfolio-primary bg-portfolio-heading "
              type="blue"
              onClick={() => router(data?.path)}
            />
            <Button
              title="Github"
              className="w-full flex justify-center items-center text-center"
              type="ghost"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
  imageUrl?: string;
  description: string;
  path: string;
  tags: string[] | [string];
};

export const ProjectsArray: PROJECT[] = [
  {
    title: "Clear Cut Ai",
    categroy: "full",
    description:
      "A modern and responsive catering services website built with the MERN stack, showcasing food services, brand identity, and seamless user experience through clean UI design and optimized performance across all devices.",
    path: "https://nelly-j.vercel.app",
    tags: ["react", "tailwind", "javascript", "mongodb", "node.js", "express"],
  },
  {
    title: "Nelly-J Catering Services Website",
    categroy: "mern",
    description:
      "A modern and responsive catering services website built with the MERN stack, showcasing food services, brand identity, and seamless user experience through clean UI design and optimized performance across all devices.",
    path: "https://nelly-j.vercel.app",
    tags: ["react", "tailwind", "javascript", "mongodb", "node.js", "express"],
  },

  {
    title: "First Landing Page",
    categroy: "html",
    description:
      " Am a FrontEnd Developer that will help companies create and maintain a better code base for reusability.  I used html and Css in the design for the website to ensure a beautiful page for Our Client.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/landening1/page.html",
    tags: ["html", "css"],
  },
  {
    title: "Birthday Website",
    categroy: "html javascript",
    description:
      "I Used javaScript in creating an interactive Birthday website for a Friend.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Birthday/",
    tags: ["html", "css", "javascript"],
  },
  {
    title: "Amazon Ecommerce",
    categroy: "css javascript",
    description:
      "I used javaScript in creating a user interFace and interactive website by creating the Amazon Ecommerce that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/amazon-project/index.html",
    tags: ["html", "css", "javascript"],
  },
  {
    title: "Youtube Clone",
    categroy: "css",
    imageUrl: "youtube.png",
    description:
      "I used javaScript in creating a user interFace and interactive website by creating the Youtube Clone that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Youtube/YouTube.html",
    tags: ["html", "css", "javascript"],
  },
  // react
  {
    title: "Acme Rocket",
    categroy: "css react",
    description:
      "I used react in creating the website by creating the Acme Rocket that was fully responsive by the help of tailwind it was my first project with Tailwind.",
    path: "https://rocket-tailwind.vercel.app/",
    tags: ["html", "tailwind", "react"],
  },
  {
    title: "Gym Excerise",
    categroy: "css react",
    description:
      "I used react in creating a user interFace and interactive website by creating the Gym Excerise that was fully responsive and interactive. With the help of Scss for styling",
    path: "https://exercise-iota.vercel.app/",
    tags: ["html", "scss", "javascript", "react"],
  },
  {
    title: "Movie Cards",
    categroy: "react",
    description:
      "I used react in creating a user interFace and interactive website by creating the Movie Cards that was fully responsive and interactive.",
    path: "https://movie-app-ten-ashen.vercel.app/",
    tags: ["tailwind", "javascript", "react"],
  },
  {
    title: "React Form Handling",
    categroy: "css react",
    description:
      "I used react in creating a user interFace and interactive website by creating the React Form Handling that was fully responsive and interactive.",
    path: "https://react-form-handling.vercel.app/",
    tags: ["html", "tailwind", "javascript", "react"],
  },
  {
    title: "Wikipedia",
    categroy: "next",
    description:
      "I used react in creating a user interFace and interactive website by creating the Wikipedia that was fully responsive and interactive.",
    path: "https://next02-ten.vercel.app/",
    tags: ["tailwind", "javascript", "react", "next"],
  },
  {
    title: "Users",
    categroy: "next",
    description:
      "I used react in creating a user interFace and interactive website by creating the Users that was fully responsive and interactive.",
    path: "https://next01-ivory.vercel.app/",
    tags: ["html", "tailwind", "javascript", "react", "next"],
  },

  {
    title: "Movie Cards",
    categroy: "rcss eact",
    description:
      "I used react in creating a user interFace and interactive website by creating the Movie Cards that was fully responsive and interactive.",
    path: "https://ugwucollins.github.io/Html-Css-and-JavaScrpit-projects/Movie-Cards/",
    tags: ["html", "tailwind", "javascript", "react"],
  },

  {
    title: "Cloned Ai",
    categroy: "next",
    imageUrl: "cloned_ai",
    description:
      "I used Next.Js in creating a user interFace and interactive website by creating the Cloned Ai that was fully responsive and interactive. and a well auth system using Next Auth. and also used Tailwind css in creating a responsive website. with the use of TypeScript. and mongodb for the database.",
    path: "https://cloned-ai-five.vercel.app/",
    tags: [
      "css",
      "tailwind",
      "javascript",
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
      "A blog post written in MDX (Markdown + JSX) format. It compares and describes JavaScript and TypeScript in a clear and developer-focused way, making it suitable for a tech blog With the help of Next.js, Tailwind CSS, and MDX, you can create a fully-featured blog with a sleek design and a modern user experience. The blog post is a good example of how to use these technologies together to create a professional-looking website.",

    path: "https://blog-post-omega-five.vercel.app/",
    tags: ["html", "css", "tailwind", "javascript", "react", "next"],
  },
  {
    title: "Animal Image Slider",
    categroy: "css react",
    imageUrl: "image slider",
    description:
      "I created a react app that is a animal image slider that was fully responsive and interactive.",
    path: "https://react-slider-rosy.vercel.app/",
    tags: ["html", "css", "tailwind", "javascript", "react"],
  },
  // react blog post with mern stack
  {
    title: "Blog Post",
    categroy: "javascript react",
    description:
      "My blog post is a react app that allows user to see the latest blog posts and news and also allows the user to create a new blog post. as a blogger i have used react, node.js,express tailwind css, and mongodb for the database. it is  a fullstack app with user authentication and authorization. and also used typescript for the project. with admin dashboard, bloggers post, news, and user authentication and page.",
    path: "https://blog-zone-beta.vercel.app/",
    tags: ["html", "css", "tailwind", "javascript", "react"],
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

//  I designed and developed a fully responsive and visually appealing website for Nelly-J Catering Services using Node.js, express,mongodb and React (MERN). The goal of the project was to create a modern and user-friendly platform that showcases the catering brand’s offerings in a clear, elegant, and structured way. The website features a smooth navigation system, organized service sections, and optimized images that ensure fast load times across all devices. I implemented a clean UI layout, accessible components, and mobile-first styling to improve user experience and make the website easy to browse on smartphones, tablets, and desktops. The overall design highlights the brand’s identity with consistent color choices, well-structured content, and intuitive call-to-action elements, giving visitors a seamless and engaging browsing experience.
