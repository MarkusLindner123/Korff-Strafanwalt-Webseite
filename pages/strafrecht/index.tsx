// pages/index.tsx

import React from "react";
import Layout from "../../components/Layout/Layout";
import HeroSection from "../../components/sections/HeroSection";
import ServicesSection from "../../components/sections/ServicesSection";
import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import MapSection from "../../components/sections/MapSection";

const StrafrechtHome = () => {
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

export default StrafrechtHome;
