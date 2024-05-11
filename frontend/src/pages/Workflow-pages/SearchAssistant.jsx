import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/search-img-1.png";
import Testimonials from "../../components/Testimonials";
import Box2 from "../../components/Box2";

const SearchAssistant = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          ShowsubBredcum={true}
          Titletext="Search Assistant"
          bredtxt="Search Assistant"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Find Exactly What You're Looking For – Faster & Smarter with AskSophia"
            ButText="Search Assistant"
            PText="Cut through the noise of endless search results with AskSophia’s Search Assistant. 
            Tailored to understand your preferences and needs, our intelligent search simplifies finding the right information, 
            from quick facts to deep research. 
            It’s like having a personal librarian at your fingertips."
            But2Text="Streamline Your Search"
            But2Link="/chat"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-2 w-full ">
          <Box2 img="/images/box-img-4.png" bgcolor="#FFEDD5" />
          <Box2 img="/images/box-img-5.png" bgcolor="#F8E7CF" />
          <Box2 img="/images/box-img-6.png" bgcolor="#E5F4C5" />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default SearchAssistant;
