import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import Rating from "@mui/material/Rating";
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const testimonial = [
  {
    id: 1,
    name: "Jordan",
    role: "Digital Marketer",
    review:
      "Integrating my daily tasks with AskSophia was a game-changer. The personalized reminders mean I never miss a beat, whether it’s work-related or personal.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jake",
    role: "Entrepreneur",
    review:
      "Sophia helps me balance my work and personal life seamlessly. It’s like having a personal assistant who knows me well.",
    rating: 5,
  },
  {
    id: 3,
    name: "Usman Zafar",
    role: "UI UX Designer",
    review:
      "Sophia is like a personal assistant who reads my mind. Work-life balance finally achieved!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael",
    role: "Teacher",
    review:
      "Sophia keeps me organized and on top of things. Like having a personal assistant who knows the educator's struggle.",
    rating: 5,
  },
  {
    id: 5,
    name: "Morgan",
    role: "Artist and Educator",
    review:
      "I've discovered so many new interests through the news digest. AskSophia doesn't just know what I like; it knows what I'll love",
    rating: 5,
  },
  {
    id: 6,
    name: "Casey",
    role: "DIY Enthusiast",
    review:
      "Finding reliable DIY tips used to take hours. With AskSophia, I get the best tutorials suited to my skills in minutes",
    rating: 5,
  },
  {
    id: 7,
    name: "Sam",
    role: "Graduate Student",
    review:
      "AskSophia transformed my research process. It feels like it knows exactly what I'm looking for before I even finish typing",
    rating: 5,
  },
  {
    id: 8,
    name: "Priya",
    role: "University Student",
    review:
      "The interactive exercises feel like games, making it easy to stay motivated. I’ve learned more French in the last two months with AskSophia than I did in an entire semester at college!",
    rating: 5,
  },
  {
    id: 9,
    name: "Jake",
    role: "Entrepreneur",
    review:
      "Sophia helps me balance my work and personal life seamlessly. It’s like having a personal assistant who knows me well.",
    rating: 5,
  },
  {
    id: 10,
    name: "Michael",
    role: "Teacher",
    review:
      "Sophia keeps me organized and on top of things. Like having a personal assistant who knows the educator's struggle.",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col  items-center gap-2 p-2 mt-10 mb-10 ">
      <Button BTtext="Testimonials" />
      <h1
        className={`w-full md:w-[613px] text-center text-[24px] md:text-[44px] font-semibold font-['Mona Sans'] leading-normal md:leading-[56px] capitalize ${
          theme === "light" ? "text-zinc-900 " : "text-white "
        }`}
      >
        See How Others Are Benefiting from AskSophia
      </h1>
      <div className="slider-container w-full p-2 h-[420px]  justify-center items-center m-2 gap-2">
        <div className="p-2 md:p-6 overflow-x-hidden">
          <Slider {...settings}>
            {testimonial.map((item) => (
              <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
                <div className="flex flex-col justify-around items-start gap-4">
                  <div>
                    <FaQuoteLeft className="text-[#CCCFD3] h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <p
                      className={`text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed ${
                        theme === "light" ? "text-zinc-900 " : "text-white "
                      }`}
                    >
                      {item.review}
                    </p>
                  </div>
                  <div className="p-2">
                    <Rating name="read-only" value={item.rating} readOnly />
                    <p
                      className={`text-base font-bold font-['Plus Jakarta Sans'] ${
                        theme === "light" ? "text-zinc-900 " : "text-white "
                      }`}
                    >
                      {item.name}
                    </p>
                    <span
                      className={` text-sm font-normal font-['Plus Jakarta Sans'] ${
                        theme === "light" ? "text-zinc-900 " : "text-white "
                      }`}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
