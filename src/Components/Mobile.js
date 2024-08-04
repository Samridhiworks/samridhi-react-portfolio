import React, { useState } from "react";
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

const Mobile = () => {
    const [hide, setHide] = useState(false);

    const display = () => {
        console.log("Menu button clicked");
        setHide(!hide);
    }

    const close = () => {
        console.log("Close button clicked");
        setHide(false);
    }

    return (
        <>
            <div className="navbar-mb">
                <div className="bars" onClick={display}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="img-mb">
                <a href="https://www.linkedin.com/in/samridhi-tandon2002/">
                    <img src={linkedin} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/Samridhiworks?tab=repositories">
                    <img src={github} alt="GitHub" />
                    </a>
                </div>

                {hide && (
                    <div className="list-mb">
                        <ul>
                            <button style={{background:"transparent",float:"right", cursor:"pointer",color:"#fff"}} onClick={close} >X</button>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#skill">SKILLS</a></li>
                            <li><a href="#work">WORK</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Mobile;
