import { navLinks } from "../../constants";
import React, { useState, useContext, useEffect } from "react";
import { user, arrowdown, bell } from "../../assets/index";

const NavbarHome = ({ userz }) => {
  const [isToggle, setToggle] = useState(false);

  const SetToggle = () => {
    setToggle(!isToggle);
  };

  async function myDisplay(name) {
    let myPromise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(name);
      }, 500);
    });
    setToggle(!isToggle);
    let url = await myPromise; // Await the resolution of the promise
    window.location.href = url;
  }

  return (
    <section
      id="navbarhome"
      className=" flex justify-between w-full py-5 items-center"
    >
      <div className="flex">
        <h2 className="text-black font-medium text-[24px] sm:px-0">OptiNet</h2>
      </div>

      <div className="gap-2 sm:flex hidden">
        <img
          className=" flex items-center justify-center"
          src={bell}
          alt="bell"
        />
        <img
          className="w-[35px] h-[35px] object-contain"
          src={user}
          alt="user"
        />
        <p className="items-center justify-center flex">{userz}</p>
        <img
          className="cursor-pointer"
          src={arrowdown}
          alt="arrow-down"
          onClick={SetToggle}
        />
      </div>

      <div className="sm:hidden">
        <ul>
          <i
            className={`${
              !isToggle ? "fa-solid fa-bars" : "fa-solid fa-x"
            } cursor-pointer`}
            onClick={SetToggle}
          ></i>
        </ul>
      </div>

      <div
        id="navmain"
        className={`absolute z-[3px] left-0 right-0 bg-white ${
          !isToggle ? "top-[-600px]" : "top-[70px]"
        } sm:top-[-600px] top-[70px]"
        }  flex-col items-center justify-center rounded-md border-[1px] border-black transition-all duration-300 `}
      >
        {navLinks.map((nL) => (
          <ul key={nL.id} className="flex items-center justify-center">
            <a
              className="text-center w-full"
              onClick={() => {
                myDisplay(nL.id);
              }}
            >
              <li
                className={`text-black cursor-pointer font-medium navtext hover:text-orange-500 hover:bg-slate-300 ${nL.id} py-5 w-full`}
              >
                {nL.title}
              </li>
            </a>
          </ul>
        ))}

        <div className="flex items-center justify-center">
          <div className="text-center w-full">
            <div
              onClick={() => {
                myDisplay("/signIn");
              }}
            >
              <p className="text-black cursor-pointer font-medium navtext hover:text-orange-500 hover:bg-slate-300 py-5 w-full">
                Sign In
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="text-center w-full">
            <div
              onClick={() => {
                myDisplay("/signup");
              }}
            >
              <p className="text-black cursor-pointer font-medium navtext hover:text-orange-500 hover:bg-slate-300 py-5 w-full">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarHome;
