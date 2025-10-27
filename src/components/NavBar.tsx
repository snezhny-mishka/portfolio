type navProps = {
    // onHeaderClick: () => void;
    onAboutClick: () => void;
    onProjectClick: () => void;
};
export const NavBar = ({ onAboutClick, onProjectClick }: navProps) => {
    return (
        <nav className="w-full">
            <ul className="flex justify-center gap-16 bg-yellow font-open-sans">
                <button onClick={onAboutClick} className="cursor-pointer">About Me</button>
                <button onClick={onProjectClick} className="cursor-pointer">My Projects</button>
                <button>Contact</button>
            </ul>
        </nav>
    );
};
