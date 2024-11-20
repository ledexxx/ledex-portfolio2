import React from "react";

const Portfolio = () => {
  const projects = [
    { 
      title: "Popi Floreria", 
      image: "/images/popi.png", 
      description: "E-commerce de una floreria de Popi" 
    },
    { 
      title: "FuturaLib", 
      image: "/images/futuralib.png", 
      description: "Programa de gestión de biblioteca" 
    },
    { 
      title: "AP Logistics", 
      image: "/images/image-1.png", 
      description: "Programa de gestión de inventario general" 
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-yellow-400 font-bold text-sm mb-4">✖ Proyectos</h2>
        <h3 className="text-4xl font-extrabold mb-10">
         Últimos Proyectos realizados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white px-4 py-2 bg-yellow-400  rounded-full font-bold">
                    Visitar Demo
                  </p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
