import React from "react";
import './about.css'
import image from'./AdobeStock_246781029-V2.png.jpg'
const About = () => {
    return(
        <>
        <section id="About">
        <div className="right-img">
            <img src={image} alt=""/>
        </div>
        <div className="content">
            <h3>welcome to learns-courses</h3>
            <p>we interdouce you best courses in all fields your skills are the key for develop yourself and train your team and we help you to achieve your goals  we see a world where learners everywhere have access to…</p> 
        </div>
        <div className="the-points">
             <ol>
                <li>learn alot of skills to develop your experience</li>
                <li>Educational opportunities at every investment level</li>
                <li>learn programming bascis to be professional</li>
                <li>Flexible pathways to personal and professional achievement </li>
            </ol>
        </div>
        </section>
        </> 
    )
}
export default About;