import React, { useState } from "react";
import { useTheme } from "./contexts/ThemeContext";

export default function OptionSwitcher () {

  const { season, prevSeason, nextSeason } = useTheme();

  return (
    <div style={styles.container}>
      <span onClick={prevSeason} style={styles.arrow}>
        &lt;
      </span>
      <span style={styles.option}>{season}</span>
      <span onClick={nextSeason} style={styles.arrow}>
        &gt;
      </span>
    </div>
  );
}

const styles = {
  container: {
    fontSize: "18px",
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    userSelect: "none"
  },
  arrow: {
    cursor: "pointer",
  },
  option: {
    minWidth: "100px",
    textAlign: "center",
  },
};