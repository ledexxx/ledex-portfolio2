// App.jsx
import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Portfolio from "../src/components/Portfolio";
import Testimonials from "./components/IntroducingBolt";
import Footer from "../src/components/Footer";
import LeadersSection from "./components/LeadersSection";
import IntroducingBolt from "./components/IntroducingBolt";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <LeadersSection/>
      <Features />
      <Portfolio />
      <IntroducingBolt />
      <Footer />
    </div>
  );
}

export default App;
