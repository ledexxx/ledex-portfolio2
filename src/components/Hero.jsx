import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6"
    >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold leading-tight mb-4">
          Design work, <br /> the efficient way
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Innovative design solutions for technology firms and emerging
          businesses weary of the typical aesthetic methodology. Arriving
          shortly.
        </p>

        {/* Email Notification Form */}
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-gray-800 text-gray-300 rounded-full px-6 py-3 w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button className="ml-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:brightness-110 transition duration-200">
            Get notified
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
