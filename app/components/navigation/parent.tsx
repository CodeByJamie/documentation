import { Dependencies } from "@/lib/exports";

export default function Parent({ childrenElements, name }: Readonly<{ childrenElements: Dependencies.React.ReactNode; name: string }>) {

    const [collapsed, setCollapsed] = Dependencies.React.useState(false);

    return (
        <div
            className='flex flex-col items-center cursor-pointer gap-2 w-full dark:text-primCol-100 pb-2'
        >
            <div className="flex flex-row items-center w-full gap-2" onClick={() =>
                setCollapsed(
                    !collapsed
                )
            }>
                <span className="text-xl font-headerFont max-w-fit">{name}</span>
                <Dependencies.HeroIcons.ChevronDownIcon className={`size-4 duration-300 ${!collapsed &&
                    "rotate-90 duration-300"
                    }`}
                />
            </div>
            {!collapsed && (
                <div className='relative flex flex-col w-full text-primCol-900 dark:text-primCol-100 text-lg gap-1'>
                    {childrenElements}
                </div>
            )}
        </div>
        
    )
}