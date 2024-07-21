import React from "react";
import { Switch } from "antd";
import { plans } from "../../constants";
import Button from "../Button";
import { Divider, Steps } from "antd";

const Header = () => {
  return (
    <div className="w-full justify-center items-center flex flex-1 flex-col">
      <h1 className="font-bold sm:text-6xl text-[40px] mb-5 sm:text-start text-center sm:mt-40 mt-10">
        OptiNet's features
      </h1>
      <p className="description mb-5 sm:max-w-[700px] sm:text-center text-justify sm:text-[24px] text-[18px] text-third">
        Discover OptiNet: Where connectivity meets convenience. Enjoy our
        customized internet plans designed to enhance your digital lifestyle.
      </p>
      <div className="w-full flex flex-wrap md:gap-10 gap-3 justify-center items-center my-10 md:p-10 p-0">
        {plans.map((p) => (
          <div
            className="shadow-2xl md:p-10 p-7 rounded-md flex flex-col w-full flex-1 lg:max-h-[600px] max-h-auto  justify-center"
            key={p.id}
          >
            <p>{p.name}</p>
            <div className="flex items-center justify-start">
              <h1 className="font-semibold text-[40px]">{p.prices}</h1>
              <p className="px-[5px] mt-2 font-medium top-0">{p.deadline}</p>
            </div>

            <ul className="list-disc px-9 my-4">
              <li className="md:text-[16px] text-[13px]">{p.f1}</li>
              <li className="md:text-[16px] text-[13px]">{p.f2}</li>
              <li className="md:text-[16px] text-[13px]">{p.f3}</li>
              <li className="md:text-[16px] text-[13px]">{p.f4}</li>
            </ul>
            <Button className="w-full flex" link="" label="Apply Now!"></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
