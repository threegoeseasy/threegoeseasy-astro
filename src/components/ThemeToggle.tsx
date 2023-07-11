import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact/compat";

export default function ThemeToggle({}): JSX.Element {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className=" text-center " onClick={handleClick}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
