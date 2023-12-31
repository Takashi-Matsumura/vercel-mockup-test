import { Tweet } from "@/app/_types/types";
import Link from "next/link";
import React from "react";

interface SupportPaneProps {
  info: Tweet;
}

const SupportPane = ({ info }: SupportPaneProps) => {
  return (
    <Link href={`/support/${info.id}`}>
      <div
        className="bg-white border flex w-full justify-between p-4 items-center"
        onClick={() => {
          console.log(info);
        }}
      >
        <div className="w-full md:w-1/2 md:flex md:justify-between items-center">
          <div>
            <div className="text-base">
              {info.period.begin} - {info.period.end}
            </div>
            <div className="text-xl">{info.guest.name}</div>
          </div>
          <p className="w-full md:w-1/2">{info.text}</p>
        </div>
        <div className="w-1/2 md:flex justify-between items-center border-l pl-5">
          <div className="space-x-2">
            {info.helper.map((item) => (
              <button
                key={item.id}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full px-1 py-1 bg-theme text-white hover:bg-gray-500"
              >
                {item.mark}
              </button>
            ))}
          </div>
          <div className="w-full text-right md:text-left md:w-1/2">
            {info.transportation}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SupportPane;
