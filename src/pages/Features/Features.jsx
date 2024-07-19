import React from "react";
import Header from "../../components/FeatureSections/Header";
import Footer from "../../components/sections/Footer";
import Navbar from "../../components/sections/Navbar";

const Features = () => {
  return (
    <div id="features" className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-center md:px-4 px-4 w-full">
        <div className="md:fixed initial flex  justify-center items-center bg-primary sm:shadow-sm drop-shadow-none w-full h-[85px] top-0">
          <div className="xl:max-w-[1280px] w-full md:fixed initial top-0  px-4">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full md:px-4 px-8">
            <Header />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-star">
        <div className="xl:max-w-[1280px] w-full  md:px-4 px-4">
          <Footer borderT="border-t-2"></Footer>
        </div>
      </div>
    </div>
  );
};

export default Features;
