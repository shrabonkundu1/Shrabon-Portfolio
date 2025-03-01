import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "../assets/collaborative-learning-flat-vector-53713605.jpg";
import project2 from '../assets/project2.png'
import project3 from '../assets/download (3).jpg'
const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500, 
          easing: "ease-out-quart", 
          // easing: "ease-in-out"
        });
      }, []);
    
  return (
    <div className="bg-[#190b1f] pb-20 w-[90%] mx-auto" id="projects">
      <h2 className="text-4xl text-center md:mt-10 font-medium text-gray-200 font-ysabeau md:text-6xl font-grotesk"  data-aos="fade-up">
        My Projects
      </h2>

      <div className=" mt-24 space-y-10">


        {/* Project 1 */}
        <div className="flex flex-col md:flex-row  bg-[#421257] w-5/6 mx-auto rounded-md hover:shadow-lg hover:shadow-[#ff52d9]  hover:scale-105 transition transform duration-300"  data-aos="fade-up">
          <figure>
            <img className="w-[2000px] h-full" src={project1} alt="Shoes" />
          </figure>
          <div className="p-5 ">
            <h2 className="text-2xl font-bold text-purple-400">
              Collaborative Study Platform
            </h2>
            <p className="text-gray-50 md:w-11/12">
            A MERN-based Collaborative Study Platform enabling seamless study session scheduling, resource sharing, and user management. With secure authentication, role-based access, and an intuitive interface, it enhances collaboration, improves accessibility, and streamlines educational activities for students, tutors, and administrators.
            </p>
            <div className="md:w-2/3">
              <div className="badge badge-secondary m-1">React</div>
              <div className="badge badge-secondary m-1">Tailwind</div>
              <div className="badge badge-secondary m-1">DaisyUI</div>
              <div className="badge badge-secondary m-1">NodeJS</div>
              <div className="badge badge-secondary m-1">ExpressJs</div>
              <div className="badge badge-secondary m-1">Firebase</div>
              <div className="badge badge-secondary m-1">MongoDb</div>
              <div className="badge badge-secondary m-1">JWT</div>
              <div className="badge badge-secondary m-1">Lottie React </div>
              <div className="badge badge-secondary m-1">Cookie-parser</div>
              <div className="badge badge-secondary m-1">Axios</div>
            </div>
            <div className="flex gap-4 justify-start items-center mt-3">
              <Link
                to={"https://scholar-s-den.web.app/"}
               className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Live Site
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-shrabonkundu1"
                }
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Client Code{" "}
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-shrabonkundu1"
                }
               className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Server Code
              </Link>
            </div>
          </div>
        </div>
        {/* project 1end */}
       
        {/* Project 2  */}
        <div className="flex flex-col md:flex-row  bg-[#421257] w-5/6 mx-auto rounded-md hover:shadow-lg hover:shadow-[#ff52d9]  hover:scale-105 transition transform duration-300" data-aos="fade-up">
          <figure>
            <img className="w-[2000px] h-full " src={project2} alt="Shoes" />
          </figure>
          <div className="p-5 ">
            <h2 className="text-2xl font-bold text-purple-400">
              Master Dental Care
            </h2>
            <p className="text-gray-50 md:w-11/12">
            Master Dental Surgery is a dynamic blog website designed for dental professionals and enthusiasts. Built with React and Firebase, it offers a seamless, user-friendly experience with responsive design, interactive content, and efficient blog management, ensuring insightful discussions on dental health and innovations.
            </p>
            <div className="md:w-2/3">
              <div className="badge badge-secondary m-1">React</div>
              <div className="badge badge-secondary m-1">Tailwind</div>
              <div className="badge badge-secondary m-1">DaisyUI</div>
              <div className="badge badge-secondary m-1">NodeJS</div>
              <div className="badge badge-secondary m-1">ExpressJs</div>
              <div className="badge badge-secondary m-1">Firebase</div>
              <div className="badge badge-secondary m-1">MongoDb</div>
              <div className="badge badge-secondary m-1">JWT</div>
              <div className="badge badge-secondary m-1">Lottie React </div>
              <div className="badge badge-secondary m-1">Cookie-parser</div>
              <div className="badge badge-secondary m-1">Axios</div>
            </div>
            <div className="flex md:gap-4 gap-3 justify-start items-center mt-3">
              <Link
                to={"https://master-dental-care.web.app/"}
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Live Site
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-shrabonkundu1"
                }
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Client Code{" "}
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-shrabonkundu1"
                }
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Server Code
              </Link>
            </div>
          </div>
        </div>
        {/* project 2 end */}


        {/* Project 3 */}
        <div className="flex flex-col md:flex-row  bg-[#421257] w-5/6 mx-auto rounded-md hover:shadow-lg hover:shadow-[#ff52d9]  hover:scale-105 transition transform duration-300" data-aos="fade-up">
          <figure>
            <img className="w-[2000px] h-full object-cover" src={project3} alt="Shoes" />
          </figure>
          <div className="p-5 ">
            <h2 className="text-2xl font-bold text-purple-400">
            A Game Review Application
            </h2>
            <p className="text-gray-50 md:w-11/12">
            Chill Gamer is a user-friendly game review platform designed for gamers to explore, share, and engage with reviews effortlessly. Featuring secure authentication, dynamic review management, and a clean, responsive UI, it delivers a seamless and enjoyable experience for all gaming enthusiasts.
            </p>
            <div className="md:w-2/3">
              <div className="badge badge-secondary m-1">React</div>
              <div className="badge badge-secondary m-1">Tailwind</div>
              <div className="badge badge-secondary m-1">DaisyUI</div>
              <div className="badge badge-secondary m-1">NodeJS</div>
              <div className="badge badge-secondary m-1">ExpressJs</div>
              <div className="badge badge-secondary m-1">Firebase</div>
              <div className="badge badge-secondary m-1">MongoDb</div>
              <div className="badge badge-secondary m-1">JWT</div>
              <div className="badge badge-secondary m-1">Lottie React </div>
              <div className="badge badge-secondary m-1">Cookie-parser</div>
              <div className="badge badge-secondary m-1">Axios</div>
            </div>
            <div className="flex gap-4 justify-start items-center mt-3">
              <Link
                to={"https://game-review-531c3.web.app/"}
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Live Site
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-shrabonkundu1"
                }
               className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Client Code{" "}
              </Link>
              <Link
                to={
                  "https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-shrabonkundu1"
                }
                className="px-2 md:px-5 py-3 md:py-4 rounded-lg text-xs md:text-[16px] bg-gradient-to-br border-none text-white from-[#c66ced] via-[#841db1] to-[#38074e]"
              >
                Server Code
              </Link>
            </div>
          </div>
        </div>
        {/* project 3 end */}




      </div>
    </div>
  );
};

export default Projects;
