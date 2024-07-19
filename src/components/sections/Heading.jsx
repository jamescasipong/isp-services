import React from "react";
import Button from "../Button.jsx";

const handleClick = () => {
  window.open("https://github.com/jamescasipong/isp-services", "_blank");
};

const Heading = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-20 gap-5">
      <h2 className="font-semibold sm:text-[40px] text-[30px]">Notes</h2>
      <p className="mb-3 text-justify max-w-[600px] h-auto leading-7 text-third sm:text-[16px] text-[14px] sm:px-0 px-3">
        James here, I'm still working on developing the website, OptiNet which
        is a made-up ISP website for practice purposes. I've used the same
        materials and labels from a free template on Figma for every division.
        However, I'll start working on that, as well as the server and database
        once I've finished developing the entire front-end of the website. This
        will be developed using NodeJS for server management, FireBase for
        database management, ViteJS & Tailwind CSS for front-end. If you're
        wondering what iNTFibeR means, it's just some random title I've come up
        with, lmao.. You might want to contribute by giving suggestions or make
        some changes on the website, consider pulling a request on GitHub.
      </p>
      <Button link={handleClick} label="Check out on GitHub"></Button>
    </div>
  );
};

export default Heading;
