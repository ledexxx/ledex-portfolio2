import React from "react";
import { BiLogoFlutter } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const LeadersSection = () => {
  const logos = [
    { name: "Flutter", component: <BiLogoFlutter size={30} /> },
    { name: "Html", component: <FaHtml5 size={30} /> },
    { name: "CSS", component: <IoLogoCss3 size={30} /> },
    { name: "MySQL", component: <SiMysql size={30} /> },
    { name: "Photoshop", component: <SiAdobephotoshop size={30} /> },
    { name: "Figma", component: <FaFigma size={30}/> },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-8"> ✖ Tecnologías en aprendizaje</p>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center h-16 w-16 opacity-50 hover:opacity-100  hover:text-yellow-400 transition duration-200"
            >
              {logo.component ? (
                logo.component 
              ) : (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full hover:text-yellow-400"
                />
              )}
              <span className="text-sm mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
