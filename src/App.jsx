
import React, { useState } from "react";



import "./App.css";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/Home";


function App() {

  // true = Dark Mode
  // false = Light Mode
  const [darkMode, setDarkMode] = useState(true);

  // Theme change karne ka function
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    // Dark ya Light class poori website ko milegi
    <div className={darkMode ? "dark" : "light"}>

      <Navbar
       darkMode={darkMode}
        changeTheme={changeTheme}/>




      <Home/>

      <About/>

      <Skills/>

      <Project/>
      

      <Experience/>
      <Contact/>

    </div>
  );
}

export default App;