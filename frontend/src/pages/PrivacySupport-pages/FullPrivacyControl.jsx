import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-60.png";
import Testimonials from "../../components/Testimonials";
import Box4 from "../../components/Box4";

const FullPrivacyControl = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="Full Privacy Control"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Customize Your Privacy Settings for Ultimate Peace of Mind"
            ButText="Complete Control at Your Fingertips "
            PText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. Nam volutpat mauris in pharetra interdum. 
                Quisque ultrices sem vitae arcu dignissim tempus. Nullam ac elit ac elit pharetra semper suscipit vitae sapien. Maecenas in vestibulum massa, et vulputate purus. 

                Nullam libero lorem, tincidunt eu enim sodales, hendrerit iaculis turpis. Duis condimentum volutpat nunc, eget convallis dui scelerisque at. Vestibulum elementum ex sit amet nibh imperdiet, "
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div>
          <Box4
            smheadingText="Join the AskSophia community"
            headingText="Don’t settle for less when it comes to your privacy"
            ptext="Adjust your settings in AskSophia now to ensure your experience is safe, secure, and exactly how you want it."
            bttext="Sign Up for Early Access "
            imglink="images/box-img-61.png"
          />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default FullPrivacyControl;
