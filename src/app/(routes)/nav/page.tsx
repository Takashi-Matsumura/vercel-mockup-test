import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <main className="bg-theme pt-14 flex h-screen flex-col justify-start space-y-10 items-center">
        <h1 className="text-4xl text-white">Care&Frail Support</h1>
        <Link href="/" className="border-y-2 text-white text-5xl">
          Home
        </Link>
        <Link href="/bbs" className="border-y-2 text-white text-5xl">
          BBS
        </Link>
        <Link href="/calendar" className="border-y-2 text-white text-5xl">
          Calendar
        </Link>
        <Link href="/" className="border-y-2 text-white text-5xl">
          Logout
        </Link>
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
};

export default page;
