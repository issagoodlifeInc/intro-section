import React, { useState } from "react";
import "./navbar.css";

import Logo from "../images/logo.svg";
import hamburgerOpen from "../images/icon-menu.svg";
import hamburgerClose from "../images/icon-close-menu.svg";

export default function Navbar() {
  const [changeHamburger, setChangeHamburger] = useState(false);

  const width = window.innerWidth;
  console.log(width);

  const smallerScreens = 620;

  const mobileHamburgers = (
    <div className="hamburger-icons">
      {!changeHamburger} &&
      <button className="hamburger-open">
        <img src={hamburgerOpen} alt="OpenNavbar" />
      </button>
      <button className="hamburger-open">
        <img src={hamburgerClose} alt="CloseNavbar" />
      </button>
    </div>
  );

  return (
    <nav>
      {/* Logo */}
      <a href="#">
        <img src={Logo} alt="Logo" className="logo_img" />
      </a>
      {/* Mobile Hamburgers */}
      {width < smallerScreens} && {mobileHamburgers}
      <>Features Company Careers About Login Register</>
    </nav>
  );
}
