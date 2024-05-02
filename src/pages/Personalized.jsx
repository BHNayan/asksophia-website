import React from "react";
import Bredcum from "../components/Bredcum";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Box6 from "../components/Box6";
import img from "/images/box-img-21.png";
import Box1Reverse from "../components/Box1Reverse";
import Box7 from "../components/Box7";
import Box4 from "../components/Box4";
import Box6Reverse from "../components/Box6Reverse";

const Personalized = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={true}
          ShowBredcum={true}
          Titletext="Your Personalized Digital Universe Awaits"
        />
      </div>
      <div className="bg-[#0C041E] pt-4 pr-4 pb-0 pl-4 md:pt-16 md:pb-0 md:pr-16 md:pl-16 flex flex-col gap-4">
        <div className="w-full flex flex-col md:flex-row gap-2 p-2">
          <div className="w-full flex flex-col gap-4 p-2">
            <Button BTtext="Personalized Digital" />
            <div className="w-full md:w-[60%] text-neutral-50 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[36px] md:leading-[56px]">
              Embark on Your Unique Onboarding Adventure
            </div>
          </div>
          <div className="flex flex-col justify-evenly p-2 w-full gap-4">
            <p className="w-[80%] text-white text-base font-normal font-['Plus Jakarta Sans'] leading-[30px]">
              From the first hello, AskSophia isn't just another digital
              platform; it's your new personal digital companion, designed
              uniquely around you. Let's step through the door and see how
              AskSophia welcomes you to a world of endless possibilities:
            </p>
            <div className="w-full">
              <Link to="/">
                <div className="flex flex-row w-fit items-center px-4 py-2 gap-2 bg-primary rounded-full cursor-pointer">
                  <button className="text-white">Get Started</button>
                  <IoArrowForwardCircleOutline className="text-black bg-white rounded-full h-6 w-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-0 ">
          <div className=" flex justify-center items-center p-4">
            <img src="./images/bg-personal-img.png" alt="img" className=" " />
          </div>

          <div className=" flex justify-center items-center -mt-40 md:-mt-80">
            <img src="./images/personalized-img.png" alt="img" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-2 w-full rounded-3xl md:p-12">
        <div className="w-full rounded-3xl shadow-lg">
          <Box6
            H1text="A Warm Personalized Welcome"
            ButText="Step 1"
            PText="Welcome! Let's make today awesome,greets AskSophia, 
          as you're introduced to a world where technology intuitively aligns with your daily needs. 
          Through a vibrant animated journey, discover how AskSophia integrates into your life, 
          turning every day into an exciting adventure tailored just for you."
            imglink="/images/box-img-18.png"
            bgimgcode="#E0E7FF"
          />
        </div>
        <div className="w-full rounded-3xl shadow-lg ">
          <Box6Reverse
            H1text="Discovering Your Digital Persona"
            ButText="Step 2"
            PText="Imagine an app that gets you. Our quick, interactive quiz effortlessly uncovers your digital persona - 
            be it The Innovator, The Lifelong Learner, or The Explorer. This isn't just fun; 
            it's the start of tailoring AskSophia's universe to match your unique beat, 
            ensuring recommendations and solutions are as individual as you are."
            imglink="/images/box-img-19.png"
            bgimgcode="#F3E8FF"
          />
        </div>
      </div>

      <div>
        <Box1Reverse
          H1text="Your Personalized Feature Palette"
          ButText="Step 3"
          PText="Choose your adventure with our suite of 20+ groundbreaking workflows. 
            As you select, watch your AskSophia dashboard come to life, dynamically adapting to your preferences. 
            It's here that the true power of personalized technology shines, crafted just for you."
          But2Link="/chat"
          But2Text="Sign Up for Early Access"
          imglink={img}
          bgimgcode="#DBE1F9"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2 justify-around items-center  p-2 md:p-8">
        <Box7
          H1text="Connect, Share, Grow"
          PText="Welcome to the AskSophia community - your space to connect with fellow trailblazers. 
          Discover collaborative projects, share insights, or simply make new friends. This is your platform for mutual growth, 
          supported by a network that's as diverse and dynamic as our users.
          "
          bgimgcode="#DBE1F9"
          imglink="./images/box-img-22.png"
        />
        <Box7
          H1text="Designed for Everyone"
          PText="AskSophia embraces all, with accessibility settings available from the get-go. 
          Customize your experience to fit your needs, ensuring AskSophia is the companion everyone can enjoy, 
          regardless of how you interact with the world.."
          bgimgcode="#FDEBD4"
          imglink="./images/box-img-23.png"
        />
        <Box7
          H1text="Support That Understands You"
          PText="Got questions? AskSophia's live support is always one click away, ready to assist with a smile. 
          Our dedicated team ensures your onboarding is smooth, 
          answering every query with the warmth and guidance you deserve."
          bgimgcode="#DDEEFA"
          imglink="./images/box-img-24.png"
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
    </>
  );
};

export default Personalized;
