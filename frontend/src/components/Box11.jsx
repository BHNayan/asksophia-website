import React from "react";

const Box11 = ({ imgurl, bgcolor }) => {
  return (
    <div
      className="w-full p-2 flex justify-center items-center rounded-2xl "
      style={{
        backgroundColor: bgcolor,
      }}
    >
      <div className="p-2 rounded-2xl">
        <img src={imgurl} alt="box-img" className="w-full h-full rounded-2xl" />
      </div>
    </div>
  );
};

export default Box11;
