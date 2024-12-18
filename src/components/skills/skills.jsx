import "./skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faSquareJs, faFigma, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Skills() {
    let technologies = [
        {
            name: "HTML",
            icon: <FontAwesomeIcon className='menu-icon' icon={faHtml5} />
        },
        {
            name: "CSS",
            icon: <FontAwesomeIcon className='menu-icon' icon={faCss3Alt} />
        },
        {
            name: "JavaScript",
            icon: <FontAwesomeIcon className='menu-icon' icon={faSquareJs} />
        },
        {
            name: "React",
            icon: <FontAwesomeIcon className='menu-icon' icon={faReact} />
        },
        {
            name: "Figma",
            icon: <FontAwesomeIcon className='menu-icon' icon={faFigma} />
        },
        {
            name: "Git",
            icon: <FontAwesomeIcon className='menu-icon' icon={faGitAlt} />
        },

    ]


    return (
        <div className="skills">
            <h1>Hard Skills</h1>
            <div className="skills-container">
                {technologies.map((tech, index) => (
                    <div key={index} className="hard-skills">
                        <div className="skill-icon">{tech.icon}</div>
                        <div className="skill-name">{tech.name}</div>
                    </div>
                )
                )}
                <h3>GitFlow <span> | </span> GitHub<span> | </span>Context Api<span> | </span>Fetch Api<span> | </span>Styled Components</h3>
            </div>
        </div>
    )
}

export default Skills