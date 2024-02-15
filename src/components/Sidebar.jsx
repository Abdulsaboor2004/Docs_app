import React, { useState } from "react";
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
        className=" flex w-14 bg-slate-600/70 h-screen fixed right-0 top-0 rounded-l-3xl
        hover:md:w-1/3 hover:sm:w-full focus-within:md:w-1/3 focus-within:sm:w-full
        p-5 items-center justify-center flex-col text-white/70 transition-all"
        style={{
          background:
            "linear-gradient(to bottom, rgba(107, 114, 202, 0.9), rgba(107, 114, 202, 0.5), rgba(107, 114, 202, 0.2))",
        }}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        initial={{ opacity: 0, translateY: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0.8,
          translateY: isHovered ? 0 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className={`${isHovered ? "block" : "hidden"}`}>
          <div className="USER's-INFORMATION  w-full h-1/3 flex flex-row items-center justify-center space-x-4 ">
            <motion.img
              src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User's Image"
              className="w-20 h-20 object-cover rounded-full"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              whileDrag={{ scale: 1.2 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
            />
            <h5 className="text-[1.7vmax] font-black leading-7 tracking-tight">
              Taylor Swift
              <div className="font-semibold text-[1.3vmax] tracking-tighter ">
                @taylorswift190
              </div>
            </h5>
          </div>

          <div className="USER's INFORMATION w-full h-1/3 flex flex-col space-y-4  justify-center ">
            <IoMail />
            <p>p2bHn@example.com</p>
            <span className="border opacity-15"></span>
            <RiLockPasswordFill />
            <p>***************</p>
          </div>
          <div className="w-full h-1/6 flex items-center justify-center">

          <button className=" w-1/3 rounded-full p-2 border font-bold tracking-wide"> Logout </button>
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
                <a target="blank" href="https://twitter.com/AbdulSaboor2004">
                  <FaXTwitter size="3vmax" />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/abdulsaboor2004/"
                >
                  <GrLinkedin size="3vmax" />
                </a>
                <a target="blank" href="https://github.com/Abdulsaboor2004">
                  <FaGithub size="3vmax" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.img
          animate={{
            y: [0, -2, 0],
            transition: { damping: Infinity, duration: 2, repeat: Infinity },
          }}
          className={`absolute top-10 tranlate-x-[-50%] translate-y-[-50%] object-cover w-12 h-12 border rounded-full ${
            isHovered ? "hidden" : "block"
          } `}
          src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User's Image"
        />
      </motion.div>
    </>
  );
};

export default Sidebar;
