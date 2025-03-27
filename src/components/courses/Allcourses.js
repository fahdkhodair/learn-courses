import React from "react";
import './courses.css';
import htmlAndCss from './images.png';
import Machinelearning from'./16.jpg';
import reactImage from'./1_MF5V_dkybUTcfzwHFh0VSw.jpg';
import python from './Python-Training-Course_00000.jpg'
import java from './1_pu_q-NQV_EnIHBgHdZsrXQ.png'
import nodejs from './images (2).png'
import data from './only-data-analyst-course-nisha-1.png'
import phpLaravel from './shutterstock_1119270824_2.jpg'
const Course = () => {
    const courses = [
        { name: 'HTML & CSS', description: 'Learn the basics of HTML and CSS to build beautiful websites.', image: htmlAndCss },
        { name: 'machine-learning', description: 'learn machine-learning explore algorithms.', image: Machinelearning },
        { name: 'ReactJS', description: 'Learn React for building modern web applications.', image: reactImage },
        { name: 'NodeJS', description: 'Build server-side applications with Node.js.', image: nodejs },
        { name: 'Python', description: 'Learn Python for web development and automation.', image: python },
        { name: 'Java', description: 'Master Java for building enterprise-level applications.', image: java },
        { name: 'data-analysis', description: 'Master Java for building enterprise-level applications.', image: data },
        { name: 'php and laravel', description: 'learn php and laravel to become backend professional', image: phpLaravel },
    ];

    return (
        <>
        <section id="courses">
        <div className="card-container">
            {courses.map((Course, index) => (
                <div key={index} className="card-item">
                    <img src={Course.image} alt={Course.name} className="imagecard" />
                    <div className="card-content">
                        <h3>{Course.name}</h3>
                        <p>{Course.description}</p>
                        <button className="card-button">Learn more</button>
                    </div>
                </div>
            ))}
        </div>
        </section> 
</>
    )
};
export default Course;
