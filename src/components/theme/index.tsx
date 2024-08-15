"use client";

import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { PiSunHorizonBold } from "react-icons/pi";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <PiSunHorizonBold size={30} />
      ) : (
        <MdDarkMode size={30} />
      )}
    </button>
  );
}
