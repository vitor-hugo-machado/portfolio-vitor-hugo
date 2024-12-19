import "./home.css"

function Home() {
    return (
        <div className="section-home">
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
                        <img src="/images/Mask.jpg" alt="mask" width={250} />
                    </div>
                    <a>CONTATO</a>
                </div>


            </div>
            <h6>Desenvolvido por Vitor Hugo 👨‍💻</h6>
        </div>
    )
}

export default Home