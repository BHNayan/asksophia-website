import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when location changes
  }, [location]);
  return (
    <div className="p-4 bg-black flex flex-col gap-2 overflow-x-hidden">
      <div className="flex flex-row justify-around items-center gap-2 w-full px-4 lg:px-20 py-2 lg:py-4">
        {/** footer left Text */}
        <div className="w-full justify-center items-center">
          <div className="w-full lg:w-[650px] gap-4">
            <span className="text-yellow-300 text-[25px] md:text-[40px] lg:text-[65px] font-semibold font-['Mona Sans'] capitalize leading-[50px] lg:leading-[81px]">
              Ready
            </span>
            <span className="text-slate-50 text-[30px] md:text-[40px] lg:text-[65px] font-semibold font-['Onest'] capitalize leading-[50px] lg:leading-[81px]">
              {" "}
            </span>
            <span className="text-slate-50 text-[25px] md:text-[40px] lg:text-[65px] font-semibold font-['Plus Jakarta Sans'] capitalize leading-[50px] lg:leading-[81px]">
              to be{" "}
            </span>
            <span className="text-orange-300 text-[25px] md:text-[40px] lg:text-[65px] font-semibold font-['Mona Sans'] capitalize leading-[50px] lg:leading-[81px]">
              surprised?
            </span>
            <span className="text-slate-50 text-[30px] md:text-[40px] lg:text-[65px] font-semibold font-['Onest'] capitalize leading-[50px] lg:leading-[81px]">
              {""}
            </span><br></br>
            <a href='https://meetasksophia.com/'> 
            <span className="text-slate-50 text-[25px] md:text-[40px] lg:text-[65px] font-semibold font-['Plus Jakarta Sans'] capitalize leading-[50px] lg:leading-[81px]">
              Sign in Now
            </span>
            </a>
          </div>
        </div>
        {/** footer Right Logo */}
        <div className="w-full flex justify-end items-center">
          <img
            src="./images/footer-right-img.png"
            alt="footer-img"
            className="w-[340px] h-full lg:h-[340px]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-2 p-2 text-white">
        {/** footer Logo */}
        <Link to="/">
          <div className="flex flex-row justify-center items-center gap-4 p-2">
            <img
              src="./images/asksophia-logo-white.png"
              alt="Asksophia-footer logo"
              className=" h-[40px] md:w-[150px] md:h-[50px]"
            />
          </div>
        </Link>
        {/** footer menu */}
        <div className="flex flex-row justify-center items-center gap-2 p-2">
          <nav className="p-2 lg:p-3 bg-white bg-opacity-10 rounded-full border border-white border-opacity-5 justify-center items-center inline-flex whitespace-nowrap">
            <ul className="flex flex-row gap-4 justify-center items-center ">
              <li className="text-slate-100 text-[13px] lg:text-sm font-medium font-['Plus Jakarta Sans'] hover:text-primary">
                <Link to="/">Home</Link>
              </li>
              <li className="text-slate-100 text-[13px] lg:text-sm font-medium font-['Plus Jakarta Sans'] hover:text-primary">
                <Link to="/workflows">Workflows</Link>
              </li>
              <li className="text-slate-100 text-[13px] lg:text-sm font-medium font-['Plus Jakarta Sans'] hover:text-primary">
                <Link to="/global-features">Global Features</Link>
              </li>
              <li className="text-slate-100 text-[13px] lg:text-sm font-medium font-['Plus Jakarta Sans'] hover:text-primary">
                <Link to="/personalized">Personalized</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/** footer social icon */}
        <div className="flex flex-row justify-center items-center gap-4 p-2">
          <div className="flex w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white bg-opacity-10 rounded-full border border-white border-opacity-5 justify-center items-center cursor-pointer">
            <a
              href="mailto:asksophia@thejooltgroup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegEnvelope className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" />
            </a>
          </div>
          <div className="flex w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white bg-opacity-10 rounded-full border border-white border-opacity-5 justify-center items-center cursor-pointer">
            <Link to="https://www.facebook.com/meetasksophia?mibextid=ZbWKwL">
              <FaFacebookF className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" />
            </Link>
          </div>
          <div className="flex w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white bg-opacity-10 rounded-full border border-white border-opacity-5 justify-center items-center cursor-pointer">
            <Link to="https://www.instagram.com/meetasksophia?igsh=MTUydDRmZHl3cDNuMA==">
              <FaInstagram className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" />
            </Link>
          </div>
          <div className="flex w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white bg-opacity-10 rounded-full border border-white border-opacity-5 justify-center items-center cursor-pointer">
            <Link to="https://www.tiktok.com/@meetasksophia">
              <FaTiktok className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        <p className="text-center text-white text-opacity-40 text-sm font-extralight md:font-medium font-['Plus Jakarta Sans']">
          © 2024 AskSophia Copyrights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
