import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss, faSquareGithub, faJs } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
export const ProjectSection = () => {
    return (
        <div className="gap-4 grid grid-cols-6 mx-3.75">
            <h1 className="col-span-6 bg-blue-300 mb-8 heading-section">PERSONAL PROJECTS</h1>
            <div className="relative flex justify-center col-span-6">
                <div className="-top-8 left-1/2 absolute bg-grey rounded-t-full w-16 h-8"></div>
                <div className="justify-self-center col-span-6 bg-green-300 border-1 rounded-xl w-fit">
                    <h1 className="px-10 py-1 font-montserrat text-sm">MEMORY GAME</h1>
                </div>
            </div>

            <div className="relative col-span-6">
                {/* <div className="relative m-auto max-w-3/4"> */}
                <div className="absolute inset-0 bg-yellow opacity-60 m-auto rounded-xl max-w-4/5"></div>
                <img
                    src="./src/assets/mg-screenshot.png"
                    alt="memory game screenshot"
                    className="m-auto rounded-xl max-w-4/5"
                />
                {/* </div> */}
                <div className="absolute inset-0 bg-grey active:opacity-0 m-auto rounded-xl max-w-3/4 h-fit transition duration-300 ease-in-out delay-150">
                    <p className="px-4 py-2 text-sm">
                        An interactive browser game where players match pairs of colored cards.
                        Features include responsive gameboard and card sizing adapting to different
                        screen sizes, smooth animations and persistent high scores using
                        LocalStorage.
                    </p>
                </div>
            </div>
            <div className="relative flex justify-around gap-4 col-span-6">
                <div className="top-2 left-1/4 -z-10 absolute -col-start-6 bg-yellow rounded-full w-18 h-18"></div>
                <div className="px-2 py-1 border-1 rounded-xl w-fit">
                    <p className="text-sm">built with</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                    <FontAwesomeIcon icon={faCss} size="2x" />
                    <FontAwesomeIcon icon={faJs} size="2x" />
                    {/* <FontAwesomeIcon icon={faReact} size="2x" /> */}
                </div>
            </div>
            <div className="flex gap-3 col-start-5">
                <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                <FontAwesomeIcon icon={faSquareArrowUpRight} size="2x" />
            </div>
        </div>
    );
};
