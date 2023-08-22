import Link from "next/link";
import React from "react";

type NavMenuProps = {
  className?: string;
};

const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={className}>
      <Link href="/">Home</Link>
      <Link href="/bbs">BBS</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/">
        <button className="px-6 py-2 text-white bg-theme rounded-lg hover:bg-gray-800 tnpransition-all duration-300">
          logout
        </button>
      </Link>
    </nav>
  );
};

export default NavMenu;
