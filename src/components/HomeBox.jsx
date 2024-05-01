import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
const listworkflows = [
  {
    id: "1",
    name: "Daily News Digest",
    description: "Start your day with news tailored to your interests",
    image: "../images/News.png",
    wlink: "/daily-news-digest",
  },
  {
    id: "2",
    name: "Weather Update",
    description: "Get weather forecasts that help you plan your day better",
    image: "../images/weather.png",
    wlink: "/weather-update",
  },
  {
    id: "3",
    name: "Search Assistant",
    description: "Sophia simplifies and personalizes your web searches",
    image: "../images/search.png",
    wlink: "/search-assistant",
  },
  {
    id: "4",
    name: "Social Media Recap",
    description: "Start your day with news tailored to your interests",
    image: "../images/social.png",
    wlink: "/social-media-recap",
  },
  {
    id: "5",
    name: "Online Shopping",
    description: "Sophia brings you shopping  based on your preferences",
    image: "../images/online.png",
    wlink: "/online-shopping",
  },
  {
    id: "6",
    name: "Recipe Finder",
    description:
      "Explore culinary ideas suited to your taste and dietary needs.",
    image: "../images/recepi.png",
    wlink: "/recipe-finder",
  },
  {
    id: "7",
    name: "Fitness Routine",
    description: "Start your day with news tailored to your interests",
    image: "../images/fitness.png",
    wlink: "/fitness-routine",
  },
  {
    id: "8",
    name: "Local Events",
    description: "Start your day with news tailored to your interests",
    image: "../images/local.png",
    wlink: "/local-events",
  },
  {
    id: "9",
    name: "Recommended Movies",
    description: "Start your day with news tailored to your interests",
    image: "../images/movies.png",
    wlink: "/recommended-movies",
  },
  {
    id: "10",
    name: "Recommended Books",
    description: "Start your day with news tailored to your interests",
    image: "../images/book.png",
    wlink: "/recommended-books",
  },
  {
    id: "11",
    name: "Podcast Discovery",
    description: "Start your day with news tailored to your interests",
    image: "../images/podcast.png",
    wlink: "/podcast-discovery",
  },
  {
    id: "12",
    name: "Music Discovery",
    description:
      "Explore culinary ideas suited to your taste and dietary needs",
    image: "../images/music.png",
    wlink: "/music-discovery",
  },

  {
    id: "13",
    name: "Game Suggestions",
    description: "Start your day with news tailored to your interests",
    image: "../images/game.png",
    wlink: "/game-suggestions",
  },
  {
    id: "14",
    name: "To Do List",
    description: "Start your day with news tailored to your interests",
    image: "../images/todo.png",
    wlink: "/to-do-list",
  },
  {
    id: "15",
    name: "Language Learning",
    description: "Start your day with news tailored to your interests",
    image: "../images/language.png",
    wlink: "/language-learning",
  },
  {
    id: "16",
    name: "Travel Planning",
    description: "Start your day with news tailored to your interests",
    image: "../images/travel.png",
    wlink: "/travel-planning",
  },
  {
    id: "17",
    name: "Fact Of The Day",
    description: "Start your day with news tailored to your interests",
    image: "../images/fact.png",
    wlink: "/fact-of-the-day",
  },
  {
    id: "18",
    name: "Money Saving Tips",
    description: "Start your day with news tailored to your interests",
    image: "../images/money.png",
    wlink: "/money-saving-tips",
  },
  {
    id: "19",
    name: "Relaxation Techniques",
    description:
      "Explore culinary ideas suited to your taste and dietary needs.",
    image: "../images/relax.png",
    wlink: "/relaxation-techniques",
  },
  {
    id: "20",
    name: "Tech News",
    description: "Start your day with news tailored to your interests",
    image: "../images/tech.png",
    wlink: "/tech-news",
  },
];

const HomeBox = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % listworkflows.length);
    }, 2000); // Change the duration as needed

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="w-full p-4 bg-gradient-to-r from-[#3639b4] to-[#191b83] mb-2 xl:-mt-[20px]  flex flex-col justify-center items-center gap-2 md:gap-4">
        <div className="flex flex-row justify-center items-center gap-2 border rounded-full bg-white bg-opacity-10 px-4 py-1">
          <button className="text-white text-base font-bold font-['Plus Jakarta Sans'] rounded-full px-3 py-2 bg-gradient-to-r from-sky-400 to-sky-600  justify-center items-center gap-2.5 ">
            AI Guide
          </button>
          <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans']">
            Welcome to AskSophia
          </h1>
          <BsArrowRight className="text-white h-6 w-6" />
        </div>
        <div className="w-full  flex-col justify-start items-center gap-[9px] inline-flex">
          <div className="w-full  text-center">
            <span className="text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[40px] xl:text-[45px] font-bold font-['Mona Sans'] leading-[24px] md:leading-[35px] lg:leading-[45px] xl:leading-[70px]">
              Sophia, Your AI Guide, for a<br></br>
            </span>
            <span className="text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[40px] xl:text-[45px] font-semibold italic font-['Canela Trial'] leading-[24px] md:leading-[35px] lg:leading-[45px] xl:leading-[70px] tracking-widest">
              Personalized
            </span>
            <span className="text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[40px] xl:text-[45px] font-bold font-['Mona Sans'] leading-[24px] md:leading-[35px] lg:leading-[45px] xl:leading-[70px]">
              {" "}
            </span>
            <span className="text-white text-[20px] sm:text-[25px] md:text-[40px] lg:text-[40px] xl:text-[45px] font-bold font-['Mona Sans'] leading-[24px] md:leading-[35px] lg:leading-[45px] xl:leading-[70px]">
              Online Journey
            </span>
          </div>
        </div>
        <div className="w-full text-center p-2">
          <span className="text-white text-[12px] md:text-base font-normal font-['Plus Jakarta Sans']">
            Sophia, Your AI Guide, for a{" "}
          </span>
          <span className="text-white text-[12px] md:text-base font-normal font-['Plus Jakarta Sans'] tracking-wide">
            Personalized
          </span>
          <span className="text-white text-[12px] md:text-base font-normal font-['Plus Jakarta Sans']">
            {" "}
          </span>
          <span className="text-white text-[12px] md:text-base font-normal font-['Plus Jakarta Sans']">
            Online Journey
          </span>
        </div>
        <div className="w-full flex justify-center items-center p-2">
          <button className="flex flex-row justify-center items-center gap-2  rounded-full bg-primary px-4 py-2">
            <h1 className="text-white text-base font-medium font-['Plus Jakarta Sans']">
              Get Started
            </h1>
            <BsArrowRight className="text-black h-6 w-6 rounded-full bg-white p-1" />
          </button>
        </div>
        <div className="w-full  flex justify-center items-center">
          <img src="./images/bg2-img.png" className="w-full md:w-[80%] " />
        </div>
      </div>

      <div className="w-full bg-black p-2 rounded-2xl gap-6 justify-between items-center flex overflow-hidden -mt-[25px]">
        
        {listworkflows.slice(startIndex, startIndex + 8).map((workflow) => (      
          <button
            key={workflow.id}
            className="p-2 gap-2 text-orange-200 text-[14px] md:text-[20px] font-medium font-['Mona Sans'] w-full whitespace-nowrap inline-flex items-center"
          >
            <img src="./images/Star3-img.png" className="bg-black"/>
            {workflow.name}
          </button>
          
        ))}
      </div>

    </>
  );
};

export default HomeBox;
