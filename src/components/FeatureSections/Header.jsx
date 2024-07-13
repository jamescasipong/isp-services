import React from "react";
import { Switch } from "antd";
import { plans } from "../../constants";
import Button from "../Button";

const Header = () => {
  return (
    <div className="w-full justify-center items-center flex flex-1 flex-col">
      <h1 className="font-bold sm:text-6xl text-[40px] mb-5 sm:text-start text-center sm:mt-40 mt-10">
        OptiNet's features
      </h1>

      <p className="mb-5 sm:max-w-[650px] sm:text-center text-justify sm:text-[24px] text-[18px] text-third">
        And a subheading describing your pricing plans, too
      </p>

      <div className="w-full flex ss:flex-row flex-col sm:gap-10 gap-3 justify-center items-center my-10 md:p-10 p-0">
        {plans.map((p) => (
          <div
            className="shadow-2xl md:p-10 p-7 rounded-md flex flex-col w-full"
            key={p.id}
          >
            <p>{p.name}</p>
            <div className="flex items-center justify-start">
              <h1 className="font-semibold text-[40px]">{p.prices}</h1>
              <p className="px-[5px] mt-2 font-medium top-0">{p.deadline}</p>
            </div>

            <ul className="list-disc px-9 my-4">
              <li>{p.f1}</li>
              <li>{p.f2}</li>
              <li>{p.f3}</li>
              <li>{p.f4}</li>
            </ul>
            <Button className="w-full" link="" label="Apply Now!"></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;