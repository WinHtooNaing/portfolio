import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact ,faAngular} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {
    const [letterClass , setLetterClass] = useState("text-animate");
    const myFunction = () => {
        setTimeout(() => {
           setLetterClass('text-animate-hover')
       },3000)
    }
   useEffect(() => myFunction(),[])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                    strArray={['A' , 'b' ,'o','u','t',' ', 'm','e']} idx={15}/>
                </h1>
                <p>
                    I am now quite proficient in web development. It is my goal to work in such a 
                    large technology company.
                </p>
                <p>
                   Although I am writing projects related to web development, it is not because I am interested, 
                   but because I am working to support my family.
                </p>
                <p>
                    The job I really like is playing soccer, but soccer is not developed in our country, 
                    so I chose this job.
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;