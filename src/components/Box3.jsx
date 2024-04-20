import React from "react";

const Box3 = ({ HeadingText, PText, imglink,bgcolorcode }) => {
  return (
    <div className={`p-2 rounded-3xl`} style={{ backgroundColor: bgcolorcode }}>
      <div className="p-2 ">
        <img
          src={imglink}
          alt="image"
          className="h-[60px] w-[60px] rounded-xl bg-white p-2"
        />
      </div>
      <div className="p-2 m-2">
        <h1 className="text-zinc-900 text-xl font-bold font-['Plus Jakarta Sans']">
          {HeadingText}
        </h1>

        <p className=" text-zinc-600 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
          {PText}
        </p>
      </div>
    </div>
  );
};

export default Box3;
