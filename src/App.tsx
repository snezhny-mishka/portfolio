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
    "An interactive browser game where players match pairs of colored cards.Features include responsive gameboard and card sizing adapting to differentscreen sizes, smooth animations and persistent high scores usingLocalStorage.";

const todoDescription =
    "A task management tool that allows users to add, edit, delete, and rearrange tasks. It includes two lists - To Do and Done - and tasks can be moved seamlessly between them. Data persists across sessions and remains available offline.";

const App = () => {
    return (
        <>
            <NavBar />
            <HeaderSection />
            <AboutSection />
            <ProjectSection
                title="memory game"
                imgSrc="./src/assets/mg-screenshot.png"
                description={mgDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
            />
            <ProjectSection
                title="to do app"
                imgSrc="./src/assets/to-do-app.png"
                description={todoDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
            />
        </>
    );
};

export default App;

