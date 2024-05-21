import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const Bredcum = ({
  ShowButton,
  ShowTitle,
  ShowBredcum,
  ShowsubBredcum,
  Titletext,
  bredtxt,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`w-full  h-[220px] xl:h-[350px] p-4  mb-2  rounded-3xl flex flex-col justify-center items-center ${
        theme === "light"
          ? " bg-gradient-to-r from-[#3639b4] to-[#191b83] text-white xl:-mt-[20px]"
          : "bg-darkcolor text-white shadow-lg border border-white "
      }`}
    >
      {ShowButton && (
        <div className="flex flex-row justify-center items-center gap-2 border rounded-full bg-white bg-opacity-10 px-4 py-1 w-fit">
          <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans'] text-center">
            Welcome to AskSophia
          </h1>
          <BsArrowRight className="text-white h-6 w-6" />
        </div>
      )}
      {ShowTitle && (
        <div className="p-2 flex justify-center items-center">
          <h1 className="w-full xl:w-[890px] text-center text-white text-[30px] xl:text-[56px] font-bold font-['Mona Sans'] leading-[40px] xl:leading-[69px]">
            {Titletext}
          </h1>
        </div>
      )}

      {ShowBredcum && (
        <div className="p-2">
          <p className="text-white text-base font-medium font-['Plus Jakarta Sans'] text-center p-1">
            <Link to={"/"}>
              <span className="underline text-white p-2 text-[14px] text-center">
                Home
              </span>
            </Link>
            /
            {ShowsubBredcum && (
              <Link to={"/workflows"}>
                <span className="underline text-white text-[14px] p-2">
                  Workflows
                </span>{" "}
                /
              </Link>
            )}
            <span className=" text-white p-2 text-[14px]">{bredtxt}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Bredcum;
