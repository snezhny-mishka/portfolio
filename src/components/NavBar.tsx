import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
type navProps = {
    // onHeaderClick: () => void;
    onAboutClick: () => void;
    onProjectClick: () => void;
};
export const NavBar = ({ onAboutClick, onProjectClick }: navProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLinkClick = (callback: () => void) => {
        callback();
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }; 
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        }
    }, [])

    return (
        <>
            <nav className="relative flex justify-between items-center bg-yellow mb-4 w-full">
                <button type="button">
                    <FontAwesomeIcon
                        icon={faFaceSmile}
                        size="xl"
                        className="py-3 pl-5 cursor-pointer"
                        aria-label="Home button"
                    />
                </button>
                {/* desktop menu */}
                <ul className="hidden md:flex gap-16 pr-7 font-open-sans">
                    <li>
                        <button onClick={onAboutClick} className="nav-item-dt" type="button">
                            About Me
                        </button>
                    </li>
                    <li>
                        <button onClick={onProjectClick} className="nav-item-dt" type="button">
                            My Projects
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-item-dt">
                            Contact
                        </button>
                    </li>
                </ul>
                {/* mobile menu */}
                <button
                    type="button"
                    className="md:hidden cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Navigation menu"
                >
                    <FontAwesomeIcon icon={faBars} size="lg" className="py-3 pr-7" />
                </button>
                {/* dropdown menu */}
                {isOpen && (
                    <ul className="top-full right-0 z-50 absolute flex flex-col bg-grey w-2/4" ref={mobileMenuRef}>
                        <li className="hover:bg-yellow px-4 py-4">
                            <button
                                onClick={() => handleLinkClick(onAboutClick)}
                                className="nav-item-mob"
                                type="button"
                            >
                                About Me
                            </button>
                        </li>
                        <li className="hover:bg-yellow px-4 py-4">
                            <button
                                onClick={() => handleLinkClick(onProjectClick)}
                                className="nav-item-mob"
                                type="button"
                            >
                                My Projects
                            </button>
                        </li>
                        <li className="hover:bg-yellow px-4 py-4">
                            <button className="nav-item-mob" type="button">
                                Contact
                            </button>
                        </li>
                    </ul>
                )}
            </nav>
        </>
    );
};
