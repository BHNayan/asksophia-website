import React from "react";
import Button from "./Button";

const Box6 = ({ H1text, ButText, PText, imglink, bgimgcode }) => {
  return (
    <div
      className={`flex flex-col  p-1 md:p-12 gap-8 md:gap-2 w-full overflow-x-hidden justify-center items-center rounded-3xl`}
      style={{
       backgroundColor: bgimgcode
      }}
    >
      <div className="flex justify-center items-center w-full ">
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-start p-2 w-full">
          <div className="flex flex-row justify-between gap-2 w-full">
            <h1 className="w-[60%] text-zinc-900 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[53px]">
              {H1text}
            </h1>
            <div className="w-[30%] h-full">
            <Button BTtext={ButText} />
            </div>
          </div>
          <div>
            <p className="w-full lg:w-[80%] text-zinc-600 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
              {PText}
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={imglink} className="h-full w-full" />
      </div>
    </div>
  );
};

export default Box6;
