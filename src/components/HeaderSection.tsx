import { faHand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const HeaderSection = () => {
    return (
        <>
            <section className="flex justify-center items-center py-10">
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
                    <p className="px-6 text-sm">
                        I'm a web developer who cares about clarity, good design, and the people
                        behind the screen.
                    </p>
                    <button className="bg-yellow p-2 border-none rounded-2xl text-black cursor-pointer">
                        my projects
                    </button>
                    <div className="-top-8 left-1/7 absolute bg-black rounded-t-full w-16 h-8"></div>
                    <div className="right-1/7 -bottom-14 absolute bg-black rounded-b-full w-28 h-14"></div>
                </div>
            </section>
        </>
    );
};
