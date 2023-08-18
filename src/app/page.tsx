import Image from "next/image";
import Navbar from "./_components/common/Navbar";
import TimeLineMain from "./_components/timeline/TimeLineMain";

export default function Home() {
  return (
    <div className="flex-grow">
      <Navbar />
      <main className="bg-gray-200 pt-14">
        <TimeLineMain />
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
}
