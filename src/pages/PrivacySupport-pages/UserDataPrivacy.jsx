import React from "react";
import Bredcum from "../../components/Bredcum";
import Box1 from "../../components/Box1";
import img from "/images/box-img-59.png";
import Testimonials from "../../components/Testimonials";
import Box1Reverse from "../../components/Box1Reverse";
import Faqs from "../../components/Faqs";
import Box3 from "../../components/Box3";

const UserDataPrivacy = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={false}
          ShowBredcum={true}
          Titletext="User Data Privacy"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Box1
            H1text="Empowering You with Transparency and Control Over Your Data"
            ButText="Your Privacy, Our Priority"
            PText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. Nam volutpat mauris in pharetra interdum. Quisque ultrices sem vitae arcu dignissim tempus. Nullam ac elit ac elit pharetra semper suscipit vitae sapien. Maecenas in vestibulum massa, et vulputate purus. Nullam libero lorem, tincidunt eu enim sodales, hendrerit iaculis turpis. 
                Duis condimentum volutpat nunc, eget convallis dui scelerisque at. Vestibulum elementum ex sit amet nibh imperdiet,"
            But2Link="/chat"
            But2Text="Sign Up for Early Access"
            imglink={img}
            bgimgcode="/images/box1-bg-img.png"
          />
        </div>
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Box3
            HeadingText="Protected Shield"
            PText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. 
            Nam volutpat mauris in pharetra interdum. Quisque ultrices sem vitae arcu dignissim tempus. "
            imglink="/images/internet-security.png"
            bgcolorcode="#E0E7FF"
          />
          <Box3
            HeadingText="Data Protective"
            PText=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. 
            Nam volutpat mauris in pharetra interdum. Quisque ultrices sem vitae arcu dignissim tempus. "
            imglink="/images/data-analytics.png"
            bgcolorcode="#ECFCCBF"
          />
          <Box3
            HeadingText="Network"
            PText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a nunc eros. 
            Nam volutpat mauris in pharetra interdum. Quisque ultrices sem vitae arcu dignissim tempus. "
            imglink="/images/network.png"
            bgcolorcode="#ECFCCB"
          />
        </div>

        <div>
          <Testimonials />
        </div>
        <div>
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default UserDataPrivacy;
