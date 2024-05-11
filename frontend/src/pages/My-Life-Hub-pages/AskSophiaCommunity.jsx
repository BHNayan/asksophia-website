import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-66.png";
import Testimonials from "../../components/Testimonials";
import Faqs from "../../components/Faqs";
import Box4 from "../../components/Box4";

const AskSophiaCommunity = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="AskSophia Community"
          bredtxt="AskSophia Community"
          bredlink="/askSophia-community"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Join the AskSophia Community of Innovators"
            ButText="Connect, Share, and Grow"
            PText="Don’t just navigate the digital world alone. 
            Join the AskSophia Community now to unlock a universe of collaboration, support, and endless learning opportunities"
            But2Link="/signup"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>

        <div>
          <Box4
            smheadingText=""
            headingText="Don’t just navigate the digital world alone"
            ptext="Join the AskSophia Community now to unlock a universe of collaboration, support, and endless learning opportunities"
            bttext="Sign Up for Early Access "
            imglink="images/box-img-65.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
        <div>
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default AskSophiaCommunity;
