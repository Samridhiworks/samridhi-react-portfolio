import React from "react";
import html from '../Images/html.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import jquery from '../Images/jquery.png'
import react from '../Images/react.png'
import wordpress from '../Images/wordpress.png'
import figma from '../Images/figma.webp'
import github from '../Images/github-new.png'

const Skills=()=>{
    return(
        <>
        <h1 style={{color:"#fff" , textAlign:"center"}} id='skill-mb'>SKILLS</h1>
        <div className="skill" id="skill">
            <div className="all-images">
                
                <div className="img-text">
                    <img src={html}/>
                    <p >HTML</p>
                </div>
                <div className="img-text">
                    <img src={css}/>
                    <p >CSS</p>
                </div>
                <div className="img-text">
                    <img src={js}/>
                    <p >JAVASCRIPT</p>
                </div>
                <div className="img-text">
                    <img src={jquery}/>
                    <p >JQUERY</p>
                </div>
            </div>
            
        </div>

        <div className="skill">
            <div className="all-images">
                
                <div className="img-text">
                    <img src={react} style={{width:"151px"}}/>
                    <p >REACT JS</p>
                </div>
                <div className="img-text">
                    <img src={wordpress}/>
                    <p >WORDPRESS</p>
                </div>
                <div className="img-text">
                    <img src={figma}/>
                    <p >FIGMA</p>
                </div>
                <div className="img-text">
                    <img src={github}/>
                    <p >GITHUB</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Skills;