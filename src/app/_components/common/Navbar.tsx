import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-400 w-full fixed flex justify-around h-14 items-center">
        <div className="text-2xl font-bold">Care & Frail Support</div>
        <div className="items-center space-x-3 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">BBS</a>
          <a href="#">Calendar</a>
          <a href="#">
            <button className="px-6 py-2 text-white bg-theme rounded-lg hover:bg-gray-800 tnpransition-all duration-300">
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
