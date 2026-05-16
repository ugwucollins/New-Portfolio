import { assets } from "../../Context/assets";
import Button from "../../Context/Button";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const router = useNavigate();
  {
    /* Hero Section */
  }
  return (
    <section className="flex relative flex-col lg:flex-row items-center justify-between gap-12 pt-20">
      <div data-aos="slide-right" className="lg:w-1/2 z-2 space-y-6">
        <div className="flex items-center gap-2 text-portfolio-primary font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-portfolio-primary animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </div>

        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-[min(20vw,70px)] max-sm:text-[min(20vw,48px)] max-[290px]:text-[min(10vw,45px)] font-bold text-portfolio-heading leading-tight"
        >
          Frontend <span className="text-portfolio-primary">Developer</span>{" "}
          <br />
          Crafting Experiences
        </h1>

        <p
          data-aos="slide-up"
          data-aos-duration="1200"
          className="text-[min(10vw,20px)] text-portfolio-body text-wrap max-w-lg"
        >
          I build modern, high-performance web applications with a focus on user
          experience and interactive design.
        </p>

        <div className="flex flex-row flex-wrap w-full gap-4 pt-4">
          <Button
            title="View Projects"
            onClick={() => router("/project", { replace: true })}
            type="blue"
          />
          <Button
            title="Contact me"
            onClick={() => router("/contact", { replace: true })}
            type="ghost"
          />
        </div>

        {/* Stats */}
        <div
          data-aos="fade-up-right"
          className="flex flex-row w-full flex-wrap gap-12 pt-8 border-t border-portfolio-border"
        >
          <div>
            <h3 className="text-3xl font-bold text-portfolio-heading">50+</h3>
            <p>PROJECTS</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-portfolio-heading">5+</h3>
            <p>YEARS EXP.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-portfolio-heading">100%</h3>
            <p>SUCCESS</p>
          </div>
        </div>
      </div>

      {/* Image/Mockup Area */}
      <div data-aos="slide-left" className="lg:w-1/2 z-2 w-full">
        <div className="bg-portfolio-card border border-portfolio-border p-2 rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={assets.hero1}
            loading="lazy"
            alt="Code Mockup"
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
