import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-[#190b1f] pb-16 ">
      <div className="divider w-[90%] mx-auto"></div>
      <footer className="footer footer-center  text-base-content rounded p-10">
        <nav className="grid grid-flow-col text-xl gap-4">
           <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                     <li>
                       <Link
                         to="home"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500 "
                       >
                         Home
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="about"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500"
                       >
                         About
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="skills"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500"
                       >
                         Skills
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="education"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500"
                       >
                         Education
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="projects"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500"
                       >
                         Projects
                       </Link>
                     </li>
                     <li>
                       <Link
                         to="contact"
                         smooth={true}
                         offset={50}
                         duration={500}
                         className="text-[16px] font-ysabeau"
                         activeClass="text-green-500"
                       >
                         Contact
                       </Link>
                     </li>
                   </ul>
        </nav>
        <div className="flex gap-6 flex-row text-3xl md:text-4xl text-purple-400 z-20">
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <a href="https://web.facebook.com/shyam.kundu.9822">
              {" "}
              <AiOutlineFacebook />
            </a>
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <a href="https://github.com/shrabonkundu1">
              <AiOutlineGithub />
            </a>
          </motion.a>

          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <a href="https://github.com/shrabonkundu1">
              <AiOutlineLinkedin />
            </a>
          </motion.a>

          <motion.a whileHover={{ scale: 1.2 }} href="#">
            <a href="https://www.instagram.com/kundushrabon/">
              {" "}
              <AiOutlineInstagram />
            </a>
          </motion.a>
        </div>
        <aside>
          <p className="text-[18px]">
            Copyright © {new Date().getFullYear()} - Shrabon K All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
