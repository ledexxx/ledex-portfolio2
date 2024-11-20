import React from "react";

const LeadersSection = () => {
  const logos = [
    { name: "Headspace", src: "/logos/headspace.svg" },
    { name: "Shopify", src: "/logos/shopify.svg" },
    { name: "Volvo", src: "/logos/volvo.svg" },
    { name: "Mobbin", src: "/logos/mobbin.svg" },
    { name: "Pinterest", src: "/logos/pinterest.svg" },
    { name: "Duolingo", src: "/logos/duolingo.svg" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-8">Already chosen by the leaders</p>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
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
