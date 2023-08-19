import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-400 w-full fixed flex justify-around h-10 md:h-14 items-center">
        <div className="text-xl font-bold md:text-2xl">
          Care & Frail Support
        </div>
        <div className="items-center space-x-3 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/bbs">BBS</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/">
            <button className="px-6 py-2 text-white bg-theme rounded-lg hover:bg-gray-800 tnpransition-all duration-300">
              logout
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
