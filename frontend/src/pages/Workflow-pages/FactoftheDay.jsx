import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/factday-img.png";
import Testimonials from "../../components/Testimonials";
import Box3 from "../../components/Box3";
import Box1Reverse from "../../components/Box1Reverse";
import Box4 from "../../components/Box4";

const FactoftheDay = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="Fact of the Day"
          bredtxt="Fact of the Day"
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
        <div className="p-2 md:p-10">
          <Box1Reverse
            H1text="Explore the World of Podcasts Tailored to Your Interests with AskSophia"
            ButText="Fact Of The Day"
            PText=" Embrace the wonders of the world with 'Fact of the Day'. 
            Ignite your curiosity and enrich your conversations with knowledge that astonishes and inspires. 
            Join us on this journey of discovery and let learning be your daily delight"
            But2Text="Sign Up for Early Access"
            But2Link="/"
            imglink="./images/box-img-83.png"
            bgimgcode="#F0CCED"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Embark on a language learning journey  specifically for you with AskSophia"
            ptext="Dive into interactive lessons, practice with real-life scenarios, and achieve your language goals with ease."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-84.png"
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