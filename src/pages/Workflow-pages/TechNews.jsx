import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/money-sav-img.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";
import Box5 from "../../components/Box5";
import VideoCarousel from "../../components/VideoCarousel";

const TechNews = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Tech News"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Stay Ahead of the Curve"
            ButText="Tech News"
            PText="Stay Ahead of the Curve With AskSophia’s Tech News, you’re not just keeping up—you’re getting ahead. 
            Tailored news feeds mean you learn about the next big thing before it’s big."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box5 imglink="./images/box-img-17.png" />
        </div>

        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Ready to watch your savings grow without the guesswork?"
            ptext="Join AskSophia today and transform the way you manage your money. 
            Say goodbye to generic advice and hello to personalized money-saving strategies tailored just for you"
            bttext="Sign Up for Early Access "
            imglink="images/box-img-14.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default TechNews;
