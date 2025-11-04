import { useRef } from "react";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { HeaderSection } from "./components/HeaderSection";
import { NavBar } from "./components/NavBar";
import { ProjectSection } from "./components/ProjectSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

const mgDescription =
    "An interactive browser game where players match pairs of colored cards. Features include responsiveness to different screen sizes, animations and persistent high scores.";

const todoDescription =
    "A task management tool that allows users to add, edit, delete, and rearrange tasks. Data persists across sessions and remains available offline.";

const techStack = ["HTML", "CSS", "TailwindCSS", "JavaScript", "TypeScript", "React"];

const App = () => {
    // const headerRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const projectRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <NavBar
                onAboutClick={() => scrollToSection(aboutRef)}
                onProjectClick={() => scrollToSection(projectRef)}
            />
            <HeaderSection onProjectClick={() => scrollToSection(projectRef)} />
            <AboutSection ref={aboutRef} techStack={techStack}/>
            <ProjectSection
                ref={projectRef}
                title="memory game"
                imgSrc="./src/assets/mg-lg-2-no-bg.png"
                alt="memory game screenshot"
                description={mgDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
                buildWith={["HTML", "CSS", "JavaScript"]}
            />
            <ProjectSection
                title="to do app"
                imgSrc="./src/assets/to-do-lg-no-bg.png"
                alt="to-do app screenshot"
                description={todoDescription}
                gitPage="http://github.com"
                webPage="http://github.com"
                buildWith={["React", "TailwindCSS"]}
            />
            <Footer />
            <BackToTop />
        </>
    );
};

export default App;
