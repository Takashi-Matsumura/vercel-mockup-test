"use client";

import Navbar from "@/app/_components/common/Navbar";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import React from "react";

const page = () => {
  return (
    <div className="flex-grow">
      <Navbar />
      <main className="bg-white pt-14">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
        />
      </main>
      <footer className="bg-gray-400 text-center">©ＯＣＣ</footer>
    </div>
  );
};

export default page;
