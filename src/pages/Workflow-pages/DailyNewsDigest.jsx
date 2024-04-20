import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/dailynews-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box5 from "../../components/Box5";

const DailyNewsDigest = () => {
  return (
    <div>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Daily News Digest"
        />
      </div>
      <div>
        <Box1
          H1text="Start Your Day Informed and Inspired"
          ButText="Daily News Digest"
          PText="Imagine waking up to a news digest that's meticulously curated
              just for you. AskSophia's Daily News Digest filters through the
              noise to bring you news that matters most, tailored to your
              interests, and served with a side of inspiration. Whether it's
              breaking global news, industry trends, or local updates, stay
              ahead of the curve with minimal effort."
          But2Text="Chat Now"
          But2Link="/chat"
          imglink={img}
          bgimgcode="/images/box1-bg-img.png"
        />
      </div>

      <div>
        <Box5 imglink="./images/newsboximg.png" />
      </div>

      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default DailyNewsDigest;
