import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Popi Floreria",
      image: "/images/popi.png",
      url: "https://popifloreria.netlify.app",
      description: "E-commerce de una florería de Popi",
    },
    {
      title: "FuturaLib",
      image: "/images/futuralib.png",
      url: "https://www.canva.com/design/DAF23vLd18w/LaC7L7cHuEhYFtg5d05umQ/view?utm_content=DAF23vLd18w&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      description: "Programa de gestión de biblioteca",
    },
    {
      title: "AP Logistics",
      image: "/images/image-1.png",
      url: "https://vercelaplogi.vercel.app/",
      description: "Programa de gestión de inventario general",
    },
    {
      title: "Menú Restaurant Atarashi",
      image: "/images/atarashi.png",
      url: "https://atarashi-sushi-menu.vercel.app/",
      description: "Menú de sushi para restaurant en Coquimbo",
  },
    {
      title: "Proyecto Jerald",
      image: "/images/image-1.jpg",
      url: "https://github.com/ledexxx/ProyectoJerald",
      description: "Aplicación de texto web",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-yellow-400 font-bold text-sm mb-4">✖ Proyectos</h2>
        <h3 className="text-4xl font-extrabold mb-10">
          Últimos Proyectos Realizados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: "#1A1A1A80",
                backdropFilter: "blur(12px)", // Efecto de desenfoque
              }}
            >
              <div className="mb-4">
                {/* Imagen con borde curvo */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Botón de acción en overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white px-4 py-2 bg-yellow-400 rounded-full font-bold"
                    >
                      Visitar Demo
                    </a>
                  </div>
                </div>
              </div>
              {/* Información del proyecto */}
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {/* Indicador gráfico o decorativo */}
                <div className="h-1 w-20 bg-green-400 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
