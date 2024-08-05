import React from "react";
import image from '../Images/dp.jpeg'
import icon1 from '../Images/icon-1.png'
import icon2 from '../Images/icon-2.png'
import icon3 from '../Images/icon-3.png'
import icon4 from '../Images/icon-4.png'
import Linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'

const Banner=()=>{
    return(
        <>
        <div className="banner" id="home">
            <div className="text-image">
                <div className="text">
                    <h6>SAMRIDHI TANDON</h6>
                    <h1>FRONTEND DEVELOPER</h1>
        <p style={{color:"#fff",fontSize:"15px",textAlign:"center"}}>I used to design and build the visual aspects of websites and applications, focusing on user experience and interface. Created websites using  languages like HTML, CSS, JavaScript, and React JS to create responsive, interactive elements, ensuring seamless functionality across various devices and browsers while adhering to design specifications and performance standards.
        </p>
                    <button >
                        < a href="src/Samridhi CV.pdf" download="Samridhi CV.pdf" style={{textDecoration:"none"}}>
                        Download Resume
                        </a></button>
                    <div className="profiles">
                        <a href="https://www.linkedin.com/in/samridhi-tandon2002/">
                        <img src={Linkedin} />
                        </a>
                        <a href="https://github.com/Samridhiworks?tab=repositories">
                        <img src={github} />
                        </a>
                    </div>
                </div>

                <div className="all-icons">
                <div className="image">
                    <img src={image} />
                </div>

                <div className="icons">
                    <img src={icon1} className="icon1"/>
                    <img src={icon2} className="icon2"/>
                    <img src={icon3} className="icon3"/>
                    <img src={icon4} className="icon4"/>
                    
                </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Banner;
