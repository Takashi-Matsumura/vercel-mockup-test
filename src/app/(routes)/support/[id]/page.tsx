import Navbar from "@/app/_components/common/Navbar";
import HandoverHistory from "@/app/_components/support/HandoverHistory";
import VisitActions from "@/app/_components/support/VisitActions";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex-grow h-screen">
      <Navbar />
      <main className="bg-gray-200 pt-10 md:pt-14 h-full">
        <div>page: {params.id}</div>
        <VisitActions />
        <HandoverHistory />
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
};

export default page;
