import { PiProjectorScreen } from "react-icons/pi";
import Header from "../../Context/Header";

const ProjectHeader = () => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full flex flex-col items-center justify-start"
    >
      <Header
        text="my works"
        icon={<PiProjectorScreen />}
        className="justify-start"
      />
      {/* Main Title Headers */}
      <section className="mb-10 w-full">
        <h1
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase italic"
        >
          Featured{" "}
          <span className="text-portfolio-primary not-italic">Projects</span>
        </h1>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="1100"
          className={`text-base opacity-60 max-w-xl leading-relaxed tracking-wide `}
        >
          A showcase of high-performance frontend applications, architectural
          experiments, and open-source contributions.
        </p>
      </section>
    </div>
  );
};

export default ProjectHeader;
