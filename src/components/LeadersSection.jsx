import React from "react";
import { BiLogoFlutter } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";

const LeadersSection = () => {
  const logos = [
    { name: "Flutter", src: <BiLogoFlutter />},
    { name: "Html", src: <FaHtml5 /> },
    { name: "CSS", src: <IoLogoCss3 /> },
    { name: "Mobbin", src: "/logos/mobbin.svg" },
    { name: "Pinterest", src: "/logos/pinterest.svg" },
    { name: "Duolingo", src: "/logos/duolingo.svg" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-8">Tecnologías en aprendizaje</p>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
            
              alt={logo.name}
              className="h-10 opacity-50 hover:opacity-100 transition duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
