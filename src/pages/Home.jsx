import React from "react";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import WorkflowList from "../components/WorkflowList";
import HomeBox from "../components/HomeBox";
import HomeBox2 from "../components/HomeBox2";
import HomeBox3 from "../components/HomeBox3";
import HomeBox4 from "../components/HomeBox4";
import PricingBox from "../components/PricingBox";

const Home = () => {
  return (
    <>
      <div>
        <HomeBox />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div>
          <HomeBox2 />
        </div>
        <div>
          <HomeBox3 />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <div>
          <WorkflowList ptext="Streamlining Your Online Activities" />
        </div>
        <div>
          <HomeBox4 />
        </div>
        <div>
          <PricingBox />
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

export default Home;
