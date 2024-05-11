import React from "react";
import Bredcum from "../components/Bredcum";
import Box8 from "../components/Box8";
import Box8Reverse from "../components/Box8reverse";

const GlobalFeauters = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Global Features"
          bredtxt="Global Features"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="p-2">
          <div>
            <Box8
              H1text="Chat with Sophia, Always by Your Side"
              ButText="Global Features"
              PText=" Imagine having a friend who's always there to listen and offer help, no matter what you need. 
          That's Sophia—your personal AI friend who makes your life easier, from scheduling to daily advice."
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-25.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="Chatting with Sophia is like texting a friend who always knows exactly what I need. It's made my life so much simpler."
              Reviewauthor="Jhonson"
              Reviewposition="Enterpreneur"
            />
          </div>
          <div>
            <Box8Reverse
              H1text="AskSophia AI Image Generator, Creativity Made Easy"
              ButText="Global Features"
              PText=" Turn your thoughts into stunning visuals with just a few clicks. Whether for work or fun, Sophia's AI Image Generator is your no-stress creative partner"
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-27.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="I never thought I could create such amazing graphics. Sophia made it not only possible but easy and fun!"
              Reviewauthor="Morgan"
              Reviewposition="Hobbyist Photographer"
            />
          </div>
          <div>
            <Box8
              H1text="AskSophia Prompt Library, Curiosity Welcomed Here"
              ButText="Global Features"
              PText=" Always wondered about something? Sophia's got you covered. From quick facts to deep dives, learning is fun and effortless with personalized guidance."
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-28.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="Whenever I'm curious about something, Sophia is there with an answer. It's like Google, but more personal and fun!"
              Reviewauthor="Jamie"
              Reviewposition="High School Teacher"
            />
          </div>
          <div>
            <Box8Reverse
              H1text="Folder Management: Organize Life, Stress Less"
              ButText="Global Features"
              PText=" Keep your digital and real life organized without breaking a sweat. Sophia helps you sort, share, and collaborate, making every task smoother and family projects a breeze."
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-29.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="Organizing with Sophia means I spend less time managing chaos and more time enjoying life with my family."
              Reviewauthor="Taylor"
              Reviewposition="Stay-at-Home Parent"
            />
          </div>
          <div>
            <Box8
              H1text="AskSophia Marketplace, Shopping That Gets You"
              ButText="Global Features"
              PText="Forget endless browsing. Sophia's Marketplace brings the perfect recommendations to you, making shopping a personalized adventure."
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-30.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="I discovered products I love but would have never found on my own. Shopping with Sophia feels like it's curated just for me."
              Reviewauthor="Chris"
              Reviewposition="Busy Professional"
            />
          </div>
          <div>
            <Box8Reverse
              H1text="Seller Dashboard, Boost Your Business Intuitively"
              ButText="Global Features"
              PText=" Gain insights, not headaches. The Seller Dashboard simplifies understanding your customers, enhancing your offerings, and growing your business effortlessly."
              But2Text="Get Started"
              But2Link="/chat"
              imglink="./images/box-img-31.png"
              bgimgcode="./images/box-bg-2-img.png"
              Reviewtext="Sophia's insights helped me connect with my customers on a new level. My small business has grown so much since."
              Reviewauthor="Pat"
              Reviewposition="Small Business Owner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalFeauters;
