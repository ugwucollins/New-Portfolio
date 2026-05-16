const InputFiled = () => {
  return (
    <div className="w-full flex flex-col gap-y-3 py-3">
      <label htmlFor="" className="font-bold text-base capitalize">
        Email*
      </label>
      <input
        placeholder="Email is required"
        type="text"
        className="w-full px-4 py-3 rounded-lg focus:rounded-full focus:outline-2 transition-all duration-300 shadow-md drop-shadow-2xl shadow-portfolio-bg focus:outline-portfolio-primary border-none placeholder:text-base font-semibold bg-portfolio-border"
      />
    </div>
  );
};

export default InputFiled;

import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import type { InputProps } from "../Lib/types";

export const InputField = ({
  label,
  value,
  placeholder,
  type,
  className,
  error,
  name,
}: InputProps) => {
  const [open, setOpen] = useState<boolean>(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div className="w-full flex flex-col gap-y-1 relative py-1">
      {label && (
        <label
          htmlFor=""
          className="font-bold text-lg pt-1.5 pb-0.5 capitalize"
        >
          {label} *
        </label>
      )}

      <div className="w-full relative">
        <input
          type={type === "password" ? (open ? "text" : type) : type}
          name={name}
          placeholder={placeholder}
          {...value}
          className={`w-full py-3 px-4 
            rounded-lg focus:rounded-full transition-all duration-200 focus:shadow my-1 focus:drop-shadow-2xl focus:ring-portfolio-primary focus:ring-2 outline outline-gray-700 font-semibold dark:bg-portfolio-border focus:outline-none text-base bg-portfolio-border/40 ${className}`}
        />
        {type === "password" && (
          <div
            onClick={handleToggle}
            className="text-2xl cursor-pointer absolute right-3.5 top-4"
          >
            {open ? <BsEyeFill /> : <BsEyeSlashFill />}
          </div>
        )}
      </div>
      {error && (
        <span className="text-base text-red-800 font-semibold">{error}</span>
      )}
    </div>
  );
};
