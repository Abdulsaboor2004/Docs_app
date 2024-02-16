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
    <div className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 ml-[7%] px-5 py-24 ">
      {data.map((item, index) => (
        <Card data={item}  />
      ))}
      <Search />
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Foreground;
