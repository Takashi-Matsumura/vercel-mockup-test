import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="bg-blue-400 w-full fixed flex justify-around h-10 items-center">
        <div>Care & Frail Support</div>
        <div className="items-center space-x-3 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">BBS</a>
          <a href="#">Calendar</a>
          <a href="#">
            <button className="px-6 py-2 bg-theme rounded-lg hover:bg-purple-600 transition-all duration-300">
              logout
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
