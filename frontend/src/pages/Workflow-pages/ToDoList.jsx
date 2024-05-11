import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/todo-box-img.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";

const ToDoList = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="To-Do List"
          bredtxt="To-Do List"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Elevate your gaming experience with AskSophia’s Game Suggestions"
            ButText="To-Do List"
            PText="Dive into a universe where every game recommendation is tailored specifically to you, 
            leveraging AI to analyze your gaming style, preferences, and history.
             Discover your next favorite game, from hidden indie treasures to blockbuster hits, all personalized to your unique taste."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Ready to watch your savings grow without the guesswork?"
            ptext="Join AskSophia today and transform the way you manage your money. 
            Say goodbye to generic advice and hello to personalized money-saving strategies tailored just for you"
            bttext="Sign Up for Early Access "
            imglink="images/box4-img.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
