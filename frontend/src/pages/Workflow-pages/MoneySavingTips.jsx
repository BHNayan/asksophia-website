import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/money-sav-img.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";
import Box5 from "../../components/Box5";

const MoneySavingTips = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Money-Saving Tips"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="AskSophia revolutionizes personal finance"
            ButText="Money-Saving Tips"
            PText="AskSophia revolutionizes personal finance management by providing actionable, 
            personalized money-saving tips that align with your lifestyle and financial goals. 
            Through intelligent analysis of your spending habits and financial data, 
            AskSophia offers tailored advice to help you maximize savings without compromising your quality of life."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box5 imglink="./images/box-img-15.png" />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Let us be the bridge to your musical exploration"
            ptext="Sign up for early access now, and let’s start this symphony of
            discovery together."
            bttext="Sign Up for Early Access "
            imglink="images/box-13.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default MoneySavingTips;
