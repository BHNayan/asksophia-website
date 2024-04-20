import React from "react";

const Box5 = ({ imglink }) => {
  return (
    <div className="w-full rounded-3xl flex justify-center items-center p-4 ">
      <img src={imglink} alt="images" className="w-full h-full md:w-[70%] md:h-[50%] rounded-3xl shadow-2xl" />
    </div>
  );
};

export default Box5;
