import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { Dropdown } from "flowbite-react";
import { useModal } from '../Context/ModalProvider';

const MainNavbar = ({ closeMenu }) => {
  return (
    <>
      <Link to={"/"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/personalized"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a>Personalized</a>
        </li>
      </Link>
      <Link to={"workflows"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a>Workflows</a>
        </li>
      </Link>
      <Link to={"global-features"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a>Global Feauters</a>
        </li>
      </Link>

      <div className="flex justify-center items-center -mt-[5px] -ml-[10px]">
        <Dropdown
          size="sm"
          label="Privacy & Support"
          className="hover:bg-white  list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary"
        >
          <Dropdown.Item>
            <Link to={"support-help"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black  hover:text-primary">
                <a>Support & Help</a>
              </li>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"user-data-privacy"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a>User Data Privacy</a>
              </li>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"full-privacy-control"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a>Full Privacy Control</a>
              </li>
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex justify-center items-center -mt-[5px] -ml-[12px]">
        <Dropdown
          size="sm"
          label="My Life Hub"
          className="hover:bg-white  list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary"
        >
          <Dropdown.Item>
            <Link to={"askSophia-community"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black  hover:text-primary">
                <a>Asksophia Community</a>
              </li>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"team-family-sharing"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a>Team & Family Sharing</a>
              </li>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"user-analytics-dashboard"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a>User Analytics Dashboard</a>
              </li>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"your-lifestyle-manager-chatbot"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a>Your Lifestyle Manager Chatbot</a>
              </li>
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
};
const Navbar = ({ closeMenu }) => {
  return (
    <>
      <Link to={"/"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a onClick={closeMenu}>Home</a>
        </li>
      </Link>
      <Link to={"/personalized"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a onClick={closeMenu}>Personalized</a>
        </li>
      </Link>
      <Link to={"workflows"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a onClick={closeMenu}>Workflows</a>
        </li>
      </Link>
      <Link to={"global-features"}>
        <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
          <a onClick={closeMenu}>Global Feauters</a>
        </li>
      </Link>

      <li className="hover:bg-white rounded-full  list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary">
        <details>
          <summary>Privacy & Support</summary>

          <ul className="p-2 w-full lg:w-[280px]">
            <Link to={"support-help"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black  hover:text-primary">
                <a onClick={closeMenu}>Support & Help</a>
              </li>
            </Link>

            <Link to={"user-data-privacy"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a onClick={closeMenu}>User Data Privacy</a>
              </li>
            </Link>
            <Link to={"full-privacy-control"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a onClick={closeMenu}>Full Privacy Control</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>

      <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary ">
        <details>
          <summary>My Life Hub</summary>
          <ul className="p-2 w-full lg:w-[280px] ">
            <Link to={"askSophia-community"}>
              <li className="hover:bg-white hover:text-primary list-none font-semibold lg:text-[12px] xl:text-[12px]  text-black rounded-full ">
                <a onClick={closeMenu}>Asksophia Community</a>
              </li>
            </Link>
            <Link to={"team-family-sharing"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
                <a onClick={closeMenu}>Team & Family Sharing</a>
              </li>
            </Link>
            <Link to={"user-analytics-dashboard"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
                <a onClick={closeMenu}>User Analytics Dashboard</a>
              </li>
            </Link>
            <Link to={"your-lifestyle-manager-chatbot"}>
              <li className="hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
                <a onClick={closeMenu}>Your Lifestyle Manager Chatbot</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>
    </>
  );
};

const Header = () => {
  const { openModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex flex-row bg-white justify-between items-center w-full">
        <div className="flex justify-center items-center bg-white xl:hidden">
          <div className="dropdown  px-4 bg-white" ref={menuRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-primary text-white p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoIosClose className="h-8 w-8" />
              ) : (
                <CgMenuLeft className="h-8 w-8" />
              )}
            </div>
            {isMenuOpen && (
              <div className="overlay fixed inset-0 bg-black bg-opacity-70 z-50">
                <div className="sidebar absolute top-0 left-0 h-full bg-white  p-2">
                  <div className="flex flex-row justify-between gap-4 p-1">
                    <Link to={"/"}>
                      <img
                        src="./images/asksophia-logo.png"
                        alt="logo"
                        onClick={closeMenu}
                      />
                    </Link>
                    <IoIosClose
                      className="h-8 w-8 cursor-pointer"
                      onClick={closeMenu}
                    />
                  </div>

                  <div className="flex flex-col gap-8 bg-white">
                    <div className="p-2 bg-white">
                      <ul className="menu menu-md  bg-white p-2  w-[90%]  ">
                        <Navbar closeMenu={closeMenu} />
                      </ul>
                    </div>
                    <div className="flex w-full justify-center items-center p-2 ">
                      <button className="bg-primary px-8 py-3 xl:px-12 rounded-full text-white whitespace-nowrap" onClick={openModal}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center w-full lg:w-[30%] p-3 bg-white lg:rounded-tr-3xl lg:rounded-br-3xl">
          <Link to={"/"}>
            <img
              src="./images/asksophia-logo.png"
              alt="logo"
              className="w-full h-full  object-contain"
            />
          </Link>
        </div>

        <div className="hidden xl:flex justify-center items-center w-full bg-gradient-to-r from-[#3639b4] to-[#191b83] p-3 rounded-3xl">
          <div className="w-full hidden xl:flex px-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-full justify-center items-center whitespace-nowrap">
            <ul className="menu menu-horizontal menu-sm ">
              <MainNavbar />
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-center items-center p-3 bg-white lg:w-[30%] lg:rounded-tl-3xl lg:rounded-bl-3xl">
          <button className="bg-primary px-8 py-3 xl:px-12 rounded-full text-white whitespace-nowrap" onClick={openModal}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
