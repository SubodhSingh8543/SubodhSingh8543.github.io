import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different" style={{paddingTop:"100px",marginTop:"-70px"}}>Skills</h2>
        <div className="techsection">
          <div class="skills-card">
            <SiJavascript class="skills-card-img" />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card">
            <SiHtml5 class="skills-card-img" />
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div class="skills-card" >
            <DiCss3 class="skills-card-img" />
            <h5 class="skills-card-name">CSS</h5>
          </div>
          <div class="skills-card">
            <FaReact class="skills-card-img" />
            <h5 class="skills-card-name">React</h5>
          </div>
          <div class="skills-card">
            <FaNodeJs class="skills-card-img" />
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div class="skills-card">
            <DiMongodb class="skills-card-img" />
            <h5 class="skills-card-name">MongoDb</h5>
          </div>

          <div class="skills-card">
            <SiExpress class="skills-card-img" />
            <h5 class="skills-card-name">Express</h5>
          </div>

          <div lass="skills-card">
            <SiMaterialui class="skills-card-img" />
            <h5 class="skills-card-name">Material Ui</h5>
          </div>
          <div class="skills-card">
            <BsBootstrap class="skills-card-img" />
            <h5 class="skills-card-name">Bootstrap</h5>
          </div>
          <div class="skills-card">
            <SiChakraui class="skills-card-img" />
            <h5 class="skills-card-name">Chakra UI</h5>
          </div>
          <div class="skills-card">
            <SiNetlify class="skills-card-img" />
            <h5 class="skills-card-name">Netlify</h5>
          </div>
          <div class="skills-card">
            <VscGithub class="skills-card-img" />
            <h5 class="skills-card-name">Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
