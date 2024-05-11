import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import Box4 from "../../components/Box4";
import img from "/images/box-img-46.png";
import Testimonials from "../../components/Testimonials";
import Box10 from "../../components/Box10";
import Button from "../../components/Button";
import Box11 from "../../components/Box11";

const BookRecommendations = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="Book Recommendations"
          bredtxt="Book Recommendations"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Unlock Your Next Great Read with AskSophia’s Book Recommendations"
            ButText="Book Recommendations"
            PText="AskSophia’s Book Recommendations bring a library tailored to your tastes directly to your fingertips.
             Our AI-powered platform understands your reading habits and preferences to recommend books that inspire, entertain, and enlighten."
            But2Text="Sign Up for Early Access"
            But2Link="/signup"
            imglink={img}
            bgimgcode="/images/box-bg-2-img.png"
          />
        </div>
        <div className="w-full p-8 bg-[#0C041E] flex flex-col gap-8">
          <div className="flex justify-center md:justify-start items-start gap-2">
            <Button BTtext="AskSophia’s Book Recommendations" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-2">
            <div>
              <h1 className="w-full md:w-[70%] text-neutral-50 text-[30px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[45px] md:leading-[53px]">
                AskSophia's book picks, dive deep into literature
              </h1>
            </div>
            <div className="flex justify-end">
              <p className="w-full md:w-[70%] text-zinc-100 text-base font-normal font-['Plus Jakarta Sans'] leading-[23px]">
                Our intuitive workflow is designed to understand your reading
                preferences, whether you’re into thrilling mysteries,
                captivating romances, thought-provoking non-fiction, or any
                genre in between.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around  gap-4 md:gap-8 md:p-14">
            <Box11 imgurl="./images/box-img-73.png" bgcolor="#FFEDD5" />
            <Box11 imgurl="./images/box-img-74.png" bgcolor="#FEE2E2" />
            <Box11 imgurl="./images/box-img-75.png" bgcolor="#E8F8C8" />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-2">
          <div className="flex flex-col justify-center items-center p-2 gap-4">
            <div>
              <Button BTtext="AskSophia’s Book Recommendations" />
            </div>
            <div>
              <h1 className="text-center text-zinc-900 text-[22px] md:text-[40px] font-semibold font-['Mona Sans'] leading-[33px] md:leading-[53px]">
                AskSophia's Book Picks: Explore <br></br>literature's depths
              </h1>
            </div>
          </div>
          <Box10
            Box1HeadingText="Reading preferences"
            Box1PText="Our intuitive workflow is designed to understand your reading preferences, whether you’re into thrilling mysteries, captivating romances, thought-provoking non-fiction, or any genre in between. 
            AskSophia brings you personalized book suggestions that promise to captivate and inspire."
            Box1img="./images/box-img-47.png"
            Box2HeadingText="align with your interests"
            Box2PText=" Not only do we recommend titles that align with your interests, 
            but we also introduce you to new genres and authors, expanding your literary horizons. Each recommendation comes with a brief synopsis, author details, and user ratings, 
            helping you make informed decisions about your next read"
            Box2img="./images/box-img-48.png"
            Box3HeadingText="align with your interests"
            Box3PText="AskSophia, you can easily track your reading list and share your favorite finds with friends. 
            Embark on a personalized literary journey with AskSophia and uncover books that tell stories you’ll love. 
            Sign up now for early access and transform the way you discover books."
            Box3img="./images/box-img-43.png"
            Box3Btlink="/signup"
            Box3BtText="Sign Up for Early Access"
          />
        </div>

        <div>
          <Box4
            smheadingText=""
            headingText="Are you ready to discover books that resonate with your soul?"
            ptext="Sign up for AskSophia today and start exploring recommendations curated just for you. 
            Let your next literary adventure begin!"
            bttext="Sign Up for Early Access "
            btlink="/signup"
            imglink="images/box-img-50.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default BookRecommendations;
