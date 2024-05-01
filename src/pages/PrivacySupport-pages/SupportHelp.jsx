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
            PText="AskSophia’s Book Recommendations bring a library tailored to your tastes directly to your fingertips. 
                Our AI-powered platform understands your reading habits and preferences to recommend books that inspire, entertain, and enlighten."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box1Reverse
            H1text="AskSophia’s support"
            ButText="Support and Help"
            PText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat nisi tortor, quis consequat sem rutrum ut. 
                Sed diam tellus, dictum id odio a, lacinia elementum ipsum. Mauris risus mi, 
                ullamcorper fringilla egestas id, ullamcorper sed quam. Aliquam in feugiat nisl, nec aliquet arcu. Nulla et venenatis mi."
            But2Text="Sign Up for Early Access"
            But2Link="/login"
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
