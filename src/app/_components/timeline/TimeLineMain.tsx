"use client";

import {
  faAngleLeft,
  faAngleRight,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";
import React from "react";
import SupportPane from "./SupportPane";
import { Tweet } from "@/app/_types/types";
import dayjs from "dayjs";
import "dayjs/locale/ja";

interface TimeLineMainProps {
  dataProvider: Tweet[];
  className?: string;
}

const TimeLineMain = ({ dataProvider, className }: TimeLineMainProps) => {
  const [isShowingAllUsers, setIsShowingAllUsers] = React.useState(true);

  const toggleUserListView = () => {
    setIsShowingAllUsers(!isShowingAllUsers);
  };

  dayjs.locale("ja");
  const [displayedDate, setDisplayedDate] = React.useState(dayjs());

  const changeDisplayedDate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setDisplayedDate(displayedDate.add(1, "day"));
    } else {
      setDisplayedDate(displayedDate.subtract(1, "day"));
    }
  };

  return (
    <div className={className}>
      <div className="bg-theme h-20 md:h-24 fixed w-full px-4 md:px-10 flex items-center">
        {isShowingAllUsers && (
          <Link
            href="#"
            className="text-center text-white"
            onClick={toggleUserListView}
          >
            <FontAwesomeIcon icon={faUsers} className="w-10 fa-2x" />
          </Link>
        )}
        {!isShowingAllUsers && (
          <Link
            href="#"
            className="text-center text-white"
            onClick={toggleUserListView}
          >
            <FontAwesomeIcon icon={faUser} className="w-10 fa-2x" />
          </Link>
        )}
        <div className="flex justify-center text-white text-4xl items-center h-full w-full">
          <Link
            href="#"
            className="px-4"
            onClick={() => changeDisplayedDate("next")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <p>{displayedDate.format("MM/DD(ddd)")}</p>
          <Link
            href="#"
            className="px-4"
            onClick={() => changeDisplayedDate("prev")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
        <div>{/* 休みヘルパー */}</div>
      </div>
      <div className="flex flex-col min-h-screen pt-24 md:pt-28 space-y-2 px-5 w-full">
        {dataProvider.map((item) => (
          <SupportPane key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineMain;
