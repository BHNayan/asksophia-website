import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-51.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";
import Button from "../../components/Button";
import Box12 from "../../components/Box12";


const MusicDiscovery = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Music Discovery"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Uncover Your Next Favorite Tune with AskSophia’s Music Discovery"
            ButText="Music Discovery"
            PText="Embark on a musical journey like no other with AskSophia’s Music Discovery. Powered by AI, AskSophia 
            tunes into your musical tastes and moods to craft playlists and suggest songs that are perfectly attuned to you. 
            From uncovering hidden gems to reconnecting you with classic hits, your soundtrack is waiting to be discovered."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="w-full p-4 bg-[#0C041E] flex flex-col gap-8 rounded-2xl">
          <div className="flex justify-center items-center gap-2">
            <Button BTtext="AskSophia’s Book Recommendations" />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 p-2">
            <h1 className="w-full md:w-[45%] text-center text-neutral-50 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[45px] md:leading-[53px]">
              AskSophia’s Music Discovery is not just about finding new music
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-around  gap-4 md:gap-8 md:p-14">
            <Box12
              bgcolor="#4F46E5"
              bttxt="Personalized Musical Landscape"
              ptext="Whether you’re looking for something to boost your energy, relax after a long day, 
              or explore new genres, our platform uses sophisticated algorithms 
              to match you with music that matches your current vibe and expands your horizons."
            />
            <Box12
              bgcolor="#221B32"
              bttxt="Playlists based on mood"
              ptext="We also offer features like curated playlists based on mood, 
            activity, or time of day, as well as the ability to discover music trends before they hit the mainstream.
             AskSophia keeps you ahead of the curve, ensuring you’re always in tune with the best new music."
            />
          </div>
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Let us be the bridge to your musical exploration"
            ptext="Sign up for early access now, and let’s start this symphony of discovery together."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-52.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default MusicDiscovery;
