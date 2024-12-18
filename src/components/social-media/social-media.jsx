import './social-media.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
    return (
        <>
             <a className='icon-social-media' href=""><FontAwesomeIcon icon={faGithub} /></a>
             <a className='icon-social-media' href=""><FontAwesomeIcon icon={faLinkedin} /></a>
        </>
    )
}

export default SocialMedia