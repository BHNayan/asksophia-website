import React from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";


const HomeBox3 = () => {
  
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 pb-4 gap-4 bg-[#0C041E] rounded-3xl">
      <div className="pt-10">
        <Button BTtext="Family and Team Collaboration" />
      </div>
      <div>
        <p className="w-full text-center text-neutral-50 text-[24px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[56px]">
          Enhancing Teamwork & Family<br></br> Coordination
        </p>
      </div>
      <div className="p-2">
        <img
          src="./images/hm-bg-4.png"
          alt="img"
          className="h-full w-full md:p-2"
        />
      </div>

      <div className="flex justify-center items-center p-4 ">
        <Link to="/workflows">
          <button className="flex flex-row justify-start items-center gap-2 bg-[#7F64C3]  rounded-full px-4 py-2 w-fit">
            <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans']">
              View Workflows
            </h1>
            <BsArrowRight className="text-black h-6 w-6 rounded-full bg-white p-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBox3;
