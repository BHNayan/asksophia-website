import React from "react";
import Button from "./Button";


const Box6Reverse = ({ H1text, ButText, PText, imglink, bgimgcode }) => {
    return (
        <div
          className={`flex flex-col  w-full overflow-x-hidden rounded-3xl`}
          style={{
           backgroundColor: bgimgcode
          }}
        >
          <div className="flex justify-center items-center w-full gap-8 ">
            <div className="flex flex-col gap-4 md:gap-8 justify-center items-start p-8 w-full">
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
          <div className="flex justify-start items-start">
            <img src={imglink} className="flex justify-start items-start pt-8 pb-0 pl-0 pr-8" />
          </div>
        </div>
      );
}

export default Box6Reverse