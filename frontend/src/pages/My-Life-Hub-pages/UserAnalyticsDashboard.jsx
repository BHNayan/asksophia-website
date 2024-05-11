import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import Testimonials from "../../components/Testimonials";
import Faqs from "../../components/Faqs";
import Box4 from "../../components/Box4";
import Button from "../../components/Button";
import Box11 from "../../components/Box11";

const UserAnalyticsDashboard = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="User Analytics Dashboard"
          bredtxt="User Analytics Dashboard"

        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Understand Your Digital Habits with Personalized Analytics"
            ButText="Insights at a Glance"
            PText="Discover insights into your digital behavior. Visit your AskSophia Analytics Dashboard today 
            for a comprehensive overview of your app usage, 
            preferences, and more. Unlock the potential for self-improvement "
            But2Link="/"
            But2Text="Sign Up for Early Access"
            imglink="/images/box-img-71.png"
            bgimgcode="/images/box-bg-2-img.png"
          />
        </div>
        <div className="w-full p-8 bg-[#0C041E] flex flex-col gap-8 rounded-xl">
          <div className="flex justify-center md:justify-start items-start gap-2">
            <Button BTtext="User Analytics Dashboard" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-2">
            <div>
              <h1 className="w-full md:w-[80%] text-neutral-50 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[45px] md:leading-[53px]">
              Interaction statistics with AskSophia
              </h1>
            </div>
            <div className="flex justify-end">
              <p className="w-full md:w-[70%] text-zinc-100 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
              Discover insights into your digital behavior. Visit your AskSophia Analytics Dashboard today 
              for a comprehensive overview of your app usage,
               preferences, and more. Unlock the potential for self-improvement.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-8 md:p-14">
            <Box11 imgurl="./images/box-img-85.png" bgcolor="#F6E5CE" />
            <Box11 imgurl="./images/box-img-86.png" bgcolor="#F9DEDE" />
            <Box11 imgurl="./images/box-img-87.png" bgcolor="#E7F7C7" />
          </div>
        </div>

        <div>
          <Box4
            smheadingText="Visit AskSophia Analytics Dashboard"
            headingText="Discover insights into your digital behavior"
            ptext="Visit your AskSophia Analytics Dashboard today for a comprehensive overview of your app usage, preferences, and more. 
            Unlock the potential for self-improvement"
            bttext="Sign Up for Early Access "
            imglink="images/box-img-72.png"
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

export default UserAnalyticsDashboard;
