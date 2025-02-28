import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Education from '../Components/Education';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;