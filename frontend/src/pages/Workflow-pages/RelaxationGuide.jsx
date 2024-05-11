import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/relax-img.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";
import Box5 from "../../components/Box5";

const RelaxationGuide = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="Relaxation Guide"
          bredtxt="Relaxation Guide"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="AskSophia’s Relaxation Guide"
            ButText="Relaxation Guide"
            PText="AskSophia’s Relaxation Guide is designed to become your go-to solution for stress relief and mental wellness. 
            Leveraging AI to curate personalized relaxation techniques—from guided meditations to breathing exercises—it understands your stress triggers and offers solutions to mitigate them, 
            transforming your device into a sanctuary of calm."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box5 imglink="./images/box-img-16.png" />
        </div>
        <div className="p-2 md:p-10">
          <Box4
           smheadingText="Join the AskSophia community"
           headingText="Ready to watch your savings grow without the guesswork?"
           ptext="Join AskSophia today and transform the way you manage your money. 
           Say goodbye to generic advice and hello to personalized money-saving strategies tailored just for you"
           bttext="Sign Up for Early Access "
           imglink="images/box-img-13.png"
          />
        </div>
       
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default RelaxationGuide