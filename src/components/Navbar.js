/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./navbar.css";

import Logo from "../images/logo.svg";
import hamburgerOpen from "../images/icon-menu.svg";
import hamburgerClose from "../images/icon-close-menu.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import arrowDown from "../images/icon-arrow-down.svg";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [changeHamburger, setChangeHamburger] = useState(false);
  const [isActive, setIsActive] = useState("");

  const getWidth = () => {
    // Geting the window width value saved to state
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // Listening in on the width size
    window.addEventListener("resize", getWidth);
  });

  // Width of small screens
  const smallerScreens = 620;

  // Mobile Navigation
  const navDropDown = document.getElementById("nav");

  // Open Hamburger
  const openMenu = () => {
    setChangeHamburger(!changeHamburger);
    navDropDown.classList.add("mobile");
  };

  // Closed Hamburger menu
  const closeMenu = () => {
    setChangeHamburger(!changeHamburger);
    navDropDown.classList.remove("mobile");
  };

  // Show Dropdown Nav
  const showDropDown = (e) => {
    setIsActive(e.target.textContent);
    if (isActive !== "") {
      setIsActive("");
    }
  };

  return (
    <nav>
      {/* Logo */}
      <a href="#">
        <img src={Logo} alt="Logo" className="logo_img" />
      </a>
      {/* Mobile Hamburgers */}
      {width < smallerScreens && !changeHamburger && (
        <button onClick={openMenu} className="hamburger-open">
          <img src={hamburgerOpen} alt="OpenNavbar" />
        </button>
      )}
      {width < smallerScreens && changeHamburger && (
        <button onClick={closeMenu} className="hamburger-open">
          <img src={hamburgerClose} alt="CloseNavbar" />
        </button>
      )}

      {/* Navigation Part */}

      <div className="nav" id="nav">
        <ul className="nav-list">
          <li className="nav-item nav-items_main">
            <a
              onClick={showDropDown}
              href="#"
              className="nav-link nav-link_main"
            >
              Features
              <img
                className="arrow"
                src={`${isActive === "Features" ? arrowUp : arrowDown}`}
                alt="arrow"
              />
            </a>
            <ul
              className={`nav-list_secondary ${
                isActive === "Features" ? "open" : ""
              }`}
            >
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Todo List
                </a>
              </li>
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Calendar
                </a>
              </li>
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Reminders
                </a>
              </li>
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Planning
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item nav-items_main">
            <a
              onClick={showDropDown}
              href="#"
              className="nav-link nav-link_main"
            >
              Company
              <img
                className="arrow"
                src={`${isActive === "Company" ? arrowUp : arrowDown}`}
                alt="arrow"
              />
            </a>
            <ul
              className={`nav-list_secondary ${
                isActive === "Company" ? "open" : ""
              }`}
            >
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  History
                </a>
              </li>
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Our Team
                </a>
              </li>
              <li className="nav-item nav-item_secondary">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>

        <div className="nav-btns">
          <a href="#" className="nav-link nav-btn">
            Login
          </a>
          <a href="#" className="nav-link nav-btn btn-register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
