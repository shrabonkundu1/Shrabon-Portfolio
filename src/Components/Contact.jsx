import Lottie from "lottie-react";
import React from "react";
import send from "../Lottie/send.json";
import contact from "../Lottie/contact.json";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="bg-[#190b1f] pb-20 " id="contact">
      <h2 className="text-4xl text-center md:mt-10 font-medium text-gray-200 font-ysabeau md:text-6xl font-grotesk">
        Contact Me
      </h2>

      {/* <div className="flex flex-col md:flow-row justify-between items-center "> */}
        <div className="flex flex-col md:flex-row md:gap-52 gap-8 items-center justify-center bg-[#190b1f] px-4 mt-16">
          <div className="w-full max-w-lg bg-[#1c0c23] p-6 rounded-lg shadow-md">
            <h2 className="text-white text-2xl font-semibold mb-4">
              Send me a message
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#370e48] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#370e48] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message"
                  className="w-full px-4 py-3 bg-[#4f2063] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                ></textarea>
              </div>
              <button
                type="button"
                className="flex gap-2 justify-center items-center w-full bg-gradient-to-tl from-[#281232] via-[#70099c] to-[#2d053e] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                <span> Send Message</span>{" "}
                <Lottie animationData={send} className="w-12"></Lottie>
              </button>
            </form>
          </div>
        <div>
            <h2 className="text-2xl text-center font-medium text-purple-600 font-ysabeau md:text-4xl font-grotesk">Get In Touch</h2>
          <Lottie animationData={contact} className="w-80 h-72"></Lottie>
        <div className="mt-2 text-left text-xl">
        <p className="flex gap-1 justify-start items-center"><CiLocationOn /><span> Dhaka Faridpur, Bangladesh</span>
        </p>
        <p className="flex gap-1 justify-start items-center"><MdOutlineEmail /> shrabonkundu@gmail.com
        </p> <p className="flex gap-1 justify-start items-center"><FaWhatsapp />+8801865782374
        </p>
        </div>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Contact;
