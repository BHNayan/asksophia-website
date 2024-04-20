import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/online-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box2 from "../../components/Box2";

const OnlineShopping = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Online Shopping"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Transform Your Shopping Experience, Personalized and Simplified with AskSophia"
            ButText="Online Shopping"
            PText="Discover a smarter way to shop online. AskSophia's Online Shopping assistant brings you personalized product recommendations, 
            price comparisons, and exclusive deals directly to your dashboard. 
            Enjoy a seamless shopping experience tailored to your preferences and budget, all in one place."
            But2Text="Start Shopping Smarter,Not Harder"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-2 w-full ">
          <Box2 img="/images/box-img-10.png" bgcolor="#F5F0BC" />
          <Box2 img="/images/box-img-11.png" bgcolor="#E0E7FF" />
          <Box2 img="/images/box-img-12.png" bgcolor="#DCFCE7" />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default OnlineShopping;
