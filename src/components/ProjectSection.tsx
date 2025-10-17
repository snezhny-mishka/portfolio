import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss, faReact, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"; 
export const ProjectSection = () => {
    return (
        <div>
            <h1></h1>
            <div>
                <h1>MEMORY GAME</h1>
            </div>
            <div className="relative m-auto max-w-3/4">
                <div className="absolute inset-0 bg-yellow opacity-60 rounded-xl"></div>
                <img src="./src/assets/mg-screenshot.png" alt="memory game screenshot" className="rounded-xl" />
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p>BUILT WITH</p>
            </div>
            <span>
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss} />
                <FontAwesomeIcon icon={faReact} />
            </span>
            <span>
                <FontAwesomeIcon icon={faSquareGithub} />
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </span>
        </div>
    );
};
