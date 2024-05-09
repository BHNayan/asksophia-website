import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-51.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";

const MusicDiscovery = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Music Discovery"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Uncover Your Next Favorite Tune with AskSophia’s Music Discovery"
            ButText="Music Discovery"
            PText="Embark on a musical journey like no other with AskSophia’s Music Discovery. Powered by AI, AskSophia 
            tunes into your musical tastes and moods to craft playlists and suggest songs that are perfectly attuned to you. 
            From uncovering hidden gems to reconnecting you with classic hits, your soundtrack is waiting to be discovered."
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="p-2 md:p-10">
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Let us be the bridge to your musical exploration"
            ptext="Sign up for early access now, and let’s start this symphony of discovery together."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-52.png"
          />
        </div>
        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default MusicDiscovery