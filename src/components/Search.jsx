import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";


const Search = () => {
  // const [searchToggle, setsearchToggle] = useState(false);
  const [query, setquery] = useState("");

  return (
    <>
      <div
        className={` w-full h-28 flex opacity-70 hover:opacity-100 focus-within:opacity-100 items-center justify-center left-0 top-0 fixed transition-all`}
      >
        <span className="flex ">
          <input
            type="search"
            onChange={(e) => setquery(e.target.value)}
            placeholder="Search"
            className="xs:w-[160px] sm:w-[290px] h-10 bg-slate-300 rounded-l-full m-0 py-2 px-4 text-black outline-none ring-1 focus-within:ring-[3px] ring-[#656BBA] ring-inset placeholder-[#656BBA] font-semibold"
          />
          <button className="w-10 h-10 bg-[#656BBA] rounded-r-full m-0 font-black outline-none shadow-xl  text-md tracking-wider text-zinc-100/80">
            <LiaSearchSolid size={"33px"} style={{ color: "#e6e7e8" }} />
          </button>
        </span>
      </div>
    </>
  );
};

export default Search;
