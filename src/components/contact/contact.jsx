import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div className="container-contact">
            <h1>VITOR HUGO</h1>
            <h2>frontEnd</h2>

            <h5>vitorhugomachado.dev@gmail.com</h5>
            <h5>(51) 9 8056 0090</h5>
            <div className="social-media">
            <a className='icon-social-media' href="https://github.com/vitor-hugo-machado" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            <a className='icon-social-media' href="https://www.linkedin.com/in/vitor-hugo-alves-machado-82b73a320/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a> </div>

            <h6>Desenvolvido por Vitor Hugo 👨‍💻</h6>
        </div>
    )
}

export default Contact