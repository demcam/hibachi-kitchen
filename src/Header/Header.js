import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-scroll";
import { Link as LinkTo } from "react-router-dom";

import "./Header.css";

function Header() {
  useEffect(() => {
    const navBurger = document.querySelector(".header__menuIcon");
    const navLinks = document.querySelector(".header__items");
    const singleNavLinks = document.querySelectorAll(".header__items li");

    navBurger.addEventListener("click", () => {
      navLinks.classList.toggle("header__items-active");
    });

    singleNavLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
    });
  });

  return (
    <div className="header">
      <LinkTo to="/">
        <img
          className="header__logo"
          src="https://menufyproduction.imgix.net/637116903457037331+131770.png?auto=compress,format&h=1080&w=1920&fit=max"
          alt=""
          srcset=""
        />
      </LinkTo>

      <ul className="header__items">
        <LinkTo to="/menu" className="link_color">
          <li id="menu">MENU</li>
        </LinkTo>

        <Link
          activeClass="active"
          to="findUsScroll"
          id="findUs"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={0}
          isDynamic={true}
        >
          <li>FIND US</li>
        </Link>
        <Link
          activeClass="active"
          to="aboutScroll"
          id="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={0}
          isDynamic={true}
        >
          <li>ABOUT</li>
        </Link>
        <li id="careers">CAREERS</li>
      </ul>
      <MenuIcon className="header__menuIcon" fontSize="large" />
    </div>
  );
}

export default Header;
