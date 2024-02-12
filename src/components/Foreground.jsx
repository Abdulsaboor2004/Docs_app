import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {


  const ref = useRef(null);


  const data = [
    {
      desc: "Docs is making knowledge accessible to all!",
      fileSize: "2.0 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "emerald" },
    },
    {
      desc: "Docs is making knowledge accessible to all!",
      fileSize: "2.0 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload File", tagColor: "blue" },
    },
    {
      desc: "Docs is making knowledge accessible to all!",
      fileSize: "2.0 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "emerald" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
