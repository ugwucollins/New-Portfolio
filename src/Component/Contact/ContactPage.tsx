import Container from "../../Context/Container";
import Connect from "./Connect";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

const ContactPage = () => {
  return (
    <Container className="py-30">
      <ContactHeader />
      <div className=" py-20 relative flex flex-row justify-center items-start flex-wrap w-full  gap-8 gap-y-15">
        <Connect />
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;
