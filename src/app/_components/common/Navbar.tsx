import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-400 w-full fixed flex justify-around h-10 md:h-14 items-center">
        <div className="text-xl font-bold md:text-2xl">
          Care & Frail Support
        </div>
        <NavMenu className="items-center space-x-3 hidden md:flex" />
        <div className="flex md:hidden">
          <Link href="/nav">
            <FontAwesomeIcon icon={faBars} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
