
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Home from "./Home/home";
import About from "./About/about";
import Project from "./Project/project";
import Contact from "./Contact/contact";
function App () {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
         <Route path="/About" element={<About />} />
           <Route path="/Project" element={<Project />} />
           <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
export default App