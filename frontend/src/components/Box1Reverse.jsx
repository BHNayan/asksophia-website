import React from "react";
import Button from "./Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useModal } from "../Context/ModalProvider";

const Box1Reverse = ({
  H1text,
  ButText,
  PText,
  But2Text,
  But2Link,
  imglink,
  bgimgcode,
}) => {
  const { openModal } = useModal();
  return (
    <div className="flex flex-col md:flex-row-reverse p-2  gap-8 md:gap-2 w-full overflow-hidden justify-center items-center">
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
         
            <div className="flex flex-row justify-center  items-center px-4 py-2 gap-2 bg-primary rounded-full cursor-pointer">
              <button className="text-white" onClick={openModal}>{But2Text}</button>
              <IoArrowForwardCircleOutline className="text-black bg-white rounded-full h-6 w-6" />
            </div>
         
        </div>
      </div>
      <div className="flex h-full  w-full p-2 rounded-xl justify-center items-center">
        <img
          src={imglink}
          className={`h-full w-full md:w-[70%] rounded-3xl p-4 `}
          style={{
            backgroundColor: bgimgcode,
          }}
        />
      </div>
    </div>
  );
};

export default Box1Reverse;
