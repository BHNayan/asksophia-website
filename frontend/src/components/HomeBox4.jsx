import React from "react";
import Button from "./Button";


const HomeBox4 = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center rounded-3xl p-4 pb-1 gap-4 bg-[#20183C]">
          <div className="p-2">
            <Button BTtext="Dashboard" />
          </div>
          <div>
            <p className="w-full text-center text-neutral-50 text-[20px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[56px]">
            Sophia’s Global Features: Elevating <br></br>Your Digital Experience
            </p>
          </div>
          <div>
            <img
              src="./images/box10-img4.png"
              alt="img"
              className="h-full w-full"
            />
          </div>
    
        </div>
      );
}

export default HomeBox4