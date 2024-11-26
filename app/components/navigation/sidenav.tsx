"use client";
import { HeroIcons, React } from "@/lib/exports/dependencies";

export default function sidenav() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <aside className="absolute top-15 left-0 flex flex-col max-w-fit h-screen pl-12 select-none gap-1">
          <div
            className="flex flex-row items-center cursor-pointer gap-2 w-full dark:text-primCol-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <h2 className="font-parentFont text-lg ">Getting Started</h2>
            <HeroIcons.ChevronDownIcon
              className={`size-4 ${!collapsed && "rotate-90"} duration-300`}
            />
          </div>
          {!collapsed && (
            //TODO: Add HeroIcons to the left of each child element
            <div className="relative flex flex-col w-full text-primCol-900 dark:text-primCol-100 text-lg gap-2">
              <span className="cursor-pointer hover:bg-primCol-300/60 dark:hover:bg-primCol-800/20 px-2 duration-300 rounded-lg text-base">
                Introduction
              </span>
              <span className="cursor-pointer hover:bg-primCol-300/60 dark:hover:bg-primCol-800/20 px-2 duration-300 rounded-lg text-base">Settings</span>
            </div>
          )}
      </aside>
    </>
  );
}
