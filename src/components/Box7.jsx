import React from "react";

const Box7 = ({
  H1text,
  PText,
  imglink,
  bgimgcode,
}) => {
  return (
    <div
      className={`flex flex-col gap-10 p-8 rounded-3xl w-full`}
      style={{
        backgroundColor: bgimgcode,
      }}
    >
      <div>
        <h1 className=" text-zinc-900 text-xl font-semibold font-['Mona Sans'] leading-7">
          {H1text}
        </h1>
      </div>
      <div>
        <p className=" text-zinc-600 text-sm md:text-[16px] font-normal font-['Plus Jakarta Sans'] leading-[30px]">
          {PText}
        </p>
      </div>
      <div className="flex justify-center items-end">
        <img src={imglink} alt="images"  />
      </div>
    </div>
  );
};

export default Box7;
