import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import React from "react";

const TimeLineMain = () => {
  return (
    <div>
      <div className="bg-theme h-24 fixed w-full px-10">
        <div className="flex justify-left text-white text-4xl items-center h-full">
          <Link href="#" className="px-4">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <p>{format(new Date(), "MM/dd(E)", { locale: ja })}</p>
          <Link href="#" className="px-4">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col min-h-screen pt-24">main</div>
    </div>
  );
};

export default TimeLineMain;
