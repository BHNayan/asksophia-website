import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import Rating from "@mui/material/Rating";
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

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
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Integrating my daily tasks with AskSophia was a
                    game-changer. The personalized reminders mean I never miss a
                    beat, whether it’s work-related or personal.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Jordan
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Digital Marketer
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia helps me balance my work and personal life
                    seamlessly. It’s like having a personal assistant who knows
                    me well.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Jake
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Entrepreneur
                  </span>
                </div>
              </div>
            </div>
            <div className="  h-[350px] justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia is like a personal assistant who reads my mind.
                    Work-life balance finally achieved!
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Usman Zafar
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    UI UX Designer
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia keeps me organized and on top of things. Like having
                    a personal assistant who knows the educator's struggle.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Michael
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Teacher
                  </span>
                </div>
              </div>
            </div>
            <div className="   h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia helps me balance my work and personal life
                    seamlessly. It’s like having a personal assistant who knows
                    me well.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Jake
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Entrepreneur
                  </span>
                </div>
              </div>
            </div>
            <div className="  h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    I've discovered so many new interests through the news
                    digest. AskSophia doesn't just know what I like; it knows
                    what I'll love
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Morgan
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Artist and Educator
                  </span>
                </div>
              </div>
            </div>
            <div className="   h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia keeps me organized and on top of things. Like having
                    a personal assistant who knows the educator's struggle.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Michael
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Teacher
                  </span>
                </div>
              </div>
            </div>
            <div className="   h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia helps me balance my work and personal life
                    seamlessly. It’s like having a personal assistant who knows
                    me well.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Jake
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Entrepreneur
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Sophia keeps me organized and on top of things. Like having
                    a personal assistant who knows the educator's struggle.
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Michael
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Teacher
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    Finding reliable DIY tips used to take hours. With
                    AskSophia, I get the best tutorials suited to my skills in
                    minutes
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Casey
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    DIY Enthusiast
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    AskSophia transformed my research process. It feels like it
                    knows exactly what I'm looking for before I even finish
                    typing
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Sam
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    Graduate Student
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-[350px]  justify-center items-center shadow-lg border p-2  rounded-xl">
              <div className="flex flex-col justify-around items-start gap-4">
                <div>
                  <FaQuoteLeft className="text-[#CCCFD3] h-8 w-8" />
                </div>
                <div>
                  <p className=" text-slate-950 text-[16px] md:text-lg font-normal font-['Plus Jakarta Sans'] leading-relaxed">
                    The interactive exercises feel like games, making it easy to
                    stay motivated. I’ve learned more French in the last two
                    months with AskSophia than I did in an entire semester at
                    college!
                  </p>
                </div>
                <div className="p-2">
                  <Rating name="read-only" value={5} readOnly />
                  <p className="text-slate-950 text-base font-bold font-['Plus Jakarta Sans']">
                    Priya
                  </p>
                  <span className="text-slate-400 text-sm font-normal font-['Plus Jakarta Sans']">
                    University Student
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
