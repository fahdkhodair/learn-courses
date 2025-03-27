import React from "react";
import './hero.css'
import course from './digital_and_online_learning.png.jpg'
const Hero=()=>{
    return(
        <>
        <section id="home">
            <div className="image">
                <img src={course} alt=""/>
            </div>
            <div className="text">
                <h2>learns-courses</h2>
                <p>best webiste for learning courses</p>
            </div>
            <button className="btn">learn More</button>
            </section>
        </>
    )
}
export default Hero;