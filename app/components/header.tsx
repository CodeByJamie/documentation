import Link from "next/link";
import NavLink from "./navLink";

export default function Header() {

      return (
            <div className="flex justify-between w-screen p-8 px-24">
                  <div className="">
                        <span className="text-xl font-bold">Tixie</span>
                  </div>
                  <div className="flex gap-16 font-semibold text-lg">
                              <NavLink name="Home"/>
                              <NavLink name="Docs"/>
                              <NavLink name="Support"/>
                  </div>
                  <div className="">
                        <Link href={'/dashboard'} className="border-2 rounded-full border-gray-600 p-3 px-8 hover:opacity-80 duration-300">
                              Login
                        </Link>
                  </div>
            </div>
      )
}