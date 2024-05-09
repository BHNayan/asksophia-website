import React from "react";

const Button = ({ BTtext }) => {
  return (

      <div className="border-2 border-primary bg-white px-10 py-2 rounded-full text-[12px] md:text-sm  font-['Plus Jakarta Sans'] uppercase whitespace-nowrap w-fit">
        <p className=" rounded-full">{BTtext}</p>
      </div>
    
  );
};

export default Button;
