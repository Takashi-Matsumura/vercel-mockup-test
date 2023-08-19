import Image from "next/image";
import Navbar from "./_components/common/Navbar";
import TimeLineMain from "./_components/timeline/TimeLineMain";
import { getAll } from "@/api";

export default async function Home() {
  const list = await getAll();
  console.log(list);

  return (
    <div className="flex-grow">
      <Navbar />
      <main className="bg-gray-200 pt-10 md:pt-14">
        <TimeLineMain dataProvider={list} />
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
}
