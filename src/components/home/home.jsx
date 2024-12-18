import "./home.css"
import SocialMedia from "../social-media/social-media";

function Home() {
    return (
        <div className="home-container">
            <div className="data-profile">
                <div className="name">
                    <h1>VITOR HUGO</h1>
                </div>
                <div className="home-skills">
                    <h3>DEV</h3>
                    <h1>FrontEnd</h1>
                    <h4>HTML | CSS | JavaScript | React</h4>
                </div>
            </div>
            <div className="photo-and-button">
            <div className="photo-profile">
                <div className="background-image"></div>
                <img src="./public/images/Mask.jpg" alt="mask" width={250} />
            </div>
            <button>CONTATO</button>
            </div>
            

        </div>
    )
}

export default Home