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
        <li className="hover:bg-white rounded-full lg:text-[12px] lg:p-0 hover:rounded-full text-black md:text-white hover:text-primary">
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/personalized"}>
        <li className="hover:bg-white rounded-full lg:text-[12px] text-black md:text-white hover:text-primary">
          <a>Personalized</a>
        </li>
      </Link>
      <Link to={"workflows"}>
        <li className="hover:bg-white rounded-full lg:text-[12px] text-black md:text-white hover:text-primary">
          <a>Workflows</a>
        </li>
      </Link>
      <li className="hover:bg-white rounded-full lg:text-[12px] text-black md:text-white hover:text-primary">
        <details>
          <summary>Privacy & Support</summary>
          <ul className="p-2 w-full lg:w-[280px]">
            <li className="hover:bg-white rounded-full text-black  hover:text-primary">
              <a>Support & Help</a>
            </li>
            <li className="hover:bg-white rounded-full text-black hover:text-primary">
              <a>User Data Privacy</a>
            </li>
            <li className="hover:bg-white rounded-full text-black hover:text-primary">
              <a>Full Privacy Control</a>
            </li>
          </ul>
        </details>
      </li>
      <Link to={"global-features"}>
        <li className="hover:bg-white rounded-full lg:text-[12px] text-black md:text-white hover:text-primary">
          <a>Global Feauters</a>
        </li>
      </Link>
      <li className="hover:bg-white rounded-full lg:text-[12px] text-black md:text-white hover:text-primary ">
        <details>
          <summary>My Life Hub</summary>
          <ul className="p-2 w-full lg:w-[280px]">
            <li className="hover:bg-white hover:text-primary  text-black rounded-full ">
              <a>Community</a>
            </li>
            <li className="hover:bg-white rounded-full text-black hover:text-primary ">
              <a>Team & Family Sharing</a>
            </li>
            <li className="hover:bg-white rounded-full text-black hover:text-primary ">
              <a>User Analytics Dashboard</a>
            </li>
            <li className="hover:bg-white rounded-full text-black hover:text-primary ">
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
      <div className="flex flex-row bg-base-100 p-2   justify-between items-center w-full gap-0 ">
        <div className=" flex justify-center items-center lg:hidden">
          <div className="dropdown px-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-primary text-white p-2 lg:hidden"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Navbar />
              </ul>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[40%]  p-2  bg-white md:-mr-[30px] md:z-10 md:rounded-b-3xl md:-mt-[5.5px]">
          <img
            src="./images/asksophia-logo.png"
            alt="logo"
            className="w-[120px] h-full lg:w-[150px] lg:h-[50px]"
          />
        </div>

        <div className=" lg:flex lg:justify-center lg:items-center w-full p-1 rounded-lg hidden  bg-gradient-to-r from-[#3639b4] to-[#191b83] ">
          <div className=" w-fit hidden lg:flex px-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-full  justify-center items-center ">
            <ul className="menu menu-horizontal  ">
              <Navbar />
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center items-center lg:w-[40%]  p-2  bg-white md:-ml-[30px] md:z-10 md:rounded-b-3xl md:-mt-[4px]">
          <button className="bg-primary px-8 py-3 md:px-12 rounded-full text-white whitespace-nowrap ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
