import "./mission.css";

const Mission = ()=>{
    return (
        <section id="section-mission" className="bg-pattern">
            <div className="container">
                <div className="mission-container">
                    <div className="col col-mission-img">
                        <img className="mission-img" src="./picture-mission.png"/>
                    </div>
                    <div className="col">
                        <h2>Misión</h2>
                        <p>
                        Orientados al desarrollo de productos alimenticios de alto valor nutricional, elevados estándares de calidad, precios competitivos y constante innovación para satisfacer las necesidades de la mesa del venezolano; apoyados en un equipo humano comprometido, aportando bienestar a la comunidad y el medio ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission;