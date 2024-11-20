import React from "react";
import { FaLaptopCode, FaInfoCircle, FaStar, FaShareAlt, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white py-4 fixed top-0 w-full z-50 backdrop-blur-sm border-b-[0px]">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <div className="w-24 h-24 flex justify-center items-center">
            <img src="/images/ledex.png" alt="Logo ledex" />
          </div>
          <span className="ml-2 hidden">Ledex</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8 px-4 py-2 border border-gray-400 rounded-full bg-black/50 backdrop-blur-sm">
          <li className="flex items-center space-x-2">
            <FaLaptopCode />
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-white transition duration-200 flex items-center space-x-2"
            >
              <span>Portafolio</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaInfoCircle />
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition duration-200 flex items-center space-x-2"
            >
              <span>Acerca de mi</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaStar />
            <a
              href="#testimonials"
              className="text-gray-400 hover:text-white transition duration-200 flex items-center space-x-2"
            >
              <span>Testimonios</span>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <FaShareAlt />
            <a
              href="#faqs"
              className="text-gray-400 hover:text-white transition duration-200 flex items-center space-x-2"
            >
              <span>Redes</span>
            </a>
          </li>
        </ul>

        {/* Notify Button */}
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-400 text-gray-400 rounded-full hover:border-white hover:text-white transition duration-200">
          <FaDownload />
          <span>Download CV</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
