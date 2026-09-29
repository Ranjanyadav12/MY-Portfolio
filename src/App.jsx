
import React, { useState } from "react";



import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

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

      <Experience/>
      <Contact/>

    </div>
  );
}

export default App;