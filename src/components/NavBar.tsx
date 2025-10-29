import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
type navProps = {
    // onHeaderClick: () => void;
    onAboutClick: () => void;
    onProjectClick: () => void;
};
export const NavBar = ({ onAboutClick, onProjectClick }: navProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const handleMenuClick = () => {
        setIsMobile(!isMobile);
    };
    const handleLinkClick = (callback: () => void) => {
        callback();
        setIsMobile(false);
    };

    return (
        <>
            <nav className="relative flex justify-between items-center bg-yellow w-full">
                <button type="button">
                    <FontAwesomeIcon icon={faFaceSmile} size="xl" className="py-3 pl-5 cursor-pointer" />
                </button>
                {/* desktop menu */}
                <ul className="hidden md:flex gap-16 pr-7 font-open-sans">
                    <li>
                        <button onClick={onAboutClick} className="nav-item" type="button">
                            About Me
                        </button>
                    </li>
                    <li>
                        <button onClick={onProjectClick} className="nav-item" type="button">
                            My Projects
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-item">Contact</button>
                    </li>
                </ul>
                {/* mobile menu */}
                <button
                    type="button"
                    className="md:hidden cursor-pointer"
                    onClick={handleMenuClick}
                >
                    <FontAwesomeIcon icon={faBars} size="lg" className="py-3 pr-7" />
                </button>
                {/* dropdown menu */}
                {isMobile && (
                        <ul className="top-full right-0 z-50 absolute flex flex-col bg-grey w-2/4">
                            <li className="hover:bg-yellow px-4 py-4">
                                <button
                                    onClick={() => handleLinkClick(onAboutClick)}
                                    className="cursor-pointer"
                                    type="button"
                                >
                                    About Me
                                </button>
                            </li>
                            <li className="hover:bg-yellow px-4 py-4">
                                <button
                                    onClick={() => handleLinkClick(onProjectClick)}
                                    className="cursor-pointer"
                                    type="button"
                                >
                                    My Projects
                                </button>
                            </li>
                            <li className="hover:bg-yellow px-4 py-4">
                                <button>Contact</button>
                            </li>
                        </ul>
                )}
            </nav>
        </>
    );
};
