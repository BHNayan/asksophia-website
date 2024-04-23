import React from "react";
import Button from "./Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Box1 = ({
  H1text,
  ButText,
  PText,
  But2Text,
  But2Link,
  imglink,
  bgimgcode,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-1 md:p-4 gap-8 md:gap-2 w-full overflow-hidden justify-center items-center">
      <div className="flex justify-center items-center w-full  md:h-[500px]">
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-start p-2 w-full">
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
        </div>
      </div>
      <div
        className={`flex h-full  w-full p-4 rounded-xl justify-center items-center `}
        style={{
          backgroundImage: `url('${ bgimgcode}')`,
          backgroundSize: "cover", // Optional: adjust to your needs
          backgroundPosition: "center", // Optional: adjust to your needs
        }}
      >
        <img src={imglink} className="h-full w-full md:w-[80%]" />
      </div>
    </div>
  );
};

export default Box1;
