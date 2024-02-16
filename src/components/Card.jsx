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
      className="CARD flex xs:w-44 xs:h-56 sm:flex-shrink-0 relative sm:w-56 sm:h-72 bg-zinc-900/90 rounded-[40px] py-8 text-white px-[22px] overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm font-semibold mt-6 leading-5">{data.desc}</p>

      <div className="CARD-FOOTER absolute left-0 bottom-3  w-full h-16">
        <div className="text-emerald-500 font-bold flex px-6 -py-11 mb-2 items-center justify-between">
          <h5 className="">{data.fileSize}</h5>
          <span className="w-10 rounded-full flex items-center justify-center cursor-pointer">
            {data.close ? (
              <IoMdCloseCircle size="1.5em" color="white" />
            ) : (
              <MdDownload size="1.5em" color="white" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`TAG w-full py-6 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-emerald-600"
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
