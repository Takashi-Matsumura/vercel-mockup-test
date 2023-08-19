import Navbar from "@/app/_components/common/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex-grow">
      <Navbar />
      <main className="bg-white pt-14 flex justify-center">
        <Image
          src="/images/bbs-sample.png"
          width={500}
          height={500}
          alt="bbs-sample"
        />
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
};

export default page;
