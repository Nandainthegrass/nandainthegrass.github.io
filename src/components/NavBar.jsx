import React from "react";
import OptionSwitcher from "./OptionSwitcher";

export default function NavBar () {
  return (
    <>
      <div id="nav-container">
        <nav>
          <div id="logo-and-resume">
            <h1 id="logo">NANDA'S</h1>
            <button id="resume">Resume</button>
          </div>
          <div id="seasons-container">
           <OptionSwitcher/>
          </div>
        </nav>
      </div>
    </>
  )
}
