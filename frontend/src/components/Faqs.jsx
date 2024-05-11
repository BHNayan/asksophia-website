import React from "react";
import Faq from "react-faq-component";
import Button from "./Button";

const data = {
  rows: [
    {
      title: "How Exactly Does AskSophia Simplify My Daily Online Activities?",
      content: <p>
      AskSophia leverages advanced AI to learn your preferences and habits,
       simplifying tasks like managing schedules, finding information, or shopping online. 
       For example, if you regularly search for tech news in the morning, Sophia will start presenting you 
       with a personalized digest of tech news without you having to ask.</p>,
    },
    {
      title:
        "Can You Give Examples of How AskSophia Personalizes My Experience?",
        content: <p>
        Absolutely! If you’re a fitness enthusiast, Sophia could suggest 
        workout plans based on your goals and progress. Or, if you love cooking, 
        Sophia might recommend recipes tailored to your dietary preferences 
        and even help compile shopping lists based on those recipes.</p>,
    },
    {
      title:
        "How Does AskSophia Ensure My Personal Information Remains Secure?",
       content: <p>
      AskSophia employs state-of-the-art encryption and follows stringent 
      data protection laws to secure your information. We only use your data 
      to enhance your Sophia experience, never sharing it with third parties without your explicit consent.</p>,
    },
    {
      title:
        "How Can AskSophia Facilitate Collaboration for Families or Teams?",
      content: <p>
      Sophia allows you to share calendars, lists, and tasks seamlessly. For instance, 
      families can coordinate schedules and shopping lists, while work teams can manage projects 
      and deadlines, all within a secure and intuitive platform.</p>,
    },
    {
      title: "What Subscription Plans Are Available, and How Do They Differ",
      content: <p>We offer several plans, including a free option. 
        ‘My Digital BFF’ adds more personalization and features. ‘Queen B Mode’ unlocks all premium features, 
        while ‘AskSophia Community’ supports team and family collaboration. Each plan is designed to cater to 
        different needs, ensuring there’s an option that fits everyone.</p>,
    },
    {
      title: "How Can AskSophia Assist Me with Online Shopping and Planning?",
      content: <p>Sophia uses your shopping history and preferences to suggest 
        relevant products, alert you to deals, and even track price drops. When planning, 
        Sophia can organize your calendar, suggest travel itineraries, or help you discover local events based on your interests.</p>,
    },
    {
      title: "Does AskSophia Offer Entertainment Recommendations?",
      content: <p> Yes, based on your preferences, Sophia can recommend movies, 
        books, podcasts, and music you’ll love, keeping your entertainment fresh and aligned with your tastes.</p>,
    },
    {
      title:
        " Is There Technical Support Available If I Need Help with AskSophia?",
      content: <p>
      Certainly! Our dedicated support team is available via email, 
      live chat, and phone. Plus, our comprehensive Help Center provides guides, 
      FAQs, and tutorials to help you make the most of AskSophia.</p>,
    },
    {
      title: "How Is AskSophia Accessible on Different Devices?",
      content: <p>AskSophia is built with a responsive design, 
        ensuring a seamless experience whether you’re on a smartphone, tablet, 
        or computer. Your settings and preferences sync across devices for continuous, integrated use.</p>,
    },
    {
      title: " What Sets AskSophia Apart from Other AI Assistants?",
      content: <p>
      Unlike other assistants, AskSophia offers a deeply personalized experience, 
      tailored to your unique lifestyle. With Sophia, you’re not just getting an AI assistant;
       you’re getting a digital companion that understands and anticipates your needs, supported by a 
       commitment to privacy and data security that’s second to none.</p>,
    },
  ],
};

const Faqs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2">
      <Button BTtext="FAQ'S" />
      <h1 className="w-full md:w-[60%] text-center text-zinc-900 text-[24px] md:text-[44px] font-semibold font-['Mona Sans'] leading-[36px] md:leading-[56px] capitalize">
        Frequently ask Questions
      </h1>
      <div className="w-full md:w-[65%]  p-2 md:pt-4 md:pb-4 md:pl-24 md:pr-24">
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
