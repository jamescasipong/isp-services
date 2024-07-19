import { navLinks } from "../../constants";
import React, { useState } from "react";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <section
      id="navbar"
      className=" flex justify-between w-full py-5 items-center"
    >
      <div>
        <h2 className="text-black font-medium text-[24px] sm:px-0">OptiNet</h2>
      </div>

      <div className="flex-row gap-10 sm:flex hidden">
        {navLinks.map((nL) => (
          <ul key={nL.id} className="flex items-center">
            <li
              className={`text-black cursor-pointer font-medium navtext hover:text-orange-500 ${nL.id}`}
            >
              <a href={`${nL.id} `}>{nL.title}</a>
            </li>
          </ul>
        ))}

        <a href="/signup" className="button text-white text-[18px]">
          Sign Up
        </a>
      </div>

      <div className="sm:hidden">
        <ul>
          <i
            className={`${
              !isToggle ? "fa-solid fa-bars" : "fa-solid fa-x"
            } cursor-pointer`}
            onClick={() => setToggle(!isToggle)}
          ></i>
        </ul>
      </div>

      <div
        className={`absolute z-[3px] left-0 right-0 bg-white ${
          !isToggle ? "top-[-600px]" : "top-[70px]"
        } sm:top-[-600px] top-[70px]"
        }  flex-col items-center justify-center rounded-md border-[1px] border-black transition-all duration-300 `}
      >
        {navLinks.map((nL) => (
          <ul key={nL.id} className="flex items-center justify-center">
            <a className="text-center w-full" href={`${nL.id} `}>
              <li
                className={`text-black cursor-pointer font-medium navtext hover:text-orange-500 hover:bg-slate-300 ${nL.id} py-5 w-full`}
              >
                {nL.title}
              </li>
            </a>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Navbar;
