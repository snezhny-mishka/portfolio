import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss, faSquareGithub, faJs } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { type Ref } from "react";

type ProjectProps = {
    title: string;
    imgSrc: string;
    alt: string;
    description: string;
    gitPage: string;
    webPage: string;
    ref?: Ref<HTMLElement>
};

export const ProjectSection = 
    ({
    title,
    imgSrc,
    alt,
    description,
    gitPage,
    webPage,
    ref
}: ProjectProps) => {
    return (
        <section className="gap-4 grid grid-cols-6 mx-4 mt-6" ref={ref}>
            <h1 className="col-span-6 mb-8 heading-section">PERSONAL PROJECTS</h1>
            <div className="relative flex justify-center col-span-6">
                <div className="-top-8 left-1/2 absolute bg-grey rounded-t-full w-16 h-8"></div>
                {/* <div className="-top-8 left-1/2 -z-10 absolute bg-grey rounded-full w-14 h-14"></div> */}
                <div className="justify-self-center col-span-6 border-1 rounded-xl w-fit">
                    <h1 className="px-10 py-1 font-montserrat font-semibold text-sm">
                        {title.toUpperCase()}
                    </h1>
                </div>
            </div>

            <div className="relative col-span-6">
                <div className="absolute inset-0 bg-yellow opacity-60 m-auto rounded-xl"></div>
                <img src={imgSrc} alt={alt} className="m-auto rounded-xl" />

                {/* <div className="top-[30%] z-0 absolute inset-0 bg-black m-auto rounded-xl max-w-5/6 h-20 translate-x-2 translate-y-2"></div> */}

                <div className="top-[30%] absolute inset-0 bg-grey active:opacity-0 m-auto rounded-xl max-w-5/6 h-fit transition duration-300 ease-in-out delay-150">
                    <p className="px-4 py-2 text-xs">{description}</p>
                </div>
            </div>
            <div className="relative col-span-2 col-start-2">
                <div className="top-2 -left-10 -z-10 absolute bg-yellow rounded-full w-18 h-18"></div>
                <div className="col-span-2 col-start-2 px-2 py-1 border-1 rounded-xl w-fit">
                    <p className="text-sm">built with</p>
                </div>
            </div>
            <div className="flex gap-4 pl-1">
                <FontAwesomeIcon icon={faHtml5} size="2x" />
                <FontAwesomeIcon icon={faCss} size="2x" />
                <FontAwesomeIcon icon={faJs} size="2x" />
            </div>
            <div className="flex col-start-4">
                <a href={gitPage} target="_blank" className="hover:text-yellow">
                    <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                </a>
                <a href={webPage} target="_blank" className="hover:text-yellow">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} size="2x" />
                </a>
            </div>
        </section>
    );
};
