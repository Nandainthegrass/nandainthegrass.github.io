import React from "react";
import OptionSwitcher from "./OptionSwitcher";
import './NavBar.css';

export default function NavBar () {
  return (
    <>
      <div id="nav-container">
        <nav style={styles.nav}>
          <div id="logo-and-resume" style={styles.logoResume}>
            <div>
              <h1 style={styles.logo}>NANDA'S</h1>
              <OptionSwitcher/>
            </div>
            <div id="resume-button-container">
              <div id="resume-green-box"></div>
              <span id="resume-btn" style={styles.resumeBtn}>Resume</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    marginTop: "10px",
  },
  logoResume : {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "64px",
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    fontWeight: "500",
  },
  resumeBtn: {
    fontFamily: "'Inria Sans', sans-serif",
  }
};