import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Education from '../Components/Education';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;