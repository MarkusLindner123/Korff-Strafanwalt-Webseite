// pages/kanzlei.tsx

import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import { useI18n } from "../lib/i18n/I18nProvider";

const Kanzlei = () => {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("home.about.title")} />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            {t("home.about.paragraph1")}
          </p>
          <p className="mb-6">
            Wir stehen Ihnen in allen Phasen des Verfahrens zur Seite – von der ersten Beratung bis zur Verhandlung vor Gericht. Unsere Arbeit zeichnet sich durch transparente Kommunikation und eine persönliche Betreuung aus. Sie können darauf vertrauen, dass wir Ihren Fall mit größter Sorgfalt und Diskretion behandeln.
          </p>
          <p>
            Anwalt Korff verfügt über langjährige Erfahrung und ein umfassendes Wissen im Strafrecht. Wir sind stolz darauf, Mandanten in Berlin und Umgebung eine kompetente und zuverlässige Verteidigung zu bieten.
          </p>
        </div>
      </div>
    </>
  );
};

export default Kanzlei;
