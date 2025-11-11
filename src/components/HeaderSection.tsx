import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectLink = {
    onProjectClick: () => void;
};
export const HeaderSection = ({ onProjectClick }: ProjectLink) => {
    return (
        <>
            <section className="relative flex justify-center items-center py-10">
                <div className="relative flex flex-col justify-center items-center gap-6 py-8 border-1 rounded-2xl max-w-4/5">
                    <p className="text-xl">
                        Hi!{"   "}
                        <FontAwesomeIcon
                            icon={faHand}
                            size="lg"
                            className="text-yellow hover:animate-wave cursor-pointer"
                        />
                    </p>
                    <h1 className="font-montserrat text-3xl text-center">I'm Olga Veikova</h1>
                    <p className="px-6 text-sm sm:text-base">
                        I'm a web developer who cares about clarity, good design, and the people
                        behind the screen.
                    </p>
                    <button
                        className="bg-yellow shadow-sm px-4 pt-2 pb-3 border-none rounded-2xl text-black cursor-pointer"
                        onClick={onProjectClick}
                    >
                        my projects
                    </button>
                    <div className="-top-8 left-1/7 absolute bg-black rounded-t-full w-16 h-8"></div>
                    <div className="right-1/7 -bottom-14 absolute bg-black rounded-b-full w-28 h-14"></div>
                </div>
                {/* circles */}
                <div className="hidden lg:block top-20 left-[7%] z-10 absolute bg-black rounded-full w-17 h-17"></div>
                <div className="hidden lg:block top-35 right-[8%] z-10 absolute bg-black rounded-full w-10 h-10"></div>
            </section>
        </>
    );
};
