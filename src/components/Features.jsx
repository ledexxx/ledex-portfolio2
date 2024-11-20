import React from "react";

const Features = () => {
  const features = [
    {
      title: "Cost effective solution",
      description: "Set high-quality design work at a fraction of the cost.",
      icon: "/icons/growth.svg",
    },
    {
      title: "Tailor-made design",
      description: "We’ve got the expertise to make your vision a reality.",
      icon: "/icons/design.svg",
    },
    {
      title: "Scalable as you grow",
      description: "We’re ready to meet your evolving needs.",
      icon: "/icons/scale.svg",
    },
  ];

  return (
    <section id="features" className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-yellow-400 font-bold text-sm mb-4">✖ What you’ll get</h2>
        <h3 className="text-4xl font-extrabold mb-10">
          We resolve problems associated <br /> with creative procedures.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <img src={feature.icon} alt={feature.title} className="h-12 mb-6 mx-auto" />
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
