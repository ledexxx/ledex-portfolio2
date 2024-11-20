import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white py-4 fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <div className="w-24 h-24  flex justify-center items-center ">
            <img src="/images/ledex.png" alt="Logo ledex" />
          </div>
          <span className="ml-2 hidden">Ledex</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8 px-4 py-2 border border-gray-400 rounded-full bg-black/50 backdrop-blur-sm">
          <li>
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Introducción
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Redes
            </a>
          </li>
        </ul>

        {/* Notify Button */}
        <button className="px-4 py-2 border border-gray-400 text-gray-400 rounded-full hover:border-white hover:text-white transition duration-200">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
