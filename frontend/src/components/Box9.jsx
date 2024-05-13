import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Box9 = ({ heading, imgSrc, paragraph, backgroundcolor }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col w-full p-2 gap-2">
      <div
        className="flex justify-center items-center rounded-3xl p-2 w-full "
        style={{
          backgroundColor: backgroundcolor,
        }}
      >
        <img
          src={imgSrc}
          alt="Image"
          className="rounded-2xl h-full w-full md:w-[70%] p-2 md:h-[400px]"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2
          className={`text-xl font-bold font-['Plus Jakarta Sans'] ${
            theme === "light" ? "text-zinc-900 " : "text-white "
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-base font-normal font-['Plus Jakarta Sans'] leading-[23px] ${
            theme === "light" ? "text-zinc-600 " : "text-white "
          }`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Box9;
