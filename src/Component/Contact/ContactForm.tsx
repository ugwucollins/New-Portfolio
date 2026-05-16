import { BiLoader, BiSend } from "react-icons/bi";
import Button from "../../Context/Button";
import { InputField } from "../../Context/InputFiled";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactValues } from "../../Lib/Schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextAreaField from "../../Context/TextAreaField";

const ContactForm = () => {
  const form: any = useRef("");
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });
  function empty() {
    setValue("email", "");
    setValue("name", "");
    setValue("subject", "");
    setValue("message", "");
  }
  const onSubmit: SubmitHandler<ContactValues> = async (data) => {
    console.log(data);

    await emailjs
      .sendForm(
        "service_gjs48dc",
        "template_0130fgk",
        form.current,
        "onBgeaCnBkO6NiHur",
      )
      .then(
        (result) => {
          console.log(result.text);
          empty();
        },
        (error) => {
          console.log(error.text);
          setError("root", {
            message: "Failed to send message. Please try again later.",
            type: "error",
          });
        },
      );
  };

  return (
    <div
      data-aos="zoom-in-left"
      className="w-full max-w-2xl px-6 py-9 bg-portfolio-bg backdrop-blur-2xl shadow-2xl drop-shadow-2xl shadow-portfolio-primary/20 rounded-2xl"
    >
      <form ref={form} className="email-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="w-full flex gap-4 flex-row  max-sm:flex-col">
            <InputField
              value={register("name")}
              type="text"
              error={errors.name?.message}
              label="fullName"
              placeholder="Full Name"
              name="user_name"
            />
            <InputField
              value={register("phoneNumber")}
              type="text"
              error={errors.phoneNumber?.message}
              label="phone Number"
              name="user_phonenumber"
              placeholder="phone number"
            />
          </div>
          <InputField
            value={register("email")}
            type="email"
            error={errors.email?.message}
            label="email"
            name="user_email"
            placeholder="example@gmail.com"
          />
          <InputField
            value={register("subject")}
            type="text"
            error={errors.subject?.message}
            label="subject"
            placeholder="Project ..."
            name="user_subject"
          />
          <TextAreaField
            value={register("message")}
            error={errors.message?.message}
            label="message"
            name="message"
            placeholder="Message"
          />
        </div>
        <div className="w-full py-8">
          <Button
            title={isSubmitting ? "sending..." : "send message"}
            className="w-full flex hover:font-bold text-lg justify-center items-center text-center"
            type="blue"
            icon={isSubmitting ? <BiLoader /> : <BiSend />}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
