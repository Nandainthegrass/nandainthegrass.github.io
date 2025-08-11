import React, { useState } from "react";
import { useTheme } from "./contexts/ThemeContext";
import './OptionSwitcher.css';

export default function OptionSwitcher () {

  const { season, prevSeason, nextSeason } = useTheme();

  return (
    <div style={styles.container}>
      <span onClick={prevSeason} style={styles.arrow} className="arrow">
        &lt;
      </span>
      <span style={styles.option}><i>{season}</i></span>
      <span onClick={nextSeason} style={styles.arrow} className="arrow">
        &gt;
      </span>
    </div>
  );
}

const styles = {
  container: {
    fontSize: "24px",
    fontFamily: "'Inria Sans', sans-serif",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    placeSelf: "center",
    fontWeight: "700",
    marginTop: "0.7rem",
  },
  arrow: {
    cursor: "pointer",
  },
  option: {
    minWidth: "120px",
    textAlign: "center",
  },
};