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
            PText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. 
            Nam volutpat mauris in pharetra interdum. Quisque ultrices sem vitae arcu dignissim tempus. 
            Nullam ac elit ac elit pharetra semper suscipit vitae sapien. Maecenas in vestibulum massa, et vulputate purus. 

            Nullam libero lorem, tincidunt eu enim sodales, hendrerit iaculis turpis. 
            Duis condimentum volutpat nunc, eget convallis dui scelerisque at. 
            Vestibulum elementum ex sit amet nibh imperdiet, "
            But2Link="/signup"
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
