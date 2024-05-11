import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/todo-box-img.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";

const LanguageLearning = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="Language Learning"
          bredtxt="Language Learning"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Elevate your gaming experience with AskSophia’s Game Suggestions"
            ButText="Language Learning"
            PText="Dive into a universe where every game recommendation is tailored specifically to you, 
            leveraging AI to analyze your gaming style, preferences, and history.
             Discover your next favorite game, from hidden indie treasures to blockbuster hits, all personalized to your unique taste."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box1Reverse
            H1text="Elevate your gaming experience with AskSophia’s Game Suggestions"
            ButText="Language Learning"
            PText="Dive into a universe where every game recommendation is tailored specifically to you, 
            leveraging AI to analyze your gaming style, preferences, and history.
             Discover your next favorite game, from hidden indie treasures to blockbuster hits, all personalized to your unique taste."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="#D9A0F4"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default LanguageLearning;
