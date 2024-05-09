import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/factday-img.png";
import Testimonials from "../../components/Testimonials";
import Box3 from "../../components/Box3";

const FactoftheDay = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Fact of the Day"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Enrich Your Daily Routine with Fascinating Facts from Around the World"
            ButText="Fact of the Day"
            PText="Welcome to the 'Fact of the Day', a captivating feature of AskSophia designed to enrich 
            your daily routine with bits of wisdom and wonder from all corners of the globe. Whether it's a groundbreaking scientific discovery,
             a forgotten historical event, or an astonishing natural phenomenon, Sophia brings the world's marvels right to your fingertips"
            But2Text="Sign Up for Early Access"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Stay Informed"
            PText="Keep your knowledge base growing with diverse and interesting facts."
            imglink="/images/idea-img.png"
            bgcolorcode="#FEF3C7"
          />
          <Box3
            HeadingText="Spark Conversations"
            PText=" Share these gems with friends, family, or colleagues and ignite engaging discussions."
            imglink="/images/chat-img.png"
            bgcolorcode="#E0E7FF"
          />
          <Box3
            HeadingText="Inspire Curiosity"
            PText="Each fact is a gateway to exploring new topics, ideas, and areas of interest."
            imglink="/images/imagination-img.png"
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

export default FactoftheDay