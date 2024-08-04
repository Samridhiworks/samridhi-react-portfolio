import React from "react";

const Contact=()=>{
    return(
        <>
        <h1 style={{color:"white", textAlign:"center"}}>CONTACT ME</h1>
        <footer id="contact">
            <div className="contact-us">
                <div className="address">
                    <h2>E-Mail :</h2>
                    <p>samridhitandon13@gmail.com</p>
                    <h2>Contact Number :</h2>
                    <p>8384009159</p>

                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="tel" placeholder="Phone Number"/>
                        <input type="submit" style={{width:"359px", background :"#e9ad0a",height:"32px", color:"#fff",cursor:"pointer"}}/>
                    </form>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Contact;