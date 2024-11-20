import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <div className="w-6 h-6 bg-white text-black flex justify-center items-center rounded-full">
            ✚
          </div>
          <span className="ml-2">Atomic</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              FAQs
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
