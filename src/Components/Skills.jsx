import React, { useEffect } from 'react';
import {
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiJavascript1,
    DiMongodb,
    DiNodejs,
    DiNodejsSmall,
    DiReact,
  } from "react-icons/di";
import { FaGitAlt, FaGithub } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandNodejs, TbBrandVscode } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import figma from '../assets/figma.png';
import pixso from '../assets/download.jpeg';

import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500, 
          easing: "ease-out-quart", 
          // easing: "ease-in-out"
          once: true, 
        });
      }, []);
    return (
        <div className='bg-[#190b1f] mb-20 ' id='skills'>
            <h2 className='text-4xl text-center md:mt-10 font-medium text-gray-200 font-ysabeau md:text-6xl font-grotesk' data-aos="fade-up">Skills I Have</h2>

            <div className='grid md:grid-cols-2 md:py-24 py-10 md:w-3/4 w-[90%] mx-auto'>
                <div className='border-r-2 border-b-2 border-purple-700 h-[280px] md:p-8 p-5 text-gray-200 text-2xl font-semibold' >
                  <div data-aos="fade-right">
                  <h2>Front-end Development</h2>
                    <div className='grid grid-cols-3 gap-8 text-6xl mt-10'>
                        <DiHtml5 className="text-orange-600 mx-2  border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <DiCss3 className="text-blue-500 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <RiTailwindCssFill className="text-blue-400 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <DiJavascript className="text-yellow-500 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <DiReact className="text-blue-500 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <IoLogoFirebase  className="text-yellow-500 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black"/>
                        {/* <DiNodejsSmall className="text-green-500 mx-2" /> */}
                  </div>
                    </div>
                </div>


                <div className='border-l-2 border-b-2 border-purple-700 h-[280px] p-8 text-gray-200 text-2xl font-semibold' >
                   <div  data-aos="fade-left">
                   <h2 className=''>Backend Development</h2>
                    <div className='grid grid-cols-2 gap-8 text-6xl  mt-10'>
                        <SiMongodb className="text-green-600 mx-2  border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <SiExpress className="text-gray-200  mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />                     
                        <DiNodejsSmall className="text-green-500 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 text-6xl from-slate-500 via-slate-800 to-black" />
                        <RiNextjsLine className="text-slate-200 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 text-6xl from-slate-500 via-slate-800 to-black"/>
                    </div>
                   </div>
                </div>


                <div className='border-r-2 border-t-2 border-purple-700 h-[200px] p-8 text-gray-200 text-2xl font-semibold'>
                 <div   data-aos="fade-right">
                 <h2>Version Control & Tools</h2>
                    <div className='grid grid-cols-3 gap-8 text-6xl mt-10'>
                        <FaGitAlt className="text-red-600 mx-2  border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />
                        <FaGithub className="text-yellow-500  mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black" />                     
                        <VscVscode  className="text-blue-600 mx-2 border w-full rounded-lg bg-gradient-to-tl py-2 text-6xl from-slate-500 via-slate-800 to-black" />
                    </div>
                 </div>
                </div>


                <div className='border-l-2 border-t-2 border-purple-700 h-[200px] p-8 text-gray-200 text-2xl font-semibold' >
                   <div  data-aos="fade-left">
                   <h1>UI/UX Design</h1>
                    <div className='grid grid-cols-3 w-full gap-8 text-6xl mt-10'>
                    <div className='border w-full rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black"'>
                    <img className=' h-14 mx-auto' src={figma} alt="" />
                    </div>
                    <div className='border w-full  rounded-lg bg-gradient-to-tl py-2 from-slate-500 via-slate-800 to-black"'>
                    <img className='  h-14  rounded-full mx-auto' src={pixso} alt="" />
                    </div>
                   </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;