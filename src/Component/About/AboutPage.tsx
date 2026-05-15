import { lazy } from "react";

const AboutTech = lazy(() => import("./AboutTech"));
const AboutHeader = lazy(() => import("./AboutHeader"));
const AboutSkills = lazy(() => import("./AboutSkills"));

const AboutPage = () => {
  return (
    <div className="w-full">
      <AboutHeader />
      <AboutTech />
      <AboutSkills />
    </div>
  );
};

export default AboutPage;
