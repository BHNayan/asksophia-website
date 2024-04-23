import React from "react";
import Button from "../components/Button";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import WorkflowList from "../components/WorkflowList";
import Bredcum from "../components/Bredcum";

const Home = () => {
  return (
    <>
      <div>
        <Bredcum
          ShowTitle={true}
          ShowButton={true}
          ShowBredcum={false}
          Titletext="Sophia, Your AI Guide, for a Personalized Online Journey"
        />
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
