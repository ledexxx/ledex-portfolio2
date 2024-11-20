import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6"
    >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Diseño, <br /> y programación
        </h1>
        <p className="text-gray-400 text-lg mb-6">
        Hola, soy Leonel Delgado, diseñador gráfico y desarrollador web. Transformo tus ideas en experiencias <br />
        visuales cautivadoras. También estoy aprendiendo Java para ampliar mis habilidades técnicas. <br /> Explora mi trabajo
         y descubre cómo puedo ayudarte a dar vida a tus proyectos.
        </p>

        {/* Email Notification Form */}
        <div className="flex justify-center items-center">
          <input
            type="Nombre"
            placeholder="nombre@email.com"
            className="bg-gray-800 text-gray-300 rounded-full px-6 py-3 w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="ml-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:brightness-110 transition duration-200">
            Contáctame
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
