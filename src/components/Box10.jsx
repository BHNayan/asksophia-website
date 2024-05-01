import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Box1 from "./Box1";

const Box10 = ({

  Box1HeadingText,
  Box1PText,
  Box1img,
  Box2HeadingText,
  Box2PText,
  Box2img,
  Box3HeadingText,
  Box3PText,
  Box3img,
  Box3Btlink,
  Box3BtText,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start items-start gap-10 p-2 md:p-4 h-auto">
        <div className="w-full md:w-[65%] flex flex-col justify-start items-start gap-2 h-full ">
          <div className="bg-[#E0E7FF] w-full rounded-2xl">
            <div className="flex flex-col justify-start items-start gap-4 p-4">
              <h1 className="text-zinc-900 text-xl font-bold font-['Plus Jakarta Sans'] capitalize">
                {Box1HeadingText}
              </h1>
              <p className="w-full md:w-[70%] text-slate-700 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
                {Box1PText}
              </p>
            </div>
            <div className="flex justify-end items-end">
              <img src={Box1img} alt="image" />
            </div>
          </div>
          {/*2nd box*/}
          <div className="bg-[#FFEDD5] w-full rounded-2xl">
            <div className="flex flex-col justify-start items-start gap-4 p-4">
              <h1 className="text-zinc-900 text-xl font-bold font-['Plus Jakarta Sans'] capitalize">
                {Box2HeadingText}
              </h1>
              <p className="w-full md:[70%]  text-slate-700 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
                 {Box2PText}
              </p>
            </div>
            <div className="flex justify-end items-end">
              <img src={Box2img} alt="image" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35%] flex flex-col  bg-[#D1FAE5] rounded-2xl gap-10 h-full">
          <div className="flex flex-col justify-start items-start gap-10 p-4">
            <h1 className="text-zinc-900 text-xl font-bold font-['Plus Jakarta Sans'] capitalize">
              {Box3HeadingText}
            </h1>
            <p className="w-full text-slate-700 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
              {Box3PText}
            </p>
            <Link to={Box3Btlink}>
              <div className="w-fit flex flex-row justify-center  items-center px-4 py-2 gap-2 bg-primary rounded-full cursor-pointer">
                <button className="text-white">{Box3BtText}</button>
                <IoArrowForwardCircleOutline className="text-black bg-white rounded-full h-6 w-6" />
              </div>
            </Link>
          </div>
          <div className="flex justify-end items-end">
            <img src={Box3img} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box10;
