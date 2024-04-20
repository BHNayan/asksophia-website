import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/recepibox-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box2 from "../../components/Box2";

const SocialMediaRecap = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Social Media Recap"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Stay Connected, Not Overwhelmed, Your Personalized Social Media Recap with AskSophia"
            ButText="Social Media Recap"
            PText="In a sea of endless scrolling, AskSophia’s Social Media Recap cuts through the clutter. 
            By curating your social feeds based on your interests, 
            we ensure you never miss an update that matters to you. Say goodbye to digital fatigue and hello to meaningful connections."
            But2Text="Find Your Perfect Social Feed"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-2 w-full ">
          <Box2 img="/images/box-img-7.png" bgcolor="#FCF1C5" />
          <Box2 img="/images/box-img-8.png" bgcolor="#E0E7FF" />
          <Box2 img="/images/box-img-9.png" bgcolor="#DBFBE6" />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default SocialMediaRecap;
