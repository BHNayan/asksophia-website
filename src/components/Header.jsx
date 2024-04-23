import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdMenu,
  IoIosClose,
} from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import Bredcum from "./Bredcum";

const Navbar = () => {
  return (
    <>
      <Link to={"/"}>
        <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary">
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/personalized"}>
        <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary">
          <a>Personalized</a>
        </li>
      </Link>
      <Link to={"workflows"}>
        <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary">
          <a>Workflows</a>
        </li>
      </Link>
      <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary">
        <details>
          <summary>Privacy & Support</summary>
          <ul className="p-2 w-full lg:w-[280px]">
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black  hover:text-primary">
              <a>Support & Help</a>
            </li>
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black hover:text-primary">
              <a>User Data Privacy</a>
            </li>
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black hover:text-primary">
              <a>Full Privacy Control</a>
            </li>
          </ul>
        </details>
      </li>
      <Link to={"global-features"}>
        <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary">
          <a>Global Feauters</a>
        </li>
      </Link>
      <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black lg:text-white hover:text-primary ">
        <details>
          <summary>My Life Hub</summary>
          <ul className="p-2 w-full lg:w-[280px]">
            <li className="hover:bg-white hover:text-primary font-semibold lg:text-[12px] xl:text-[14px]  text-black rounded-full ">
              <a>Community</a>
            </li>
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black hover:text-primary ">
              <a>Team & Family Sharing</a>
            </li>
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black hover:text-primary ">
              <a>User Analytics Dashboard</a>
            </li>
            <li className="hover:bg-white rounded-full font-semibold lg:text-[12px] xl:text-[14px] text-black hover:text-primary ">
              <a>Your Lifestyle Manager Chatbot</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row bg-base-100 p-2 justify-between items-center w-full gap-0 ">
        <div className=" flex justify-center items-center xl:hidden">
          <div className="dropdown px-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-primary text-white p-2 xl:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoIosClose className="h-8 w-8" />
              ) : (
                <CgMenuLeft className="h-8 w-8" />
              )}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <Navbar />
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full xl:w-[40%]  p-2  bg-white md:-mr-[15px] xl:z-10 md:rounded-br-3xl xl:rounded-bl-lg xl:-mt-[5.5px]">
          <img
            src="./images/asksophia-logo.png"
            alt="logo"
            className="w-[120px] h-full xl:w-[150px] xl:h-[50px]"
          />
        </div>

        <div className=" xl:flex xl:justify-center xl:items-center w-full p-1 rounded-full hidden  bg-gradient-to-r from-[#3639b4] to-[#191b83] ">
          <div className=" w-fit hidden xl:flex px-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-full  justify-center items-center ">
            <ul className="menu menu-horizontal  ">
              <Navbar />
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center items-center xl:w-[40%]  p-2  bg-white xl:-ml-[15px] xl:z-10 md:rounded-bl-3xl xl:rounded-br-lg xl:-mt-[4px]">
          <button className="bg-primary px-8 py-3 xl:px-12 rounded-full text-white whitespace-nowrap ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
