import { Link } from "react-router-dom";
import '../assets/skillcard.css'
function SkillsCard() {

    const skills = [
        { id:1,image:"https://cdn3d.iconscout.com/3d/premium/thumb/java-6815593-5602758.png?f=webp",skillname: "JAVA" ,desc : "Object-oriented, platform-independent, high-level programming language for software development."},
        { id:2,image:"https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp",skillname: "REACT" ,desc : "Declarative, component-based, JavaScript library for building user interfaces."},
        { id:3,image:"https://cdn3d.iconscout.com/3d/premium/thumb/yellow-garden-boot-11303975-9101982.png",skillname: "SPRINGBOOT",desc : " Opinionated, convention-over-configuration, Java framework for building robust web applications." }
    ];

    return (
        <>

            {
                skills.map((items, index) => {
                    return (
                        // <div class="card mb-4 col-md-3">
                        //     <div class="card-body ">
                        //         <div className="col-md-9">
                        //             <h1 class="card-title"><b>{items.skillname}</b></h1>
                        //             <p class="card-text">{items.desc}</p>
                        //         </div>
                               
                        //             <Link to={`/questions/${items.skillname}`}>
                        //                 <a class="btn btn-primary">Start Evaluation</a>
                        //             </Link>
                            
                        //     </div>
                        // </div>


                            <div className="col-md-3 card-box mx-3 my-5">
                                <div className="image">
                                    <img src={items.image} width='150px'/>
                                </div>

                                <div className="text-section">
                                    <h3 className="skill-name">{items.skillname}</h3>
                                    <p className="skill-desc">{items.desc}</p>
                                    <Link to={`/questions/${items.skillname}`}>
                                    <button className="btn btn-outline-light">Start Evaluation</button>
                                    </Link>
                                </div>
                            </div>
            
                    )
                })
            }

        </>
    )
}

export default SkillsCard;