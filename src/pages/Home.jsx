import React from "react";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import WorkflowList from "../components/WorkflowList";
import HomeBox from "../components/HomeBox";

const Home = () => {
  return (
    <>
      <div>
        <HomeBox />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <div>
          <WorkflowList />
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
