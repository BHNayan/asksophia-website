import React from "react";

const Button = ({ BTtext }) => {
  return (

      <div className="gradient-border rounded-full text-sm  font-['Plus Jakarta Sans'] uppercase whitespace-nowrap ">
        <p className=" rounded-full">{BTtext}</p>
      </div>
    
  );
};

export default Button;
