import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Navbar from "./Navbar";
import Trash from "./Trash";
import Editor from "./Editor";

import { Routes, Route } from "react-router-dom";

const CardList = () => {
    const data = [
      {
        index: "1",
        wordCount: "2675 Words",
        date: new Date().toISOString().slice(0, 10),
        fileName: "My First Blog about SEO",
        tag: { isOpen: true, tagTitle: "Open", tagColor: "blue" },
      },
      {
        index: "2",
        wordCount: "526 Words",
        date: new Date().toISOString().slice(0, 10),
        fileName: "How does 'V8 Engine' looks like ?",
        tag: { isOpen: true, tagTitle: "Open", tagColor: "emerald" },
      },
    ];

  return (
    <div
      className="CARD_CONTAINER xs:flex-col sm:flex-row sm:w-[80%] sm:h-[78%] rounded-3xl hover:bg-zinc-700/10 transition-all p-5 border-zinc-900/60 flex flex-wrap xs:gap-5 sm:gap-10 xs:absolute xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 xs:w-[71.2%]
          "
    >
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

const Foreground = () => {
  return (
    <div className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10  px-5 sm:py-24 xs:p-[19rem] ">
      <Routes>
        <Route index element={<CardList />} />
        <Route path="/Trash" element={<Trash />} />
        <Route path="/Create-New-Doc" element={<Editor />} />
      </Routes>

      <Search />
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Foreground;
