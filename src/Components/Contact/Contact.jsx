import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="mailto:subodhsingh8543@gmail.com"
            target="_blank"
            rel="noreferrer"
            id="contact-email"
          >
            <CgMail className="email" /><p style={{ color: "#2977b5" }}>subodhsingh8543@gmail.com</p>
          </a>
          {/* <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="twitter" />
          </a> */}
          <a href="tel:+918279803556" target="_blank" rel="noreferrer" id="contact-phone">
            <BsFillTelephoneFill className="phone" /> <p style={{ color: "#2977b5" }}>8279803556</p>
          </a>
          <a
            href="https://www.linkedin.com/in/subodh-kumar-singh-1b73a2237/"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/SubodhSingh8543"
            target="_blank"
            rel="noreferrer"
            id="contact-github"
          >
            <VscGithub className="github" />
          </a>
        </div>
      </div>
    </>
  );
};
