import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Navbar from "./Navbar";

const Foreground = () => {
  const data = [
    {
      desc: "Docs is making knowledge accessible to all!",
      fileSize: "2.0 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "emerald" },
    },
    {
      desc: "Docs is making knowledge accessible to all!",
      fileSize: "2.0 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload File", tagColor: "blue" },
    },
  ];

  return (
    <div className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10  px-5 sm:py-24 xs:p-[19rem] ">
      <div
        className="CARD_CONTAINER xs:flex-col sm:flex-row sm:w-[80%] sm:h-[78%] rounded-3xl hover:bg-zinc-700/10 transition-all p-5 border-zinc-900/60 flex flex-wrap xs:gap-5 sm:gap-10 xs:absolute xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 xs:w-[71.2%]
        "
      >
        {data.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
      <Search />
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Foreground;
