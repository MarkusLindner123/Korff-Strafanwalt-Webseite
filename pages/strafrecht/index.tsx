// pages/index.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import ServicesSection from "../components/sections/ServicesSection/ServicesSection";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection"; // <-- Import-Pfad korrigiert
import MapSection from "../components/sections/MapSection/MapSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <MapSection />
    </Layout>
  );
};

export default Home;
