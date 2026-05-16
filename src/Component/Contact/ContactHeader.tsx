import Header from "../../Context/Header";
import { MdMessage } from "react-icons/md";

const ContactHeader = () => {
  return (
    <div>
      <Header icon={<MdMessage />} text="get in touch" />
      <div className="w-full flex justify-center items-center flex-col">
        <h1
          data-aos="zoom-in-left"
          className="w-full  justify-center items-center flex flex-col gap-1.5 text-[min(10vw,25px)] text-portfolio-heading text-shadow-portfolio-heading font-bold capitalize"
        >
          let's work together
        </h1>

        <p className=" opacity-60 font-semibold text-sm">
          Have a project in mind?. Let's discuss how we can bring your ideal to
          life
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
