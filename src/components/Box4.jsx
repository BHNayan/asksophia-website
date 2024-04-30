import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Box4 = ({ smheadingText, headingText, ptext, bttext, imglink }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 md:gap-4 rounded-3xl`}
      style={{
        backgroundImage: `url('images/box1-bg-img.png')`,
        backgroundSize: "cover", // Optional: adjust to your needs
        backgroundPosition: "center", // Optional: adjust to your needs
      }}
    >
      <div className="p-4 w-full flex flex-col justify-center">
        <div className="p-2">
          <h3 className="text-white text-base font-bold font-['Plus Jakarta Sans']">
            {smheadingText}
          </h3>
        </div>
        <div className="p-2">
          <h1 className=" text-white w-full text-[35px] font-bold font-['Mona Sans'] leading-[40px]">
            {headingText}
          </h1>
        </div>
        <div className="p-2">
          <p className=" text-slate-200 text-base font-normal font-['Plus Jakarta Sans'] leading-relaxed">
            {ptext}
          </p>
        </div>

        <Link to="/">
          <div className="p-2 w-fit">
            <div className="flex flex-row justify-start whitespace-nowrap items-center px-8 py-2 gap-2 bg-white rounded-full cursor-pointer">
              <button className="text-black">{bttext}</button>
              <IoArrowForwardCircleOutline className="text-black bg-white rounded-full h-6 w-6" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-end items-end w-full">
        <img src={imglink} alt="image" className="h-full w-full md:w-[80%] object-cover" />
      </div>
    </div>
  );
};

export default Box4;
