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
            <div className="relative flex flex-col w-full text-primCol-900">
              <span className="cursor-pointer hover:bg-primCol-300 duration-300">
                Introduction
              </span>
              <span>Settings</span>
            </div>
          )}
      </aside>
    </>
  );
}
