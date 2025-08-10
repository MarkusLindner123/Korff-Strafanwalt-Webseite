// pages/kontakt.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import ContactSection from "../components/ContactSection/ContactSection"; // <-- Import anpassen
import PageHeader from "../components/PageHeader/PageHeader";
const Kontakt = () => {
  return (
    <Layout>
      <PageHeader title="Kontakt & Notruf" />
      <ContactSection />
    </Layout>
  );
};

export default Kontakt;
