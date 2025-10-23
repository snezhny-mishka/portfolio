//import { useState } from "react";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeaderSection } from "./components/HeaderSection";
import { NavBar } from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";

// type Icons =
//     | typeof faHtml5
//     | typeof faCss
//     | typeof faSquareGithub
//     | typeof faJs
//     | typeof faSquareArrowUpRight;

const mgDescription =
    "An interactive browser game where players match pairs of colored cards. Features include responsiveness to different screen sizes, animations and persistent high scores.";

const todoDescription =
    "A task management tool that allows users to add, edit, delete, and rearrange tasks. Data persists across sessions and remains available offline.";

const App = () => {
    return (
        <>
            <NavBar />
            <HeaderSection />
            <AboutSection />
            <ProjectSection
                title="memory game"
                imgSrc="./src/assets/mg-lg-2-no-bg.png"
                alt="memory game screenshot"
                description={mgDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
            />
            <ProjectSection
                title="to do app"
                imgSrc="./src/assets/to-do-lg-no-bg.png"
                alt="to-do app screenshot"
                description={todoDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
            />
        </>
    );
};

export default App;

