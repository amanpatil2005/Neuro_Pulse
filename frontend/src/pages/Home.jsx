import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services";
import TechPulseInsight from "../components/TechPulseInsight";
import NeuroPulseTestimonials from "../components/NeuroPulseTestinomials";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <TechPulseInsight />
      <NeuroPulseTestimonials />
    </div>
  );
};

export default Home;