import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const options = ["Seasons", "Summer", "Spring", "Autumn", "Winter"];

  const themes = {
    Seasons: { "--bg-color": "#ffffff", "--text-color": "#000000" },
    Summer: { "--bg-color": "#ffe680", "--text-color": "#804000" },
    Spring: { "--bg-color": "#d4f4dd", "--text-color": "#1b5e20" },
    Autumn: { "--bg-color": "#ffcc80", "--text-color": "#4e342e" },
    Winter: { "--bg-color": "#e0f7fa", "--text-color": "#01579b" }
  };

  const [index, setIndex] = useState(0);

  const prevSeason = () => {
    setIndex((prev) => (prev - 1 + options.length) & options.length);
  };

  const nextSeason = () => {
    setIndex((prev) => (prev + 1) % options.length);
  };

  //apply css vars to :root
  useEffect(() => {
    const root = document.documentElement;
    const themeVars = themes[options[index]];
    for (let key in themeVars) {
      root.style.setProperty(key, themeVars[key]);
    }
  }, [index]);

  return (
    <ThemeContext.Provider
      value={{ season: options[index], prevSeason, nextSeason }}
      >
        {children}
      </ThemeContext.Provider>
  );
}


export function useTheme () {
  return useContext(ThemeContext);
}