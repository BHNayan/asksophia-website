import React, { useState } from "react";
import Button from "./Button";
import { RiCheckboxCircleLine } from "react-icons/ri";

const PricingBox = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleTabClick = (isMonthly) => {
    setIsMonthly(isMonthly);
  };

  return (
    <div className="w-full p-4 gap-4">
      <div className="flex justify-center items-center p-2 mb-4">
        <Button BTtext="Family and Team Collaboration" />
      </div>
      <div>
        <p className="w-full text-center text-[#18181B] text-[24px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[56px] mb-2">
          Sophia’s Plans, Designed<br></br> for Everyone
        </p>
      </div>
      <div className="p-2 mb-2">
        <p className="text-center text-slate-600 text-[12px] md:text-base font-normal font-['Plus Jakarta Sans']">
          Simple Pricing, No Hidden Fees, Advanced Features for you.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`${
            isMonthly ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTabClick(true)}
        >
          Billed Monthly
        </button>
        <button
          className={`${
            !isMonthly ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-full`}
          onClick={() => handleTabClick(false)}
        >
          Billed Annually
        </button>
      </div>
      {isMonthly ? (
        <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
          <h2 className="text-2xl font-bold mb-4">Monthly Plan</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <img
                  src="./images/pricebox-img1.png"
                  alt="img"
                  className="mb-4"
                />
                <h3 className="text-black text-base font-bold font-['Plus Jakarta Sans'] mb-4">
                  Forever Sophia
                </h3>
                <h1 className="text-black text-2xl md:text-4xl font-bold font-['Mona Sans'] uppercase mb-4">
                  Free
                </h1>
                <div className="w-full text-slate-600 text-sm font-normal font-['Plus Jakarta Sans'] mb-4">
                  Basic access to all workflows with standard features
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                  Current Plan
                </button>
                <h3 className="text-black text-sm font-bold font-['Plus Jakarta Sans'] uppercase mb-4">
                  Features
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Plus Jakarta Sans'] mb-4">
                  Everything in our free plan...
                </p>
                <ul className="text-gray-600 mb-4 ">
                  <li className="flex flex-row  items-center gap-2">
                    <RiCheckboxCircleLine className="bg-[#BEF264] text-black rounded-full justify-items-center" />
                    <p className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] mb-2">
                      Standard access to all features
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <RiCheckboxCircleLine className="bg-[#BEF264] text-black rounded-full" />
                    <p className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] mb-2">
                      Standard access to all features
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <RiCheckboxCircleLine className="bg-[#BEF264] text-black rounded-full" />
                    <p className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] mb-2">
                      Standard access to all features
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Standard</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Premium</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Premium</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-2 p-2">
          <h2 className="text-2xl font-bold mb-4">Yearly Plan</h2>
          <div className="p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Basic</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Standard</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Premium</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">Premium</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingBox;
