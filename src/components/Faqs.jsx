import React from "react";
import Faq from "react-faq-component";
import Button from "./Button";

const data = {
  rows: [
    {
      title: "How Exactly Does AskSophia Simplify My Daily Online Activities?",
      content: `AskSophia leverages advanced AI to learn your preferences and habits, 
      simplifying tasks like managing schedules, finding information, or shopping online. 
      For example, if you regularly search for tech news in the morning, 
      Sophia will start presenting you with a personalized digest of tech news without you having to ask.`,
    },
    {
      title:
        "Can You Give Examples of How AskSophia Personalizes My Experience?",
      content: `AskSophia leverages advanced AI to learn your preferences and habits, 
        simplifying tasks like managing schedules, finding information, or shopping online. 
        For example, if you regularly search for tech news in the morning, 
        Sophia will start presenting you with a personalized digest of tech news without you having to ask.`,
    },
    {
      title:
        "How Does AskSophia Ensure My Personal Information Remains Secure?",
      content: `AskSophia leverages advanced AI to learn your preferences and habits, 
        simplifying tasks like managing schedules, finding information, or shopping online. 
        For example, if you regularly search for tech news in the morning, 
        Sophia will start presenting you with a personalized digest of tech news without you having to ask.`,
    },
    {
      title:
        "How Can AskSophia Facilitate Collaboration for Families or Teams?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What Subscription Plans Are Available, and How Do They Differ",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "How Can AskSophia Assist Me with Online Shopping and Planning?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "Does AskSophia Offer Entertainment Recommendations?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title:
        " Is There Technical Support Available If I Need Help with AskSophia?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "How Is AskSophia Accessible on Different Devices?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: " What Sets AskSophia Apart from Other AI Assistants?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2">
      <Button BTtext="FAQ'S" />
      <h1 className="w-full md:w-[613px] text-center text-zinc-900 text-[24px] md:text-[44px] font-semibold font-['Mona Sans'] leading-[36px] md:leading-[56px] capitalize">
        Frequently ask Questions
      </h1>
      <div className="p-2 md:pt-4 md:pb-4 md:pl-24 md:pr-24">
        <Faq
          data={data}
          styles={{
            bgColor: "white",
            rowTitleColor: "black",
            rowTitleTextSize: "medium",
            rowContentColor: "#48484a",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "10px",
            rowContentPaddingRight: "10px",
            arrowColor: "black",
          
            
          }}
          config={{
            arrowIcon: "+",
            tabFocus: true,
        }}
        />
      </div>
    </div>
  );
};

export default Faqs;
