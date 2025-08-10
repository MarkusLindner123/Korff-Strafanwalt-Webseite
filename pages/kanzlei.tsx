// pages/kanzlei.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageHeader/PageHeader"; // <-- Import hinzufügen

const Kanzlei = () => {
  return (
    <Layout>
      {/* Die statische Hero-Sektion wird durch die Komponente ersetzt */}
      <PageHeader title="Die Kanzlei Korff in Berlin" />

      {/* Hauptinhalt bleibt unverändert */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Herzlich willkommen bei der Kanzlei Korff. Seit unserer Gründung in
            Berlin-Mitte setzen wir uns mit Leidenschaft und Expertise für die
            Rechte unserer Mandanten ein. Unsere Philosophie beruht auf einem
            tiefen Verständnis für die juristischen Herausforderungen, denen Sie
            sich gegenübersehen, und dem unerschütterlichen Engagement, für Sie
            die bestmöglichen Ergebnisse zu erzielen.
          </p>
          <p className="mb-6">
            Wir stehen Ihnen in allen Phasen des Verfahrens zur Seite – von der
            ersten Beratung bis zur Verhandlung vor Gericht. Unsere Arbeit
            zeichnet sich durch transparente Kommunikation und eine persönliche
            Betreuung aus. Sie können darauf vertrauen, dass wir Ihren Fall mit
            größter Sorgfalt und Diskretion behandeln.
          </p>
          <p>
            Anwalt Korff verfügt über langjährige Erfahrung und ein umfassendes
            Wissen im Strafrecht. Wir sind stolz darauf, Mandanten in Berlin und
            Umgebung eine kompetente und zuverlässige Verteidigung zu bieten.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Kanzlei;
