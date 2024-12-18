import "./projects.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faReact, faSquareJs, faFigma, faGitAlt } from "@fortawesome/free-brands-svg-icons";

function Projects() {

    const projects = [
        {
            name: "Buscador GitHub",
            Description: "Página que busca dados de usuários da plataforma, como número de seguidores e eventos. Os dados são retornados através do uso da API do GitHub",
            image: "../images/project-api-github.png",
            tools: [<FontAwesomeIcon key="html" className='menu-icon' icon={faHtml5} />,
            <FontAwesomeIcon key="css" className='menu-icon' icon={faCss3Alt} />,
            <FontAwesomeIcon key="js" className='menu-icon' icon={faSquareJs} />
            ]
        },
    ]
    return (

        <div className="projects">
            <h1>Projetos</h1>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <div className="photo-and-tools">
                            <img src={project.image} alt={project.name} className="photo" />
                            <div className="tools">
                                {project.tools.map((tool, toolIndex) => (
                                    <span key={toolIndex}>{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-description">
                            <h3>{project.name}</h3>
                            <p>{project.Description}</p>
                            <button>GitHub</button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Projects