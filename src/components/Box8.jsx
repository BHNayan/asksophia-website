import React from "react";
import Button from "./Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Box8 = ({
  H1text,
  ButText,
  PText,
  But2Text,
  But2Link,
  imglink,
  bgimgcode,
  Reviewtext,
  Reviewauthor,
  Reviewposition,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-4  gap-14 md:gap-2 w-full  justify-center items-center">
      <div className="flex justify-center items-center w-full h-full ">
        <div className="flex flex-col gap-4 md:gap-8 justify-start items-start p-2 w-full">
          <Button BTtext={ButText} />
          <div>
            <h1 className="w-full lg:w-[80%] text-zinc-900 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[53px]">
              {H1text}
            </h1>
          </div>
          <div>
            <p className="w-full lg:w-[80%] text-zinc-600 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
              {PText}
            </p>
          </div>
          <Link to={But2Link}>
            <div className="flex flex-row justify-center  items-center px-4 py-2 gap-2 bg-primary rounded-full cursor-pointer">
              <button className="text-white">{But2Text}</button>
              <IoArrowForwardCircleOutline className="text-black bg-white rounded-full h-6 w-6" />
            </div>
          </Link>

          <div className="flex justify-center items-center shadow-lg border p-2  rounded-3xl bg-[#E0E7FF]">
            <div className="flex flex-col justify-around items-start gap-2 p-2">
              <div>
                <img
                  src="./images/quote-img-1.png"
                  alt="images"
                  className="text-[#B3BCD3] h-[30px] w-[30px] p-1"
                />
              </div>
              <div>
                <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                  {Reviewtext}
                </p>
              </div>
              <div className="p-2">
                <Rating name="read-only" value={5} readOnly />
                <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                  {Reviewauthor}
                </p>
                <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                  {Reviewposition}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex h-full  w-full p-4 rounded-xl justify-center items-center `}
        style={{
          backgroundImage: `url('${bgimgcode}')`,
          backgroundSize: "cover", // Optional: adjust to your needs
          backgroundPosition: "center", // Optional: adjust to your needs
        }}
      >
        <img src={imglink} className="h-full w-full md:w-[80%] shadow-xl " />
      </div>
    </div>
  );
};

export default Box8;
