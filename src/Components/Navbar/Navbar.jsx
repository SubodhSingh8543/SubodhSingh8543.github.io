import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import resume2 from "../../Images/Subodh_Singh_Resume.pdf";
import { Button } from "@material-ui/core";

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

  const redirect = () => {
    window.open("https://drive.google.com/file/d/1QeVxMbEWzYEtMmRXWyThWKP-bLX56aVl/view?usp=share_link","_blank","noreferrer");
  }

  return (
    <div >
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
          <li className="nav__list-item" id="about"  class="about section newStyleToAbout">
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
          <li className="nav__list-item nav-link resume"  >
            <Button onClick={() => { 
                toggleNavList();
                redirect();
              }}
              id="resume-button-1"
              >
            <a
              href={resume2}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
              class="nav-link resume"
              id="resume-link-1"
              download
            >
              <p style={{fontWeight:"bold",color:"#555555"}}> Resume</p>
            </a>
            </Button>  
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {/* {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />} */}
          {/* {themename === "dark" ? <Brightness2Icon /> : <Brightness2Icon />} */}
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
    </div>
  );
};
