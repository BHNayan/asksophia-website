import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-55.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";

const TravelPlanner = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Travel Planner"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="AskSophia’s Travel Planner"
            ButText="Travel Planner"
            PText="Transform the way you travel with AskSophia’s Travel Planner. Beyond just a planning tool, 
            it’s your personal travel consultant, adapting to your preferences, budget, and dreams. 
            With its intelligent suggestions from flights to accommodations, and personalized itineraries, exploring the world has never been more seamless or satisfying. Whether it’s a solo adventure, a family vacation,
             or a business trip, AskSophia ensures every journey is perfectly planned and truly memorable."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box1Reverse
            H1text="Explore the World of Podcasts Tailored to Your Interests with AskSophia"
            ButText="Travel Planner"
            PText=" Step into the vast universe of podcasts with AskSophia’s Podcast Discovery. 
            Our AI-driven curation dives deep into your interests, curating a list of podcasts that speak directly to your passions, hobbies, 
            and curiosity, ensuring you’re always a play button away from content that resonates."
            But2Text="Sign Up for Early Access"
            But2Link="/login"
            imglink="./images/box-img-56.png"
            bgimgcode=""
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default TravelPlanner;
