import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-62.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Faqs from "../../components/Faqs";
import Box3 from "../../components/Box3";
import Box4 from "../../components/Box4";

const YourLifestyleManagerChatbot = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Your Lifestyle Manager Chatbot"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Your Personal Guide to a Simplified, Enriched Lifestyle"
            ButText="Meet Sophia"
            PText="Welcome to a world where your lifestyle management is in the hands of 
            an AI companion designed to understand and anticipate your needs. Sophia, 
            your personal lifestyle manager, is here to streamline your daily tasks, 
            organize your schedule, and introduce ease and joy into every aspect of your day."
            But2Link="/signup"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box1Reverse
            H1text="Sophia is ready to assist you with a personalized"
            ButText="Meet Sophia"
            PText=" Sophia is ready to assist you with a personalizedFrom the moment you wake up, 
            Sophia is ready to assist you with a personalized good morning message and a rundown of your day’s schedule, 
            considering your preferences and habits. Need a quick meal suggestion based on what’s in your fridge? 
            Sophia has you covered. Looking for the best route to your next meeting? Just ask Sophia. But Sophia is more than just a task manager. 
            It’s your gateway to a more connected, efficient, and personalized lifestyle. Here’s how Sophia stands apart:"
            But2Text="Sign Up for Early Access"
            But2Link="/login"
            imglink="./images/box-img-63.png"
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Personalized Interaction"
            PText="Sophia learns from your habits, preferences, and feedback, tailoring suggestions and tasks to fit your unique lifestyle "
            imglink="/images/personalization.png"
            bgcolorcode="#D1FAE5"
          />
          <Box3
            HeadingText="Seamless Daily Management"
            PText=" With Sophia, scheduling appointments, setting reminders, 
            and finding information becomes effortless, giving you more time to focus on what truly matters. "
            imglink="/images/appointment.png"
            bgcolorcode="#ECFCCB"
          />
          <Box3
            HeadingText="A Companion You Can Trust"
            PText="Privacy and security are at the core of Sophia’s design, 
            ensuring your data is protected while providing you with a personalized experience. "
            imglink="/images/privacy-policy.png"
            bgcolorcode="#E0E7FF"
          />
        </div>
        <div>
          <Box4
            smheadingText=""
            headingText="Ready to transform your daily routine with a touch of simplicity and sophistication?"
            ptext="Join the countless users who have transformed their daily routines with Sophia."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-64.png"
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

export default YourLifestyleManagerChatbot;
