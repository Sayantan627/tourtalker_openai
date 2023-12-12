"use client";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-sm btn-outline"
    >
      {theme === themes.winter ? (
        <BsMoonFill className="w4 h-4" />
      ) : (
        <BsSunFill className="w4 h-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
