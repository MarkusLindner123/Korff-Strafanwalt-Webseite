// pages/kontakt.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import ContactSection from "../components/ContactSection/ContactSection"; // <-- Import anpassen

const Kontakt = () => {
  return (
    <Layout>
      <div className="bg-gray-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Kontakt & Notruf</h1>
      </div>
      <ContactSection />
    </Layout>
  );
};

export default Kontakt;
