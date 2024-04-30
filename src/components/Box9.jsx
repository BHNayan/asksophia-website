import React from "react";

const Box9 = ({ heading, imgSrc, paragraph, backgroundcolor }) => {
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      <div
        className="flex justify-center items-center rounded-3xl p-2 w-full "
        style={{
          backgroundColor: backgroundcolor,
        }}
      >
        <img src={imgSrc} alt="Image" className="rounded-2xl  md:h-[400px] md:w-[60%] w-full " />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="text-zinc-900 text-xl font-bold font-['Plus Jakarta Sans']">
          {heading}
        </h2>
        <p className="text-zinc-600 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
          {paragraph}
        </p>
      </div>

    </div>
  );
};

export default Box9;
