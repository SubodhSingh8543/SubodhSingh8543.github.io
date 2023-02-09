import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" id="user-detail-name">
          Hi, I am <span className="about__name">Subodh Singh</span>
        </h1>
        <Type />
        <h1 className="about__desc" data-aos="fade-right" id="user-detail-intro" >
          A Full Stack Developer(Mern) who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
        </h1>
        <div className="about__contact center">
          <a
            href="https://github.com/SubodhSingh8543"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:subodhsingh8543@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918279803556"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/subodh-kumar-singh-1b73a2237/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1QeVxMbEWzYEtMmRXWyThWKP-bLX56aVl/view?usp=share_link"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="resume-link-2"
          >
            <DescriptionIcon />
          </a>
          {/* <a
            href="https://www.faceb"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a> */}
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills-skills">
        <Techstacks />
      </section>
    </>
  );
};
