import React from "react";
import { FaMoneyBillWave, FaPaintBrush, FaChartLine } from "react-icons/fa"; // Ejemplo de íconos

const Features = () => {
  const features = [
    {
      title: "Cost effective solution",
      description: "Set high-quality design work at a fraction of the cost.",
      icon: <FaMoneyBillWave className="text-yellow-400 text-4xl mb-6 mx-auto" />,
    },
    {
      title: "Tailor-made design",
      description: "We’ve got the expertise to make your vision a reality.",
      icon: <FaPaintBrush className="text-yellow-400 text-4xl mb-6 mx-auto" />,
    },
    {
      title: "Scalable as you grow",
      description: "We’re ready to meet your evolving needs.",
      icon: <FaChartLine className="text-yellow-400 text-4xl mb-6 mx-auto" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-yellow-400 font-bold text-sm mb-4">✖ Puntos Fuertes</h2>
        <h3 className="text-4xl font-extrabold mb-10">
          Resuelvo problemas <br /> de formas creativas y{" "}
          <span className="text-yellow-400"> efectivas.</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: "#1A1A1A80",
                backdropFilter: "blur(12px)", // Efecto de desenfoque
              }}
            >
              {feature.icon}
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
