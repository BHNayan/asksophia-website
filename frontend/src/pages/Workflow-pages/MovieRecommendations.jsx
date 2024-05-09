import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import Box4 from "../../components/Box4";
import img from "/images/box-img-36.png";
import Testimonials from "../../components/Testimonials";
import Box10 from "../../components/Box10";
import Button from "../../components/Button";

const MovieRecommendations = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Movie Recommendations"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Discover Your Next Favorite Movie with AskSophia"
            ButText="Movie Recommendations"
            PText="AskSophia’s Movie Recommendations workflow is like having your personal movie critic, curating films perfectly 
            aligned with your tastes and mood. Say goodbye to endless browsing and hello to tailor-made movie nights."
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
              <Button BTtext="AskSophia’s Movie Recommendations" />
            </div>
            <div>
              <h1 className="text-center text-zinc-900 text-[22px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[33px] md:leading-[53px]">
              Welcome to a cinematic journey tailored just for you with<br></br> AskSophia’s Movie Recommendations
              </h1>
            </div>
          </div>
          <Box10
            Box1HeadingText="personalized guide to the vast world of cinema"
            Box1PText="Our sophisticated AI dives deep into your preferences, past viewings, and even your current mood to 
            suggest movies that you’re bound to love. Whether you’re in the mood for a heartwarming rom-com, 
            a thrilling action movie, or an indie gem, AskSophia is your personalized guide to the vast world of cinema"
            Box1img="./images/box-img-38.png"
            Box2HeadingText="align with your interests"
            Box2PText=" AskSophia, every movie night is a personalized experience, freeing you from the indecision of what to watch next."
            Box2img="./images/box-img-39.png"
            Box3HeadingText="discover new favorites"
            Box3PText="Unlock a curated selection of films that match your unique taste and discover new favorites with ease. 
            Our workflow not only recommends 
            movies but also provides you with summaries, ratings, and where you can watch them."
            Box3img="./images/box-img-40.png"
            Box3Btlink="/signup"
            Box3BtText="Sign Up for Early Access"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText=""
            headingText="Ready to transform how you discover movies?"
            ptext="Let AskSophia guide you to your next cinematic treasure. 
            Sign up now and dive into a world of personalized movie recommendations that speak directly to your heart."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-45.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default MovieRecommendations;
