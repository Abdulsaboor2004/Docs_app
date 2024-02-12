import React from "react";

const background = () => {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="absolute w-full top-[5%] py-10 flex justify-center text-zinc-600 
        text-[2vmax] font-semibold ">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-700 font-bold text-[10vmax] leading-none tracking-tight ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default background;
