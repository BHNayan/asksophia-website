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
      content: <p>
      AskSophia simplifies collaboration for families or teams through centralized communication, 
      shared calendars for scheduling, and task management tools for assigning responsibilities. With seamless file sharing capabilities, 
      members can easily coordinate activities and collaborate effectively, enhancing productivity and teamwork.</p>,
    },
    {
      title: "What Subscription Plans Are Available, and How Do They Differ",
      content: <p>We offer three subscription plans: "Digital BFF," "Queen B Mode," and "AskSophia Community," 
        available in both monthly and yearly options. 
        Each plan varies in features and benefits, tailored to different user needs and preferences, 
        providing flexibility and value for our users.</p>,
    },
    {
      title: "How Can AskSophia Assist Me with Online Shopping and Planning?",
      content: <p>AskSophia simplifies online shopping and planning by providing personalized 
        recommendations, helping you discover products and services tailored to your preferences and needs. Additionally, AskSophia can assist with organizing shopping lists, tracking deliveries, 
        and setting reminders for important dates, ensuring a seamless and stress-free shopping experience.</p>,
    },
    {
      title: "Does AskSophia Offer Entertainment Recommendations?",
      content: <p>Yes, AskSophia offers personalized entertainment recommendations 
        tailored to your preferences. Whether you're looking for movies, TV shows, music, books, or podcasts, AskSophia can 
        suggest content based on your interests, helping you discover new and enjoyable entertainment options.</p>,
    },
    {
      title:
        " Is There Technical Support Available If I Need Help with AskSophia?",
      content: <p>
      Yes, AskSophia provides technical support to assist users with any 
      questions or issues they may encounter. Our dedicated support team is available to address inquiries, 
      troubleshoot problems, and provide guidance to ensure a smooth and enjoyable experience with AskSophia.</p>,
    },
    {
      title: "How Is AskSophia Accessible on Different Devices?",
      content: <p>AskSophia is accessible on various devices, including smartphones, 
        tablets, laptops, and desktop computers. Our platform is optimized for responsiveness,
         ensuring a seamless user experience across different screen sizes and resolutions. Additionally, 
         AskSophia can be accessed through web browsers or dedicated mobile apps,
         providing flexibility and convenience for users to engage with our platform anytime, anywhere.</p>,
    },
    {
      title: " What Sets AskSophia Apart from Other AI Assistants?",
      content: <p>
      AskSophia stands out from other AI assistants due to its advanced natural 
      language processing capabilities, extensive knowledge base, and personalized 
      user experience. Unlike traditional AI assistants, AskSophia offers tailored 
      recommendations, understands context, and learns from user interactions to provide more 
      relevant and accurate responses over time. Additionally, AskSophia prioritizes 
      user privacy and security, ensuring that sensitive information is protected and handled responsibly.</p>,
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
