import React, { useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="screen-text" id="screen-text-h1">
          Simplicity is essential
        </h1>
        <p className="screen-text" id="screen-text-p">
          ...but sometimes, it just gotta be beautiful.
        </p>
      </div>
    </>
  );
}
