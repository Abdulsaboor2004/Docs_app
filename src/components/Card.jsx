import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      className="CARD flex xs:w-44 xs:h-56 sm:flex-shrink-0 relative sm:w-56 sm:h-72 bg-zinc-900/90 rounded-[40px] py-8 text-white px-[22px] overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <span>📝</span>
      <p className="text-sm font-semibold mt-6 leading-5">{data.fileName}</p>

      <div className="CARD-FOOTER absolute left-0 bottom-3  w-full h-16">
        <div className="text-indigo-100/95 font-bold flex px-6 -py-11 mb-2 items-center justify-between">
          <h5 className="">{data.index}</h5>
          <span className=" flex items-center justify-center cursor-pointer">
            {data.date}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`TAG w-full py-6 ${
              data.tag.tagColor === "blue" ? "bg-sky-600" : "bg-indigo-600"
            } cursor-pointer `}
          >
            <h3 className="flex items-center justify-center text-xs leading-none tracking-tight -mt-1.5">
              {data.tag.tagTitle}
            </h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
