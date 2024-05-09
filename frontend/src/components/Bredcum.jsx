import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Bredcum = ({ ShowButton, ShowTitle, ShowBredcum, Titletext }) => {
  return (
    <div className="w-full  h-[220px] xl:h-[350px] p-4 bg-gradient-to-r from-[#3639b4] to-[#191b83] mb-2 xl:-mt-[20px] rounded-3xl flex flex-col justify-center items-center">
      {ShowButton && (
        <div className="flex flex-row justify-center items-center gap-2 border rounded-full bg-white bg-opacity-10 px-4 py-1">
          <button className="text-white text-base font-bold font-['Plus Jakarta Sans'] rounded-full px-3 py-2 bg-gradient-to-r from-sky-400 to-sky-600  justify-center items-center gap-2.5 ">
            AI Guide
          </button>
          <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans']">
            Welcome to AskSophia
          </h1>
          <BsArrowRight className="text-white h-6 w-6" />
        </div>
      )}
      {ShowTitle && (
        <div className="p-2">
          <h1 className="w-full xl:w-[890px] text-center text-white text-[30px] xl:text-[56px] font-bold font-['Mona Sans'] leading-[40px] xl:leading-[69px]">
            {Titletext}
          </h1>
        </div>
      )}

      {ShowBredcum && (
        <div className="p-2">
          <p className="text-white text-base font-medium font-['Plus Jakarta Sans']">
            Home / Global Features
          </p>
        </div>
      )}
    </div>
  );
};

export default Bredcum;
