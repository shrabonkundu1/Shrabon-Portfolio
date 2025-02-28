import Lottie from 'lottie-react';
import React from 'react';
import aboutLottie from '../Lottie/about.json'
const About = () => {
    return (
        <div className='bg-[#190b1f] mb-20 md:mb-28 ' id='about'>
            <h2 className='text-4xl text-center md:mt-10 font-medium text-gray-200 font-ysabeau md:text-6xl font-grotesk mb-10 '>About Me</h2>
            <div className='flex w-[90%] mx-auto gap-8 justify-center items-center flex-col md:flex-row-reverse'>
            <div>
                <Lottie animationData={aboutLottie} className='md:w-[600px] md:h-[500px] h-full w-full'></Lottie>
                </div>
                <p className='text-gray-50  text-[18px]'>
                <span className='text-2xl'>Hi</span>, I'm Shrabon Kundu, a passionate web developer currently studying Computer Science and Technology in Faridpur. I specialize in <span className='text-purple-600'>HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Firebase,</span> building modern, responsive, and efficient web applications. <br />
                With a track record of completing 40+ diverse projects, I constantly push myself to refine my skills and tackle new challenges. I also successfully completed a Frontend Development course from Programming Hero, which enhanced my problem-solving abilities and deepened my technical knowledge. <br />
                With a track record of completing 40+ diverse projects, I constantly push myself to refine my skills and tackle new challenges. I also successfully completed a Frontend Development course from Programming Hero, which enhanced my problem-solving abilities and deepened my technical knowledge. <br />
                I'm always open to collaborating on exciting projects and contributing to meaningful ideas. Let's connect and create something amazing together!
                </p>
                
            </div>
        </div>
    );
};

export default About;