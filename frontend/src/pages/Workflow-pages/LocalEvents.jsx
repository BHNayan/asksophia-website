import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/local-events-img.png";
import Testimonials from "../../components/Testimonials";
import Box3 from "../../components/Box3";

const LocalEvents = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Local Events"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Explore, Connect, and Experience Your City Like Never Before"
            ButText="Local Events"
            PText="Your Ultimate Guide to Local Happenings: AskSophia’s Local Events feature is 
            your passport to exploring engaging activities and events in your area. Whether it’s a live concert,
            a community workshop, or a hidden gem waiting to be discovered, AskSophia brings the vibrant 
            tapestry of your city right to your fingertips."
            But2Text="Sign Up for Early Access"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Tailored Recommendations"
            PText="Receive event suggestions based on your interests, ensuring you’re always in the loop about happenings you’ll love."
            imglink="/images/good-quality-img.png"
            bgcolorcode="#FEF3C7"
          />
          <Box3
            HeadingText="Community Connections"
            PText=" Join event-based discussions within the AskSophia community, share experiences, and meet like-minded locals."
            imglink="/images/community-img.png"
            bgcolorcode="#E0E7FF"
          />
          <Box3
            HeadingText="Seamless Planning"
            PText="Easily add events to your calendar and share with friends, making social planning effortless."
            imglink="/images/planning-img.png"
            bgcolorcode="#FEF3C7"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default LocalEvents