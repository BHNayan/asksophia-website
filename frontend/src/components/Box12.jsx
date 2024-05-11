import React from "react";
import Button from "./Button";

const Box12 = ({bgcolor,ptext,bttxt}) => {
  return (
    <div
      className="flex flex-col gap-4 w-full p-2 rounded-2xl"
      style={{
        backgroundColor: bgcolor,
      }}
    >
      <div className="flex justify-start items-center p-4">
        <Button BTtext={bttxt} />
      </div>
      <div className="w-full p-4">
        <p className="w-full md:w-[607px] text-zinc-100 text-sm font-normal font-['Plus Jakarta Sans'] leading-[21px]">
          {ptext}
        </p>
      </div>
    </div>
  );
};

export default Box12;
