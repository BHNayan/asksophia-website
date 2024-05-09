import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-53.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";

const GameSuggestions = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Game Suggestions"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Elevate your gaming experience with AskSophia’s Game Suggestions"
            ButText="Game Suggestions"
            PText="Dive into a universe where every game recommendation is tailored specifically to you, leveraging AI to analyze your gaming style, preferences, and history. 
            Discover your next favorite game, from hidden indie treasures to blockbuster hits, all personalized to your unique taste."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Let us be the bridge to your musical exploration"
            ptext="Sign up for early access now, and let’s start this symphony of discovery together."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-54.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default GameSuggestions