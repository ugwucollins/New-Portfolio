import { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  // Initialize from localStorage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-6.5 py-2.5 cursor-pointer bg-portfolio-card border border-portfolio-border rounded-full flex justify-center items-center text-portfolio-heading"
    >
      {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
}
