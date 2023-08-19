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
      <div className="bg-theme h-20 md:h-24 fixed w-full px-2 md:px-10 flex items-center">
        {!users && (
          <Link
            href="#"
            className="w-10 text-center text-white"
            onClick={hidden}
          >
            <FontAwesomeIcon icon={faUsers} className="fa-2x" />
          </Link>
        )}
        {users && (
          <Link
            href="#"
            className="w-10 text-center text-white"
            onClick={hidden}
          >
            <FontAwesomeIcon icon={faUser} className="fa-2x" />
          </Link>
        )}
        <div className="flex justify-center text-white text-4xl items-center h-full w-1/3">
          <Link href="#" className="px-4">
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
          <p>{format(new Date(), "MM/dd(E)", { locale: ja })}</p>
          <Link href="#" className="px-4">
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col min-h-screen pt-20 md:pt-24 space-y-2 px-5">
        {dataProvider.map((item) => (
          <SupportPane key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineMain;
