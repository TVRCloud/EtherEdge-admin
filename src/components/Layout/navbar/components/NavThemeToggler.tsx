import { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const NavThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div onClick={toggleDarkMode} className="cursor-pointer text-2xl">
      {isDarkMode ? (
        <IoSunny className="text-yellow-500" />
      ) : (
        <IoMoon className="text-gray-800" />
      )}
    </div>
  );
};

export default NavThemeToggler;
