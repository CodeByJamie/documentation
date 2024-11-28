"use client";
import { Dependencies } from "@/lib/exports"
import CollapsableChild from "./collapsableChild";

export default function ChildPage({ icon, pageName, collapsable = false, children }: { icon: string, pageName: string, collapsable?: boolean, children?: { name: string, } }) {

    const [collapsed, setCollapsed] = Dependencies.React.useState(false);


    if (!collapsable) {
        return (
            <>
                <div className={`flex flex-row items-center hover:bg-primCol-400/60 dark:hover:bg-primCol-800/20 pl-2 pr-8 duration-300 rounded-lg text-base p-1 gap-2 cursor-pointer`}>
                    {
                        Dependencies.React.createElement(Dependencies.HeroIcons[icon as keyof typeof Dependencies.HeroIcons], { className: "size-4" })
                    }
                    <span>{pageName}</span>

                </div >
            </>
        )
    }
    return (

        <div className="flex flex-col w-full">
            <div className={`flex flex-row items-center hover:bg-primCol-400/60 dark:hover:bg-primCol-800/20 rounded-lg text-base p-1 gap-2 cursor-pointer`}>
                <div className="flex flex-row justify-between w-full items-center text-base pl-2">
                    <div className="flex flex-row items-center gap-2">
                        {
                            Dependencies.React.createElement(Dependencies.HeroIcons[icon as keyof typeof Dependencies.HeroIcons], { className: "size-4" })
                        }
                        <span>{pageName}</span>
                    </div>
                    <Dependencies.HeroIcons.ChevronDownIcon className={`size-3 ${!collapsed &&
                        "rotate-90"
                        } duration-300`} onClick={() =>
                            setCollapsed(
                                !collapsed
                            )
                        } />
                </div>
            </div>
            {!collapsed && (
                <CollapsableChild name={`${children?.name}`} />
            )}
        </div>
    )
}
