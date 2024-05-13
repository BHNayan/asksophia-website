import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

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
    description: "Stay up-to-date with your social networks, minus the clutter",
    image: "../images/social.png",
    wlink: "/social-media-recap",
  },
  {
    id: "5",
    name: "Online Shopping",
    description:
      "Sophia brings you shopping recommendations based on your preferences",
    image: "../images/online.png",
    wlink: "/online-shopping",
  },
  {
    id: "6",
    name: "Recipe Finder",
    description:
      "Explore culinary ideas suited to your taste and dietary needs",
    image: "../images/recepi.png",
    wlink: "/recipe-finder",
  },
  {
    id: "7",
    name: "Fitness Routine",
    description:
      "Get custom workout plans that suit your fitness level and goals",
    image: "../images/fitness.png",
    wlink: "/fitness-routine",
  },
  {
    id: "8",
    name: "Local Events",
    description: "Discover events and activities happening around you",
    image: "../images/local.png",
    wlink: "/local-events",
  },
  {
    id: "9",
    name: "Recommended Movies",
    description: "Sophia suggests movies you’re sure to love",
    image: "../images/movies.png",
    wlink: "/recommended-movies",
  },
  {
    id: "10",
    name: "Recommended Books",
    description: "Find your next great read with personalized book suggestions",
    image: "../images/book.png",
    wlink: "/recommended-books",
  },
  {
    id: "11",
    name: "Podcast Discovery",
    description: "Explore podcasts that align with your interests",
    image: "../images/podcast.png",
    wlink: "/podcast-discovery",
  },
  {
    id: "12",
    name: "Music Discovery",
    description: "Discover music tailored to your taste",
    image: "../images/music.png",
    wlink: "/music-discovery",
  },

  {
    id: "13",
    name: "Game Suggestions",
    description:
      "Get recommendations for games based on your preferred genres and platforms",
    image: "../images/game.png",
    wlink: "/game-suggestions",
  },
  {
    id: "14",
    name: "To Do List",
    description: "Organize your tasks efficiently with Sophia’s help",
    image: "../images/todo.png",
    wlink: "/to-do-list",
  },
  {
    id: "15",
    name: "Language Learning",
    description:
      "Sophia assists you in learning new languages at your own pace",
    image: "../images/language.png",
    wlink: "/language-learning",
  },
  {
    id: "16",
    name: "Travel Planning",
    description:
      "Plan your travels effortlessly with Sophia’s comprehensive travel assistance",
    image: "../images/travel.png",
    wlink: "/travel-planning",
  },
  {
    id: "17",
    name: "Fact Of The Day",
    description: "Learn something new every day with interesting facts",
    image: "../images/fact.png",
    wlink: "/fact-of-the-day",
  },
  {
    id: "18",
    name: "Money Saving Tips",
    description: "Sophia offers practical tips to help manage your finances",
    image: "../images/money.png",
    wlink: "/money-saving-tips",
  },
  {
    id: "19",
    name: "Relaxation Techniques",
    description:
      "Find relaxation techniques for stress relief and better well-being",
    image: "../images/relax.png",
    wlink: "/relaxation-techniques",
  },
  {
    id: "20",
    name: "Tech News",
    description: "Stay updated with the latest in technology.",
    image: "../images/tech.png",
    wlink: "/tech-news",
  },
];

const WorkflowList = (props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col  items-center gap-2 p-2  mt-10 mb-10 ">
      <div className="flex justify-center items-center rounded-full m-2">
        <Button BTtext="SOPHIA’S 20 WORKFLOWS" />
      </div>
      <h1
        className={`w-full md:w-[613px] text-center text-[24px] md:text-[44px] font-semibold font-Mona-Sans leading-normal md:leading-[56px] capitalize ${
          theme === "light" ? "text-zinc-900 " : "text-white "
        }`}
      >
        {props.ptext}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center w-full border-black p-2 md:p-8 gap-4">
        {listworkflows.map((data) => {
          return (
            <div
              className={`flex flex-col rounded-xl shadow-xl h-[180px] md:h-[220px] lg:h-[200px] w-full p-2 gap-4 group hover:bg-primary hover:text-white ${
                theme === "light"
                  ? "text-zinc-900 "
                  : "text-white shadow-gray-900 border-[1px] border-gray-500"
              }`}
            >
              <Link to={data.wlink}>
                <div className="h-14 w-14">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="bg-white rounded-lg p-2 "
                  />
                </div>
              </Link>
              <Link to={data.wlink}>
                <div>
                  <h1
                    className={`text-base font-bold font-Plus-Jakarta-Sans  ${
                      theme === "light"
                        ? "text-gray-950 group-hover:text-white "
                        : "text-white "
                    }`}
                  >
                    {data.name}
                  </h1>
                </div>
              </Link>
              <div>
                <p
                  className={`w-full text-sm font-normal font-['Plus Jakarta Sans'] leading-normal group-hover:text-white ${
                    theme === "light" ? "text-zinc-600 " : "text-white "
                  }`}
                >
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowList;
