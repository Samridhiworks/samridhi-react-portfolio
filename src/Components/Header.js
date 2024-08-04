import React from "react";

const Header=()=>{
    return(
        <>
        <header>
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <h2 style={{color:'white'}}>SAMRIDHI</h2>
                    </div>
                    <div className="list">  
                        <ul>
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#skill">SKILLS</a></li>
                            <li><a href="#work">WORK</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
        </>
    )
}

export default Header
