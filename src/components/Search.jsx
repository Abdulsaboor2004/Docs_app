import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const Search = () => {
  // const [searchToggle, setsearchToggle] = useState(false);
  const [query, setquery] = useState("");

  return (
    <>
      {/* <div
        onClick={ () => setsearchToggle((prevState) => !prevState) }
        className={` sm:hidden w-10 h-16 rounded-b-full fixed top-0 right-1/3 bg-purple-500 flex flex-shrink-0 items-center justify-center`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(107, 114, 202), rgba(107, 114, 202, 0.9), rgba(107, 114, 202, 0.9))",
        }}
      >
        <div>
          
        </div>
      </div> */}

      <div

        className={`w-full h-28 flex opacity-70 hover:opacity-100 focus-within:opacity-100 items-center justify-center left-0 top-0 fixed transition-all`}
      >
        <span className="flex ">
          <input
            type="search"
            onChange={(e) => setquery(e.target.value)}
            placeholder="Search"
            className="w-[290px] h-10 bg-slate-300 rounded-l-full m-0 py-2 px-4 text-black outline-none ring-1 focus-within:ring-[3px] ring-[#656BBA] ring-inset placeholder-[#656BBA] font-semibold"
          />
          <button
            className="w-10 h-10 bg-purple-500 rounded-r-full m-0 font-black outline-none shadow-xl ring-purple-500 text-md tracking-wider text-zinc-100/80"
            style={{
              background:
                "linear-gradient(to bottom, rgba(107, 114, 202), rgba(107, 114, 202, 0.9), rgba(107, 114, 202, 0.9))",
            }}
          >
            <LiaSearchSolid size={"33px"} style={{ color: "#e6e7e8" }} />
          </button>
        </span>
      </div>
    </>
  );
};

export default Search;
