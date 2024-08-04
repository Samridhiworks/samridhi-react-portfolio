import React from "react";
import shoe from '../Images/shoe.jpg'
import remote from '../Images/graphic 2.png'
import graphic3 from '../Images/graphic 3.png'
import graphic4 from '../Images/graphic 4.jpg'
import graphic5 from '../Images/graphic 5.jpg'
import graphic6 from '../Images/graphic 6.jpg'

const Certificates =()=>{
    return(
        <>
        <h1 style={{color:"#fff", textAlign:"center"}}>GRAPHIC PROJECTS</h1>

        <div className="projects-new" id="projects">
            <div className="graphic">
                <img src={shoe} />
                <img src={remote} />
                <img src={graphic3}/>
               
            </div>
        </div>

        <div className="projects-new">
            <div className="graphic">
                <img src={graphic4} />
                <img src={graphic5} />
                <img src={graphic6}/>
               
            </div>
        </div>
        </>
    )
}

export default Certificates;