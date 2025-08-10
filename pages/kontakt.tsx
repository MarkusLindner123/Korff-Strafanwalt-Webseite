// pages/kontakt.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import ContactSection from "../components/ContactSection/ContactSection"; // <-- Import anpassen
import PageHeader from "../components/PageHeader/PageHeader";
import { useI18n } from "../lib/i18n/I18nProvider";

const Kontakt = () => {
  const { t } = useI18n();
  return (
    <Layout>
      <PageHeader title={t("contact.title")} />
      <ContactSection />
    </Layout>
  );
};

export default Kontakt;
