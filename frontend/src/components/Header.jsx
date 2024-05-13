import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosClose, IoIosArrowDown } from "react-icons/io";
import { CgMenuLeft } from "react-icons/cg";
import { Dropdown } from "flowbite-react";
import { useModal } from "../Context/ModalProvider";
import { Toggle } from "keep-react";
import { useTheme } from "../Context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Link to={"/"}>
        <li
          className={`hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] xl:text-white hover:text-primary ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <a onClick={closeMenu}>Home</a>
        </li>
      </Link>
      <Link to={"/personalized"}>
        <li
          className={`hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] xl:text-white hover:text-primary ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <a onClick={closeMenu}>Personalized</a>
        </li>
      </Link>
      <Link to={"workflows"}>
        <li
          className={`hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] xl:text-white hover:text-primary ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <a onClick={closeMenu}>Workflows</a>
        </li>
      </Link>
      <Link to={"global-features"}>
        <li
          className={`hover:bg-white rounded-full list-none font-semibold lg:text-[12px] xl:text-[12px] xl:text-white hover:text-primary ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <a onClick={closeMenu}>Global Feauters</a>
        </li>
      </Link>

      <li
        className={`hover:bg-white rounded-3xl w-full  list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <details>
          <summary>Privacy & Support</summary>

          <ul className="p-2 w-full lg:w-[280px]">
            <Link to={"support-help"}>
              <li className="hover:bg-white w-full rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black  hover:text-primary">
                <a onClick={closeMenu}>Support & Help</a>
              </li>
            </Link>

            <Link to={"user-data-privacy"}>
              <li className="hover:bg-white rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a onClick={closeMenu}>User Data Privacy</a>
              </li>
            </Link>
            <Link to={"full-privacy-control"}>
              <li className="hover:bg-white rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary">
                <a onClick={closeMenu}>Full Privacy Control</a>
              </li>
            </Link>
          </ul>
        </details>
      </li>

      <li
        className={`hover:bg-white rounded-3xl w-full  list-none font-semibold lg:text-[12px] xl:text-[12px] text-black xl:text-white hover:text-primary ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <details>
          <summary>My Life Hub</summary>
          <ul className="p-2 w-full lg:w-[280px] ">
            <Link to={"askSophia-community"}>
              <li className="hover:bg-white hover:text-primary list-none font-semibold lg:text-[12px] xl:text-[12px]  text-black rounded-3xl ">
                <a onClick={closeMenu}>Asksophia Community</a>
              </li>
            </Link>
            <Link to={"team-family-sharing"}>
              <li className="hover:bg-white rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
                <a onClick={closeMenu}>Team & Family Sharing</a>
              </li>
            </Link>
            <Link to={"user-analytics-dashboard"}>
              <li className="hover:bg-white rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
                <a onClick={closeMenu}>User Analytics Dashboard</a>
              </li>
            </Link>
            <Link to={"your-lifestyle-manager-chatbot"}>
              <li className="hover:bg-white rounded-3xl list-none font-semibold lg:text-[12px] xl:text-[12px] text-black hover:text-primary ">
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
  const { theme, toggleTheme } = useTheme();
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
      <div
        className={`flex flex-row justify-between items-center w-full ${
          theme === "light" ? "bg-white" : "bg-darkcolor"
        }`}
      >
        <div
          className={`flex justify-center items-center xl:hidden ${
            theme === "light" ? "bg-white" : "bg-darkcolor"
          }`}
        >
          <div
            className={`dropdown  px-4 ${
              theme === "light" ? "bg-white" : "bg-darkcolor"
            }`}
            ref={menuRef}
          >
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost p-2 ${
                theme === "light"
                  ? "bg-primary text-white hover:bg-black hover:text-white"
                  : "bg-white text-primary hover:bg-primary hover:text-white"
              }`}
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
                <div
                  className={`sidebar absolute top-0 left-0 h-full   p-2  ${
                    theme === "light" ? "bg-white" : "bg-darkcolor"
                  }`}
                >
                  <div
                    className={`flex flex-row justify-between gap-4 p-1  ${
                      theme === "light" ? "bg-white" : "bg-darkcolor"
                    }`}
                  >
                    {theme === "light" ? (
                      <Link to={"/"}>
                        <img
                          src="./images/asksophia-logo.png"
                          alt="logo"
                          onClick={closeMenu}
                        />
                      </Link>
                    ) : (
                      <Link to={"/"}>
                        <img
                          src="./images/asksophia-logo-white.png"
                          alt="logo"
                          onClick={closeMenu}
                          className="w-[190px] h-[50px]"
                        />
                      </Link>
                    )}

                    <IoIosClose
                      className={`h-8 w-8 cursor-pointer ${
                        theme === "light" ? " text-primary" : "text-white"
                      }`}
                      onClick={closeMenu}
                    />
                  </div>

                  <div
                    className={`flex flex-col gap-8  ${
                      theme === "light" ? "bg-white" : "bg-darkcolor"
                    }`}
                  >
                    <div
                      className={`p-2  ${
                        theme === "light" ? "bg-white" : "bg-darkcolor"
                      }`}
                    >
                      <ul
                        className={`menu menu-md p-2  w-[90%]  ${
                          theme === "light" ? "bg-white " : "bg-darkcolor "
                        }`}
                      >
                        <Navbar closeMenu={closeMenu} />
                      </ul>
                    </div>
                    <div className="flex w-full justify-center items-center p-2 ">
                      <button
                        className="bg-primary px-8 py-3 xl:px-12 rounded-full text-white whitespace-nowrap"
                        onClick={openModal}
                      >
                        Get Started
                      </button>
                    </div>
                    <div className="flex w-full justify-center items-center p-2">
                      <Toggle
                        label={theme === "light" ? "Light" : "Dark"}
                        size="lg"
                        withIcon={true}
                        onClick={toggleTheme}
                        className={
                          theme === "light" ? "bg-primary" : "bg-black"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className={`flex justify-center items-center w-full lg:w-[30%] p-3 lg:rounded-tr-3xl lg:rounded-br-3xl ${
            theme === "light" ? "bg-white" : "bg-darkcolor"
          }`}
        >
          {theme === "light" ? (
            <Link to={"/"}>
              <img
                src="./images/asksophia-logo.png"
                alt="logo"
                className="w-full h-full  object-contain"
              />
            </Link>
          ) : (
            <Link to={"/"}>
              <img
                src="./images/asksophia-logo-white.png"
                alt="logo"
                className="h-full w-full md:h-[40px]"
              />
            </Link>
          )}
        </div>

        <div className="hidden xl:flex justify-center items-center w-full bg-gradient-to-r from-[#3639b4] to-[#191b83] p-3 rounded-3xl">
          <div className="w-full hidden xl:flex px-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-full justify-center items-center whitespace-nowrap">
            <ul className="menu menu-horizontal menu-sm ">
              <MainNavbar />
            </ul>
          </div>
        </div>
        <div
          className={`flex flex-row w-full gap-1 justify-center items-center p-3  lg:w-[30%] lg:rounded-tl-3xl lg:rounded-bl-3xl ${
            theme === "light" ? "bg-white" : "bg-darkcolor"
          }`}
        >
          <button
            className="bg-primary px-8 py-3 xl:px-12 rounded-full text-white whitespace-nowrap "
            onClick={openModal}
          >
            Get Started
          </button>

          <div className="hidden md:flex w-[30%]">
            <Toggle
              label={theme === "light" ? "Light" : "Dark"}
              size="lg"
              withIcon={true}
              onClick={toggleTheme}
              className={theme === "light" ? "bg-primary" : "bg-black"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
