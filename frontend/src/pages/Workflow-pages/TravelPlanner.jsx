import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-55.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Button from "../../components/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Box4 from "../../components/Box4";

const TravelPlanner = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Travel Planner"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="AskSophia’s Travel Planner"
            ButText="Travel Planner"
            PText="Transform the way you travel with AskSophia’s Travel Planner. Beyond just a planning tool, 
            it’s your personal travel consultant, adapting to your preferences, budget, and dreams. 
            With its intelligent suggestions from flights to accommodations, and personalized itineraries, exploring the world has never been more seamless or satisfying. Whether it’s a solo adventure, a family vacation,
             or a business trip, AskSophia ensures every journey is perfectly planned and truly memorable."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>

        <div className="flex flex-col md:flex-row p-4 md:p-8 gap-2 w-full">
          <div className="flex flex-col w-full p-4 gap-4">
            <div className="w-full">
              <Button BTtext="AskSophia’s Travel Planner" />
            </div>
            <div>
              <p className="w-full md:w-[523px] text-zinc-900 text-[32px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[53px]">
                Destinations you can explore with AskSophia
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 p-2">
              <div className="w-full flex flex-col p-2 gap-3 ">
                <img
                  src="./images/box-img-78.png"
                  alt="img"
                  className="w-full h-full rounded-2xl"
                />
                <h1 className="text-black text-lg font-bold font-['Plus Jakarta Sans']">
                  Trip to Amsterdam
                </h1>
                <h2 className="text-slate-500 text-base font-normal font-['Plus Jakarta Sans']">
                  4,678 available trips
                </h2>
                <div className="flex flex-row gap-2 border-b-2 border-b-[#6366F2] pb-2">
                  <h4 className="text-primary text-base font-bold font-['Plus Jakarta Sans']">
                    Checkout Deals & Compare
                  </h4>
                  <MdOutlineArrowOutward className="text-primary h-6 w-6 " />
                </div>
              </div>
              <div className="w-full flex flex-col p-2 gap-3">
                <img
                  src="./images/box-img-79.png"
                  alt="img"
                  className="w-full h-full rounded-2xl"
                />
                <h1 className="text-black text-lg font-bold font-['Plus Jakarta Sans']">
                  Trip to Amsterdam
                </h1>
                <h2 className="text-slate-500 text-base font-normal font-['Plus Jakarta Sans']">
                  4,678 available trips
                </h2>
                <div className="flex flex-row gap-2 border-b-2 border-b-[#6366F2] pb-2">
                  <h4 className="text-primary text-base font-bold font-['Plus Jakarta Sans']">
                    Checkout Deals & Compare
                  </h4>
                  <MdOutlineArrowOutward className="text-primary h-6 w-6 " />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 flex justify-center items-center">
            <img
              src="./images/box-img-77.png"
              alt="img"
              className="md:w-[80%] w-full h-full p-2 rounded-2xl"
            />
          </div>
        </div>

        <div className="p-2 md:p-10">
          <Box1Reverse
            H1text="Explore the World of Podcasts Tailored to Your Interests with AskSophia"
            ButText="Travel Planner"
            PText=" Step into the vast universe of podcasts with AskSophia’s Podcast Discovery. 
            Our AI-driven curation dives deep into your interests, curating a list of podcasts that speak directly to your passions, hobbies, 
            and curiosity, ensuring you’re always a play button away from content that resonates."
            But2Text="Sign Up for Early Access"
            But2Link="/login"
            imglink="./images/box-img-56.png"
            bgimgcode="#F0CCED"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Travel Planner"
            headingText="Start planning your dream trip today!"
            ptext="Embark on your next adventure with ease and inspiration. 
            Let AskSophia’s Travel Planner be your guide to discovering new destinations, 
            creating unforgettable memories, and enjoying stress-free planning."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-82.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default TravelPlanner;
