import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import Box4 from "../../components/Box4";
import img from "/images/box-img-36.png";
import Testimonials from "../../components/Testimonials";
import Box10 from "../../components/Box10";
import Button from "../../components/Button";

const PodcastDiscovery = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Podcast Discovery"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Explore the World of Podcasts Tailored to Your Interests with AskSophia"
            ButText="Podcast Discovery"
            PText="Step into the vast universe of podcasts with AskSophia’s Podcast Discovery. 
            Our AI-driven curation dives deep into your interests, curating a list of podcasts that speak directly to your passions, 
            hobbies, and curiosity, 
            ensuring you’re always a play button away from content that resonates."
            But2Text="Sign Up for Early Access"
            But2Link="/signup"
            imglink={img}
            bgimgcode="/images/box-bg-2-img.png"
          />
        </div>

        <div>
          <Box4
            smheadingText="Ready to transform how you discover movies?"
            headingText="Ready to watch your savings grow without the guesswork?"
            ptext="Let AskSophia guide you to your next cinematic treasure. 
            Sign up now and dive into a world of personalized movie recommendations that speak directly to your heart."
            bttext="Sign Up for Early Access "
            btlink="/signup"
            imglink="images/box-img-37.png"
          />
        </div>
        <div className="flex flex-col gap-4 p-2">
          <div className="flex flex-col justify-center items-center p-2 gap-4">
            <div>
              <Button BTtext="AskSophia's Podcast discovery " />
            </div>
            <div>
              <h1 className="text-center text-zinc-900 text-[22px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[33px] md:leading-[53px]">
              AskSophia's Podcast discovery<br></br> experience
              </h1>
            </div>
          </div>
          <Box10
            Box1HeadingText="personalizes your podcast"
            Box1PText="Podcast Discovery makes it a breeze. Whether you’re into true crime, comedy, technology, health and wellness, 
            or any niche in between, AskSophia personalizes your podcast discovery experience."
            Box1img="./images/box-img-41.png"
            Box2HeadingText="align with your interests"
            Box2PText=" Our platform not only suggests podcasts based on your interests but also learns from your listening habits to refine future recommendations. 
            Each suggestion includes podcast summaries, episode highlights, and listener reviews to give you a clear picture of what to expect."
            Box2img="./images/box-img-42.png"
            Box3HeadingText="align with your interests"
            Box3PText="AskSophia encourages exploration by highlighting trending podcasts and under-the-radar gems, ensuring you’re always in the loop with engaging audio content. Embrace a personalized podcast discovery journey with AskSophia. 
            Sign up today for early access and start exploring podcasts that align perfectly with your audio preferences"
            Box3img="./images/box-img-43.png"
            Box3Btlink="/signup"
            Box3BtText="Sign Up for Early Access"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText=""
            headingText="Ready to uncover the podcasts that will inspire, educate, and entertain you?"
            ptext="Sign up for AskSophia now and let us introduce you to your next audio obsession. Your perfect podcast match awaits!"
            bttext="Sign Up for Early Access "
            imglink="images/box-img-44.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default PodcastDiscovery