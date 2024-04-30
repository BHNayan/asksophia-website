import React from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Box9 from "./Box9";

const HomeBox2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl p-4 gap-4 w-full overflow-x-hidden">
      <div className="w-full p-4 flex flex-col gap-8">
        <div>
          <Button BTtext="Predefined Profiles" />
        </div>

        <p className="w-full font-['Mona Sans'] font-semibold text-zinc-900 text-[40px] tracking-[-1.20px] leading-[53px]">
          Discover Your Digital Persona with AskSophia
        </p>

        <p className="w-[413px] text-zinc-600 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
          With Sophia, schedule family events, share tasks, or collaborate on
          projects seamlessly. Sophia’s collaborative tools are designed to keep
          teams and families in sync
        </p>
        <button className="flex flex-row justify-start items-center gap-2 bg-primary rounded-full px-4 py-2 w-fit">
          <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans']">
            Get Started
          </h1>
          <BsArrowRight className="text-black h-6 w-6 rounded-full bg-white p-1" />
        </button>
      </div>
      <div>
        <Box9
          heading="The Academic"
          imgSrc="./images/box9-img1.png"
          paragraph="Sophia aids in your quest for knowledge, from academic resources to personal development."
          backgroundcolor="#FEE2E2"
        />
      </div>
      <div>
        <Box9
          heading="The Social Butterfly"
          imgSrc="./images/box9-img2.png"
          paragraph="Stay connected and updated in your social circles with Sophia’s curated social media insights."
          backgroundcolor="#D1FAE5"
        />
      </div>
      <div>
        <Box9
          heading="The Trendsetter"
          imgSrc="./images/box9-img3.png"
          paragraph="For those who love staying ahead, Sophia brings the latest in tech, fashion, and lifestyle"
          backgroundcolor="#E0E7FF"
        />
      </div>
      <div>
        <Box9
          heading="The Homebody"
          imgSrc="./images/box9-img4.png"
          paragraph="Sophia makes your home life more enjoyable, from cozy reading suggestions to relaxation tips"
          backgroundcolor="#F3E8FF"
        />
      </div>
      <div>
        <Box9
          heading="The Explorer"
          imgSrc="./images/box9-img5.png"
          paragraph="Sophia is your travel companion, helping you discover and plan new adventures"
          backgroundcolor="#FEF3C7"
        />
      </div>

    </div>
  );
};

export default HomeBox2;
