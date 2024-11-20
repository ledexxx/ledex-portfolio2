// App.jsx
import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Portfolio from "../src/components/Portfolio";
import Testimonials from "./components/about";
import Footer from "../src/components/Footer";
import LeadersSection from "./components/LeadersSection";
import About from "./components/about";

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <LeadersSection/>
      <Portfolio />
      <Features />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
