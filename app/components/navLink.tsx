"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({name}: {name: string}) {

      const pathname = usePathname();

      return (
            <>
                  <Link href={name.toLowerCase()} className={`${pathname === name.toLowerCase() && 'border-b-gray-600'} border-transparent border-2 duration-300`}>
                        {name}
                  </Link>
            </>
      );
}
