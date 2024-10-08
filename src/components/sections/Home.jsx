import React from "react";
import Button from "../Button";
import { image } from "../../assets/index.js";
import { heading } from "../../constants/index.js";

const Home = () => {
  return (
    <section
      id="home"
      className="flex w-full justify-center items-center flex-col gap-y-20"
    >
      <div className="flex-col flex flex-1 items-center justify-center w-full py-10 sm:mt-40 mt-10">
        <h1 className="font-bold sm:text-6xl text-[40px] mb-5 sm:text-start text-center ">
          Welcome to OptiNet
        </h1>
        <p className="mb-5 sm:max-w-[650px] sm:text-center text-justify sm:text-[24px] text-[18px] text-third">
          Optimize your online experience with OptiNet's lightning-fast internet
          services.
        </p>
        <Button link="/signup" label="Join Now!"></Button>
      </div>

      <div className="flex w-full flex-row flex-wrap-reverse sm:gap-[20px] gap-0">
        <div className="flex-1 flex justify-center items-start flex-col">
          <h4 className="font-bold sm:text-[40px] text-[28px] md:mt-0 mt-5">
            Latest News and Updates
          </h4>
          <p className="sm:text-[24px] text-[16px] text-third mb-5">
            A subheading for this section, as long or as{" "}
            <br className="md:block hidden " /> Stay informed with the latest
            news about OptiNet’s services. From new features to service
            improvements, get the updates that matter to you.
          </p>
          <Button link="#" label="Check Out"></Button>
        </div>
        <img className="flex-1 w-[100%] h-[100%]" src={image} alt="" />
      </div>

      <div className="flex w-full flex-row flex-wrap sm:gap-[20px] gap-0">
        <img className="flex-1 w-[100%] h-[100%]" src={image} alt="" />
        <div className="flex-1 flex justify-center items-start flex-col md:ml-[100px] ml-0 md:mt-0 mt-5">
          <h4 className="font-bold sm:text-[40px] text-[28px] ">
            Service Enhancements
          </h4>
          <p className="sm:text-[24px] text-[16px] text-third mb-5">
            We are constantly working to enhance our services. Discover the
            latest improvements in speed, reliability, and customer support.
          </p>
          <Button link="#" label="Check Out"></Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 px-5 py-5">
        <div>
          <h2 className="font-semibold text-[40px]">Why Choose OptiNet?</h2>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-x-40 gap-x-12 sm:gap-y-10 gap-y-10 w-full">
          {heading.map((h) => (
            <div key={h.id} className="flex flex-col justify-center gap-3">
              <img
                src={h.logo}
                className="w-[24px] h-[28px] object-contain"
                alt={h.logo}
              />
              <h4 className="font-medium">{h.title}</h4>
              <p className="md:max-w-[450px] w-auto h-auto text-third">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
