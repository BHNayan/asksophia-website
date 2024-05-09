import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-33.png";
import Testimonials from "../../components/Testimonials";
import Box8Reverse from "../../components/Box8reverse";
import Box8 from "../../components/Box8";

const FitnessRoutine = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Fitness Routine"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Transform Your Fitness Journey with AskSophia’s Personalized Routines"
            ButText="Fitness Routine"
            PText="AskSophia’s Fitness Routine workflow revolutionizes personal fitness by 
            offering customized workout plans tailored to your goals, 
            schedule, and fitness level. Unlike generic fitness apps, 
            AskSophia adapts to your progress, providing dynamic adjustments for optimal results."
            But2Text="Sign Up for Early Access"
            But2Link="/login"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
            <Box8Reverse
              H1text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              ButText="Global Features"
              PText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              But2Text="Learn Something New"
              But2Link="/login"
              imglink="./images/box-img-34.png"
              bgimgcode="./images/box-img-26.png"
              Reviewtext="Whenever I'm curious about something, Sophia is there with an answer. It's like Google, but more personal and fun!"
              Reviewauthor="Morgan"
              Reviewposition="Hobbyist Photographer"
            />
          </div>
          <div>
            <Box8
              H1text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              ButText="Global Features"
              PText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              But2Text="Learn Something New"
              But2Link="/login"
              imglink="./images/box-img-35.png"
              bgimgcode="./images/box-img-26.png"
              Reviewtext="Chatting with Sophia is like texting a friend who always knows exactly what I need. It's made my life so much simpler."
              Reviewauthor="Jamie"
              Reviewposition="High School Teacher"
            />
          </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default FitnessRoutine;
