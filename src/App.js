import React from 'react';
import Header from'./components/header'
import Hero from './components/home/hero'
import About from './components/About-us/about';
import Title from './components/courses/titlecourse';
import Course from './components/courses/Allcourses';
import Contact from './components/contact-us/contact';
import './App.css';
function App() {
  return (
    <div className="App">
        <Header />
        <Hero/>
        <About/>
        <Title Title="Explore-courses"/>
        <div className='app'>
         <Course/>
         </div>
         <Contact/>
    </div>
  );
}

export default App;
