import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="bg-yellow mt-6">
            <div className="justify-items-center gap-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 pt-3">
                <div className="flex justify-center items-center gap-2">
                    <p className="">Contact me:</p>
                    <FontAwesomeIcon icon={faEnvelope} className="pt-1" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="">Socials:</p>
                    <a href="https://www.linkedin.com/in/olga-veikova-230a8b316/" target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="lg"
                            aria-label="link to LinkedIn page"
                        />
                    </a>

                    <a href="https://github.com/snezhny-mishka" target="_blank">
                        <FontAwesomeIcon
                            icon={faSquareGithub}
                            size="lg"
                            aria-label="link to GitHub page"
                        />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center xs:col-span-2 md:col-span-1 text-xs">
                    <p>Build with React + Vite</p>
                    <p>Designed by me in Figma</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 col-span-6 pt-2 pb-2 text-xs">
                <FontAwesomeIcon icon={faCopyright} />
                <p className="">2025 Olga Veikova</p>
            </div>
        </footer>
    );
};
