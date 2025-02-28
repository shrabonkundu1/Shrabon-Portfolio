import React from "react";
import portfolioPic from "../assets/Group 3 (3).png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="py-24  mx-auto relative" id="home">
      <div className="flex flex-col justify-between md:flex-row-reverse place-items-center gap-8">
        <motion.img
          src={portfolioPic}
          className=" w-[280px]  md:w-[450px] md:mr-40"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:ml-40"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl  text-5xl tracking-tight mb-2"
          >
            HEY, I AM <br />
            <span className="text-purple-500">SHRABON KUNDU</span>
          </motion.p>
          <TypeAnimation
            sequence={["Front End Developer", 1500, "Web Designer", 1500]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl  mt-3 py-16"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[340px] md:max-w-[550px] md:text-2xl text-lg mb-6"
          >
            I am a web developer from Bangladesh, creating visually stunning and
            user-friendly experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                <motion.a whileHover={{ scale: 1.2 }} href="#">
                               <a href="https://web.facebook.com/shyam.kundu.9822"> <AiOutlineFacebook /></a>
                              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
              <a href="https://github.com/shrabonkundu1"><AiOutlineGithub /></a> 
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
              <a href="https://github.com/shrabonkundu1"><AiOutlineLinkedin /></a>   
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
              <a href="https://www.instagram.com/kundushrabon/"> <AiOutlineInstagram /></a> 
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div> */}

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
