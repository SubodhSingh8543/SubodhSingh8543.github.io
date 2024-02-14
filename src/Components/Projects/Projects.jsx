import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNodemon
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import img1 from "../../Images/project_1_pic.png";
import img2 from "../../Images/project_3_pic.png";
import img3 from "../../Images/project_2_pic.png";
import img4 from "../../Images/project_4_pic.png";
import img5 from "../../Images/project_5_pic.png";
import img6 from "../../Images/project_6_pic.png";


export const Projects = () => {
  return (
    <>
      <div className="section" style={{zIndex:-1}}>
        <h2 className="section__title different"  data-aos="fade-right" style={{paddingTop:"100px", marginTop:"-100px",zIndex:-10,backgroundColor:"transparent"}}>
          Projects
        </h2>
        <div className="projects_container" class="project-card" style={{zIndex:-10}}>
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img6}
                  alt="Medicare"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Medicare</h2>
              <p class="project-description">
                {/* Clone of the popular email campaigning app Mail Chimp. Built on react for front end and nodeJS on backend. It's a team project completed executed in 5 days. */}
                 It is an e-Commerce website built on React for front end and Mongodb & Express for backend. It is completed & executed in 4 days.
              </p>
              <div class="project-tech-stack" id="projectech">
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiNodemon/>
                <SiMongodb/>
                <SiExpress/>
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://frontend-mu-wine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SaurabhBH123/rebel-snow-4871"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img5}
                  alt="Object O Pedia"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Object O Pedia</h2>
              <p class="project-description">
                {/* Clone of the popular email campaigning app Mail Chimp. Built on react for front end and nodeJS on backend. It's a team project completed executed in 5 days. */}
                 It is an e-Commerce website built on React for front end. It is completed & executed in 4 days.
              </p>
              <div class="project-tech-stack">
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://zippy-question-7549.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SubodhSingh8543/zippy-question-7549"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img1}
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Fashion Mart</h2>
              <p class="project-description">
                {/* Clone of the popular email campaigning app Mail Chimp. Built on react for front end and nodeJS on backend. It's a team project completed executed in 5 days. */}
                 It is an e-Commerce website built on React for front end. It is completed & executed in 5 days.
              </p>
              <div class="project-tech-stack">
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://fashion1-mart.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SubodhSingh8543/-internal-mark-2946/tree/main/fashion"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img2}
                  alt="Home-Decor"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Home-Decor</h2>
              <p class="project-description">
                An e-Commerce  Project with HTML, JavaScript and CSS. Main functionalities were : Register/Login, Sorting and Filtering, Add to Cart and many more.
              </p>
              <div class="project-tech-stack">
                <IoLogoJavascript />
                <SiNodedotjs />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
                {/* <FaReact /> */}
                <SiHtml5 />
              </div>
              <div>
                <a
                  href="https://astounding-tulumba-399da8.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sharma24harshit/excellent-noise-5475"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img3}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Website for Managing Subscription</h2>
              <p class="project-description">
                It is a subscription management app built using React. A solo project.
              </p>
              <div class="project-tech-stack">
                <IoLogoJavascript />
                <FaReact />
              </div>
              <div>
                <a
                  href="https://groweasy.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/SubodhSingh8543/uninterested-jump-1744/tree/main/construct_app"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={img4}
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Website to Manage the Daily Workout</h2>
              <p class="project-description">
                website to manage workout built using JavaScript and CSS.
              </p>
              <div class="project-tech-stack">
                 <SiHtml5 />
                <IoLogoJavascript />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://venerable-mochi-ab2af4.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/SubodhSingh8543/near-crook-9197"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}



        {/* <div className="projects_container" class="project-card">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/PMny3hW/Screenshot-406.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2 class="project-title">Star Wars Search</h2>
              <p class="project-description">
                Vanilla JS web app to Search for any Star Wars Character. Build with the help of Star Wars API and has the Classic UI (Color theme) of the original Star Wars Movie. Built to learn APIs and use them in the project.
              </p>
              <div class="project-tech-stack">
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://searchstarwars.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="project-deployed-link"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/imbickydutta/starWarsCharacterSearch"
                  target="_blank"
                  rel="noreferrer"
                  class="project-github-link"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
