import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import { Button } from "@material-ui/core";
import resume2 from "../../Images/Subodh_Singh_Resume.pdf";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const redirect = () => {
    window.open("https://drive.google.com/drive/folders/1fl5jRmyjkwVE7FxML_M7XueZz2s6BXWg","_blank","noreferrer");
  }

  return (
    <>
      <section id="#about-about"  >
        <div className="section" data-aos="fade-right" >
          <h2 className="section__title" id="about_id"  >
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/112638063?v=4"
                alt="Images"
                class="home-img"
              />
            </div>
            <div className="introduction_datacontainer" >
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Subodh Kumar Singh </span> from{" "}
                <span className="different"> Kasganj, Uttar Pradesh</span>. I have
                completed my graduation in Bachelor of Technology from Rajkiya Engineering College Ambedkar Nagar, Uttar Pradesh.
              </h4>
             
              <h4 >
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                eSports Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Badminton Enthusiast{" "}
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Non Fiction{" "}
              </h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              {/* <Button onClick={redirect} className="resume_btn_2" id="resume-button-2" style={{border:"1px solid #cdcdff",fontWeight:"bold",color:"#cdcdff"}} >   <a href={resume2} id="resume-link-2" download>Resume</a></Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
