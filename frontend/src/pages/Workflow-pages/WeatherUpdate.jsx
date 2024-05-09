import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/weather-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box2 from "../../components/Box2";

const WeatherUpdate = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Weather Update"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Your Personal Weather Forecast, Tailored Just for You"
            ButText="Weather Update"
            PText="Step outside prepared and confident, every day.
                  AskSophia's Weather Update provides you with personalized forecasts based on your location, routine, 
                  and even your preferences. Whether you’re planning your work attire or your weekend getaway, 
                  we’ve got you covered with real-time updates, severe weather alerts, and lifestyle tips tailored to the forecast."
            But2Text="Come Rain or Shine"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-2 w-full ">
          <Box2 img="/images/box-img-1.png" bgcolor="#FFEDD5" />
          <Box2 img="/images/box-img-2.png" bgcolor="#E0E7FF" />
          <Box2 img="/images/box-img-3.png" bgcolor="#FEF3C7" />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default WeatherUpdate;
