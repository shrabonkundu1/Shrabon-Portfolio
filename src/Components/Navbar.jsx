import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVarients = {
    open: {
      x: 0,
      transition: {
        stifness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stifness: 20,
        damping: 15,
      },
    },
  };
  return (
    <div className="fixed top-0 left-0  bg-opacity-70 backdrop-blur-md z-50 ">
      <div
        className=" mx-auto  flex justify-between text-gray-200
         items-center px-6 md:px-12 h-20"
      >
        <div className="flex gap-[500px]">
          <a href="#" className="text-4xl font-ysabeau font-bold md:pl-16">
            Shrabon K
          </a>

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
        </div>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200 pl-36">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVarients}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link
                to="home"
                onClick={closeNav}
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
                onClick={closeNav}
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
                onClick={closeNav}
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
                onClick={closeNav}
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
                onClick={closeNav}
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
                onClick={closeNav}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
