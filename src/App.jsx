import "@fontsource/inter";
import "@fontsource/inter/500.css";    
import "@fontsource/inter/600.css";    
import "@fontsource/inter/700.css"; 
import "@fontsource/inria-sans";        // weight 400
import "@fontsource/inria-sans/300.css"; // light
import "@fontsource/inria-sans/700.css"; // bold
import NavBar from "./components/NavBar"
import SplitProjects from "./components/SplitProjects";
import Bulb from "./components/Bulb";
import { useState } from "react";
import Screen from "./components/Screen";
import './App.css';


function App() {

  

  return (
    <>
      <div>
        <Bulb onComplete={()=> setShowProjects(true)} />
         <NavBar />
         <div id="container-body">
           <Screen />
           <SplitProjects />
         </div>
      </div>
    </>
  )
}

export default App
