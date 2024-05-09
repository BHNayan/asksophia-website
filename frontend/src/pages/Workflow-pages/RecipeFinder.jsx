import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/recepi-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box3 from "../../components/Box3";

const RecipeFinder = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Recipe Finder"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Discover Culinary Adventures Tailored Just for You"
            ButText="Recipe Finder"
            PText="Unlock the Joy of Cooking: AskSophia’s Recipe Finder is your gateway to culinary inspiration, 
            tailored to your taste preferences, dietary needs, and skill level.
            From quick weekday dinners to impressive weekend feasts, we bring a world of flavors right to your kitchen."
            But2Text="Start Shopping Smarter,Not Harder"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Personalized Recipes"
            PText="Whether you’re vegan, keto, or exploring international cuisines,
          AskSophia curates recipes just for you."
            imglink="/images/salad-img-1.png"
            bgcolorcode="#FEF3C7"
          />
          <Box3
            HeadingText="Smart Grocery Lists"
            PText=" Automatically generate shopping lists from your selected recipes, 
          saving time and ensuring you have everything you need."
            imglink="/images/food-img-1.png"
            bgcolorcode="#E0E7FF"
          />
          <Box3
            HeadingText="Interactive Guides"
            PText="Step-by-step cooking instructions and video tutorials make following recipes a breeze, 
          whether you’re a novice or a seasoned chef."
            imglink="/images/whisk-and-bowl-img-1.png"
            bgcolorcode="#FEF3C7"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default RecipeFinder;
