// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-2 py-2 rounded-3xl bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {dark ? " ☀️ " : " 🌙 "}
    </button>
  );
};

export default ThemeToggle;
