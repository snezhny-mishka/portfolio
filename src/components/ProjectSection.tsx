import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss, faSquareGithub, faJs } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
export const ProjectSection = () => {
    return (
        <div>
            <h1 className="heading-section">PERSONAL PROJECTS</h1>
            <div className="border-1 rounded-xl w-fit">
                <h1 className="px-10 py-1 font-montserrat text-sm">MEMORY GAME</h1>
            </div>
            <div className="relative">
                {/* <div className="relative m-auto max-w-3/4"> */}
                <div className="absolute inset-0 bg-yellow opacity-60 m-auto rounded-xl max-w-4/5"></div>
                <img
                    src="./src/assets/mg-screenshot.png"
                    alt="memory game screenshot"
                    className="m-auto rounded-xl max-w-4/5"
                />
                {/* </div> */}
                <div className="top-20 absolute inset-0 bg-grey active:opacity-0 m-auto rounded-xl max-w-3/4 h-fit transition duration-300 ease-in-out delay-150">
                    <p className="px-4 py-3 text-sm">
                        An interactive browser game where players match pairs of colored cards.
                        Features include responsive gameboard and card sizing adapting to different
                        screen sizes, smooth animations and persistent high scores using
                        LocalStorage.
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="px-2 py-1 border-1 rounded-xl w-fit">
                    <p className="text-xs">built with</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                    <FontAwesomeIcon icon={faCss} size="2x" />
                    <FontAwesomeIcon icon={faJs} size="2x" />
                    {/* <FontAwesomeIcon icon={faReact} size="2x" /> */}
                </div>
            </div>
            <span>
                <FontAwesomeIcon icon={faSquareGithub} />
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </span>
        </div>
    );
};
