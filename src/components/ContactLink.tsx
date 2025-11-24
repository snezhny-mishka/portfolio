import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactLink = () => {
    const handleClick = () => {
        const user = "xopox" + "2015";
        const domain = "gmail" + ".com";
        const email = `${user}@${domain}`;
        window.location.href = `mailto:${email}`;
    };

    return (
        <button onClick={handleClick} aria-label="Send email" className="">
            <FontAwesomeIcon icon={faEnvelope} className="pt-1 cursor-pointer" />
        </button>
    );
};
