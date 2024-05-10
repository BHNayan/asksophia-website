import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-57.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Faqs from "../../components/Faqs";

const SupportHelp = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Support and Help"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Community Forum Engagement"
            ButText="Support and Help"
            PText="Empowering Your AskSophia Experience with Comprehensive Support: From FAQs to Real-Time Assistance, We’ve Got You Covered."
            But2Text="Sign Up for Early Access"
            But2Link="/"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box1Reverse
            H1text="AskSophia’s support"
            ButText="Support and Help"
            PText=" Experience a seamless journey with AskSophia. Need help or have a question? 
            Dive into our Support Section now and discover how easy it is to get the answers and assistance you need. 
            Your satisfaction is our priority!"
            But2Text="Sign Up for Early Access"
            But2Link="/"
            imglink="./images/box-img-58.png"
            bgimgcode=""
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

export default SupportHelp;
