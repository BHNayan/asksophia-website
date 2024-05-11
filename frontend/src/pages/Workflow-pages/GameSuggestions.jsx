import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-53.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";
import GameSlider from "../../components/GameSlider";
import Button from "../../components/Button";
import Box13 from "../../components/Box13";

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
        <div className="flex flex-col justify-center items-center p-4 gap-10 ">
          <div>
            <h1 className="text-center text-zinc-900 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[53px]">
              Top Game Suggestions
            </h1>
          </div>
          <div>
            <GameSlider />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col justify-center items-center p-4 pb-0 gap-4 bg-[#0C041E] rounded-3xl">
            <div className="pt-10">
              <Button BTtext="Family and Team Collaboration" />
            </div>
            <div>
              <p className="w-full text-center text-neutral-50 text-[24px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[40px] md:leading-[56px]">
                Enhancing Teamwork & Family<br></br> Coordination
              </p>
            </div>
            <div className="pt-4 pb-0">
              <img
                src="./images/gm-bg-1.png"
                alt="img"
                className="h-full w-full pb-0"
              />
            </div>
          </div>
        </div>
        <div>
          <Box13
            H1text="Explore the World of Podcasts Tailored to Your Interests with AskSophia"
            ButText="Global Features"
            PText="Step into the vast universe of podcasts with AskSophia’s Podcast Discovery. Our AI-driven curation 
            dives deep into your interests, curating a list of podcasts that speak directly to your 
            passions, hobbies, and curiosity, ensuring you’re always a play button away from content that resonates."
            But2Link="/"
            But2Text="Sign Up for Early Access"
            imglink="/images/box-img-76.png"
            bgimgcode="/images/box-bg-2-img.png"
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
};

export default GameSuggestions;
