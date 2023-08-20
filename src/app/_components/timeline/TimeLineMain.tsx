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

interface TimeLineMainProps {
  dataProvider: Tweet[];
}

const TimeLineMain = ({ dataProvider }: TimeLineMainProps) => {
  const [users, setUsers] = React.useState(false);

  const hidden = () => {
    setUsers(!users);
  };

  return (
    <div>
      <div className="bg-theme h-20 md:h-24 fixed w-full px-4 md:px-10 flex items-center">
        {!users && (
          <Link href="#" className="text-center text-white" onClick={hidden}>
            <FontAwesomeIcon icon={faUsers} className="w-10 fa-2x" />
          </Link>
        )}
        {users && (
          <Link href="#" className="text-center text-white" onClick={hidden}>
            <FontAwesomeIcon icon={faUser} className="w-10 fa-2x" />
          </Link>
        )}
        <div className="flex justify-center text-white text-4xl items-center h-full w-full">
          <Link href="#" className="px-4">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <p>{format(new Date(), "MM/dd(E)", { locale: ja })}</p>
          <Link href="#" className="px-4">
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
