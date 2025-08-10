// pages/kontakt.tsx

import React from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import PageHeader from "../components/PageHeader/PageHeader";
import { useI18n } from "../lib/i18n/I18nProvider";

const Kontakt = () => {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("contact.title")} />
      <ContactSection />
    </>
  );
};

export default Kontakt;
