import ProjectHeader from "./ProjectHeader";
import ProjectCard from "./ProjectCard";

export const ProjectPage = () => {
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 w-full`}
    >
      <ProjectHeader />

      <ProjectCard />
    </div>
  );
};

export default ProjectPage;
