import { type Ref } from "react";

type AboutProps = {
    ref: Ref<HTMLElement>;
    techStack: string[];
};

export const AboutSection = ({ ref, techStack }: AboutProps) => {
    return (
        <>
            <section ref={ref} className="mt-6 mb-6">
                <h1 className="mb-6 ml-6 md:ml-14 heading-section">ABOUT ME</h1>
                <div className="flex md:flex-row-reverse flex-col md:gap-8 md:px-25">
                    <div className="relative self-center max-w-2/4 md:max-w-2/5 xl:max-w-1/5">
                        <img
                            src="./src/assets/portrait.JPG"
                            alt="my photo"
                            className="peer rounded-2xl transition-all translate-x-0 translate-y-0 hover:-translate-x-3 hover:-translate-y-3 duration-300 ease-in-out delay-150"
                        />
                        <div className="absolute inset-0 bg-yellow opacity-45 peer-hover:opacity-0 rounded-2xl transition peer-hover:-translate-x-3 peer-hover:-translate-y-3 duration-300 ease-in-out delay-150 pointer-events-none"></div>
                        <div className="-z-20 absolute inset-0 bg-yellow rounded-2xl transition-all translate-x-0 translate-y-0 peer-hover:translate-x-3 peer-hover:translate-y-3 duration-300 ease-in-out delay-150"></div>
                    </div>
                    <article className="self-center md:ml-6 pt-5 max-w-3/4 text-sm sm:text-base">
                        I started out as an illustrator, and my curiosity about how things work
                        online led me into web development. I bring a creative eye to building
                        projects, and each one of them is a chance to explore, experiment, and grow
                        my skills. I'm excited to apply what I've learned in both personal and
                        commercial projects.
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
                </div>
            </section>
        </>
    );
};
