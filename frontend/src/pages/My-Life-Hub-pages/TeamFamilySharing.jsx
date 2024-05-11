import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-67.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Faqs from "../../components/Faqs";
import Box3 from "../../components/Box3";
import Box4 from "../../components/Box4";

const TeamFamilySharing = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Team & Family Sharing"
          bredtxt="Team & Family Sharing"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Collaboration Hub"
            ButText="Features"
            PText="An inviting graphic of a digital workspace showing team members contributing to a project in real-time"
            But2Link="/"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box-bg-2-img.png"
          />
        </div>
        <div>
          <Box1Reverse
            H1text="Family Calendar"
            ButText="Features"
            PText=" A visual representation of a shared family calendar with colorful events, reminders, 
            and tasks, showcasing how easy it is to stay connected and organized"
            But2Text="Sign Up for Early Access"
            But2Link="/"
            imglink="./images/box-img-68.png"
            bgimgcode="#ABBDF7"
          />
        </div>
        <div>
          <Box1
            H1text="Team Communication"
            ButText="Features"
            PText="Dynamic images of in-app messaging, video calls, or notification alerts highlighting the platform’s communication features"
            But2Link="/"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box-bg-2-img.png"
          />
        </div>
        
        <div>
          <Box4
            smheadingText=""
            headingText="Bring your team and family into the future of collaboration"
            ptext="Create your AskSophia Workspace today and experience seamless connection and productivity like never before"
            bttext="Sign Up for Early Access "
            imglink="images/box-img-70.png"
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
}

export default TeamFamilySharing