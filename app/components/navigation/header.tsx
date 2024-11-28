"use client";
import { HeroIcons, React } from "@/lib/exports/dependencies";

export default function header() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="flex flex-row items-center justify-between border-b border-b-primCol-500 dark:border-b-primCol-800 border-opacity-50 dark:border-opacity-30 p-2 px-12">
      <span className="text-3xl font-headerFont font-bold text-primCol-900 dark:text-primCol-100">
        BotWiz Documentation
      </span>
      <div
        className="w-8 h-8 rounded-lg hover:bg-primCol-600 dark:hover:bg-primCol-800 hover:bg-opacity-40 p-2 duration-300 cursor-pointer"
        onClick={() => {
          setDarkMode(!darkMode);
          document.documentElement.classList.toggle("dark");
        }}
      >
        {darkMode ? (
          <HeroIcons.SunIcon className="text-white" />
        ) : (
          <HeroIcons.MoonIcon className="text-primCol-800" />
        )}
      </div>
    </div>
  );
}
