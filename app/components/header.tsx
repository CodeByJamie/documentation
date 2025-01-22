import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";

export default function Header() {

      return (
            <div className="flex justify-between w-screen">
                  <div className=""></div>
                  <div className="flex gap-8">
                              <NavLink name="Home"/>
                              <NavLink name="Docs"/>
                              <NavLink name="Support"/>
                  </div>
                  <div className=""></div>
            </div>
      )
}