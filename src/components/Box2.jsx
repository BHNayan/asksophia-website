import React from "react";

const Box2 = ({img,bgcolor}) => {
  return (
    <div className={`rounded-3xl border-black w-full p-1 justify-center items-center flex`} style={{ backgroundColor: bgcolor }}>
      <img src={img} alt="image" className="h-full w-full md:h-[400px] md:w-[400px]" />
    </div>
  );
};

export default Box2;
