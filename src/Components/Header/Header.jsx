import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div style={{position:"fixed",zIndex:10,width:"100%"}} >
      <header className={"header center " + themename}>
        <h3>
          <a href="#home-home" className="link">
            imsubodhsingh
          </a>
        </h3>
        <Navbar  />
      </header>
    </div>
  );
};
