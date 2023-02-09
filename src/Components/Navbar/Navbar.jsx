import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav" id="nav-menu">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item" id="home">
            <a
              href="#home-home"
              onClick={() => toggleNavList("#home-home")}
              className="link link--nav"
              class="nav-link home"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item" id="about"  class="about section">
            <a
              href="#about-about"
              onClick={() => toggleNavList("#about-about")}
              className="link link--nav"
              class="nav-link about"
            >
              About
            </a>
          </li>
          <li className="nav__list-item" id="skills">
            <a
              href="#skills-skills"
              onClick={() => toggleNavList("#skills-skills")}
              className="link link--nav"
              class="nav-link skills"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item" id="projects">
            <a
              href="#projects-projects"
              onClick={() => toggleNavList("#projects-projects")}
              className="link link--nav"
              class="nav-link projects"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item"  id="contact">
            <a
              href="#contact-contact"
              onClick={() => toggleNavList("#contact-contact")}
              className="link link--nav"
              class="nav-link contact"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://drive.google.co"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
              class="nav-link resume"
              id="resume-link-1"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
