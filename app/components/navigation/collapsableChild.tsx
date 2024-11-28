import { Dependencies } from "@/lib/exports";

export default function collapsableChild({ name }: { name: string }) {
    return (
        <>
            <div className={`flex flex-row items-center hover:bg-primCol-400/60 dark:hover:bg-primCol-800/20 ml-5 mt-1 pl-2 duration-300 rounded-r-lg text-base p-1 gap-2 cursor-pointer border-l-2 border-l-primCol-400`}>
                <span>{name}</span>
            </div >
        </>
    )
}