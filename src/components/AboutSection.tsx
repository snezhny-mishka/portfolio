import { type Ref } from "react";

type AboutProps = {
    ref: Ref<HTMLElement>;
    techStack: string[];
};

export const AboutSection = ({ ref, techStack }: AboutProps) => {
    return (
        <>
            <section ref={ref} className="mt-6 mb-6">
                <h1 className="mb-6 ml-4 md:ml-10 heading-section">ABOUT ME</h1>
                <div className="group relative">
                    <img
                        src="./src/assets/my-portrait.png"
                        alt="my photo"
                        className="m-auto rounded-2xl max-w-3/4"
                    />
                    <div className="absolute inset-0 bg-yellow opacity-45 hover:opacity-0 m-auto rounded-2xl max-w-3/4 transition duration-300 ease-in-out delay-150"></div>
                    <div className="-z-20 absolute inset-0 bg-yellow group-hover:bg-white m-auto rounded-2xl max-w-3/4 transition translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 duration-300 ease-in-out delay-150"></div>
                </div>
                <article className="m-auto pt-5 max-w-3/4 text-sm sm:text-base">
                    I started out as an illustrator, and my curiosity about how things work online
                    led me into web development. I bring a creative eye to building projects, and
                    each one of them is a chance to explore, experiment, and grow my skills. I'm
                    excited to apply what I've learned in both personal and commercial projects.
                    <div className="flex flex-wrap items-center gap-2 pt-4">
                        <p>Technologies I use:</p>
                        {techStack.map((el: string, i: number) => (
                            <span
                                key={i}
                                className="bg-grey p-2 rounded-xl w-fit text-xs xs:text-sm"
                            >
                                {el}
                            </span>
                        ))}
                    </div>
                </article>
            </section>
        </>
    );
};
