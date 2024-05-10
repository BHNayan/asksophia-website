import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import Testimonials from "../../components/Testimonials";
import Faqs from "../../components/Faqs";
import Box4 from "../../components/Box4";

const UserAnalyticsDashboard = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="User Analytics Dashboard"
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
