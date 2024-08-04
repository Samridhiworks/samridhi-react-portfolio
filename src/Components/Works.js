import React from 'react';
import tgc from '../Images/tgc.png'
import utube from '../Images/utube.png'
import flamingo from '../Images/flamingo.png'
import todo from '../Images/todo.png'
import nescafe from '../Images/nescafe.png'
import shipping from '../Images/shipping.png'

const Works=()=>{
    return(
        <>
        <h1 style={{color: "#fff", textAlign:"center"}}>FEATURED WORKS</h1>
        <div className='all-works' id="work">
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://www.tgcindia.com/test-theme-new/tgc/'>
                        <img src={tgc} /></a>
                    </div>
                    <div className='content'>
                        <h2>TGC Landing Page</h2>
                        <span>LIVE PROJECT</span>
                        <p>This is a user-friendly landing Page
                            developed with html,css,jquery,javascript, bootstrap and libraries.
                        </p>
                        <button><a href="https://www.tgcindia.com/test-theme-new/tgc/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/tgclivewebsite'>CODE</a></button>
                    </div>
                </div>
       
        </div>

        <div className='all-works'>
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://vidtube-mu.vercel.app/'>
                        <img src={utube} /></a>
                    </div>
                    <div className='content'>
                        <h2>VidTube App</h2>
                    
                        <p>This is a user-friendly landing Page
                            developed with React, bootstrap and libraries.
                        </p>
                        <button><a href="https://vidtube-mu.vercel.app/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/vidtube'>CODE</a></button>
                    </div>
                </div>
       
        </div>


        <div className='all-works'>
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://sam-todo-list-eosin.vercel.app/'>
                        <img src={todo} /></a>
                    </div>
                    <div className='content'>
                        <h2>TODO List  App</h2>
                    
                        <p>This is a user-friendly landing Page
                            developed with React, bootstrap and libraries.
                        </p>
                        <button><a href="https://sam-todo-list-eosin.vercel.app/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/sam-todo-list'>CODE</a></button>
                    </div>
                </div>
       
        </div>

        <div className='all-works'>
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://samridhiworks.github.io/Nescafe-new-web/'>
                        <img src={nescafe} /></a>
                    </div>
                    <div className='content'>
                        <h2>Nescafe Page</h2>
                    
                        <p>This is a user-friendly landing Page
                            developed with html,css,jquery,javascript, bootstrap and libraries.
                        </p>
                        <button><a href="https://samridhiworks.github.io/Nescafe-new-web/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/Nescafe-new-web'>CODE</a></button>
                    </div>
                </div>
       
        </div>

        <div className='all-works'>
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://samridhiworks.github.io/flamingo-music/'>
                        <img src={flamingo} /></a>
                    </div>
                    <div className='content'>
                        <h2>VidTube App</h2>
                    
                        <p>This is a user-friendly landing Page
                            developed with html,css,jquery,javascript, bootstrap and libraries.
                        </p>
                        <button><a href="https://samridhiworks.github.io/flamingo-music/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/flamingo-music'>CODE</a></button>
                    </div>
                </div>
       
        </div>

        <div className='all-works'>
            <div className='projects'>
               
                    <div className='project-img'>
                        <a href='https://samridhiworks.github.io/shipsyremovalsnew/'>
                        <img src={shipping} /></a>
                    </div>
                    <div className='content'>
                        <h2>Shipsy Removals</h2>
                    
                        <p>This is a user-friendly landing Page
                            developed with html,css,jquery,javascript, bootstrap and libraries.
                        </p>
                        <button><a href="https://samridhiworks.github.io/shipsyremovalsnew/">LIVE</a></button>
                        <button><a href='https://github.com/Samridhiworks/shipsyremovalsnew'>CODE</a></button>
                    </div>
                </div>
       
        </div>
        </>
    )
}

export default Works;