import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-59.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Faqs from "../../components/Faqs";
import Box3 from "../../components/Box3";

const UserDataPrivacy = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="User Data Privacy"
          bredtxt="User Data Privacy"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Empowering You with Transparency and Control Over Your Data"
            ButText="Your Privacy, Our Priority"
            PText="Take control of your digital footprint with AskSophia. 
            Explore our privacy features and customize your settings for a secure, 
            personalized experience. Your data, your rules"
            But2Link="/"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Protected Shield"
            PText="A graphic symbolizing the strong protection AskSophia offers for your data"
            imglink="/images/internet-security.png"
            bgcolorcode="#E0E7FF"
          />
          <Box3
            HeadingText="Data Protective"
            PText=" A mock-up demonstrating how users can easily adjust their privacy settings within AskSophia, highlighting simplicity and control "
            imglink="/images/data-analytics.png"
            bgcolorcode="#ECFCCB"
          />
          <Box3
            HeadingText="Network"
            PText="An infographic showing how data is processed, used, and protected, emphasizing transparency "
            imglink="/images/network.png"
            bgcolorcode="#D1FAE5"
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

export default UserDataPrivacy;
