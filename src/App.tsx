//import { useState } from "react";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeaderSection } from "./components/HeaderSection";
import { NavBar } from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";

const App = () => {
    
    return (
    <>
        <NavBar />
        <HeaderSection />
        <AboutSection />
        <ProjectSection />
    </>
    )

};

export default App;
