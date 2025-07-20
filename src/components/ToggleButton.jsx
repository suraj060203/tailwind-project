
// src/components/ThemeToggle.jsx
import useDarkMode from "./DarkTheme";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === 'dark' ? (<MdOutlineDarkMode className="text-2xl"/>) : (<MdDarkMode className="text-2xl"/>)}
    </button>
  );
};

export default ThemeToggle;
