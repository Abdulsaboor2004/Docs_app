import React, { useState } from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      <motion.div
        className="flex w-10 bg-slate-600/70 h-screen fixed right-0 top-0 rounded-l-3xl
        hover:md:w-1/3 hover:sm:w-full focus-within:md:w-1/3 focus-within:sm:w-full
        p-5 items-center justify-center flex-col text-white/70 "
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0.6,
          translateY: isHovered ? 0 : 20,
        
        }}
        transition={{ duration: 0.5 }}
        
        
      >
        <div className={`${isHovered ? "block" : "hidden"}`}>
          <div className="USER's-INFORMATION  w-full h-1/3 flex flex-row items-center justify-center space-x-4 ">
            <img
              src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User's Image"
              className="w-20 h-20 object-cover rounded-full"
            />
            <h5 className="text-[1.7vmax] font-black leading-7 tracking-tight">
              Taylor Swift
              <span className="font-semibold tracking-tighter ">
                @taylorswift190
              </span>
            </h5>
          </div>

          <div className="USER's INFORMATION w-full h-1/3 flex flex-col space-y-4  justify-center ">
            <IoMail />
            <p>p2bHn@example.com</p>
            <span className="border opacity-15"></span>
            <RiLockPasswordFill />
            <p>***************</p>
          </div>

          <div className="MY SOCIALS w-full h-1/3 flex items-center justify-between p-x-4 py-12 space-x-4 space-y-2  flex-col ">
            <h3 className="text-[1.4vmax] font-semibold leading-5 tracking-tighter text-wrap">
              Hey, I'm Saboor & It's Built By Me!
            </h3>

            <div className="flex text-center  items-center justify-between space-y-5 flex-col">
              <h4 className="text-[1.2vmax] font-semibold leading-5 tracking-tighter text-wrap ">
                Talk to me
              </h4>
              <div className="flex flex-row space-x-4 cursor-pointer ">
                <FaXTwitter size="3vmax" />
                <GrLinkedin size="3vmax" />
                <FaGithub size="3vmax" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
