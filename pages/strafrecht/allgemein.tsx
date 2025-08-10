import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

// Die neue Layout-Komponente für Unterseiten
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const AllgemeinesStrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Allgemeines Strafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Umfassende Verteidigung im Allgemeinen Strafrecht. Wir verteidigen Sie bei Diebstahl, Betrug, Körperverletzung, Sachbeschädigung und weiteren Delikten."
        />
      </Head>

      <Header />

      <PageHeader title="Allgemeines Strafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Das allgemeine Strafrecht befasst sich mit den klassischen Delikten
            des Strafgesetzbuches (StGB). Die Kanzlei Korff berät und verteidigt
            Sie in allen Phasen des Verfahrens.
          </p>
          <p>
            Im strafrechtlichen Ermittlungsverfahren stehen sich Beschuldigter
            und Staatsanwaltschaft bzw. Polizei gegenüber. In diesem Kampf
            befindet sich der Beschuldigte, der mit den juristischen Regeln
            meist nicht vertraut ist, in einer schlechten Ausgangslage. Als
            Anwalt für Strafrecht und Strafverteidiger ist es unsere Aufgabe,
            die Waffengleichheit wiederherzustellen und Ihre Interessen mit
            Nachdruck zu vertreten.
          </p>
          <p>
            Zu den wichtigsten Grundsätzen gehört es,{" "}
            <strong>
              niemals ohne Aktenkenntnis und Rücksprache mit einem Anwalt eine
              Aussage zu machen
            </strong>
            . Dieser entscheidende Tipp ist der erste Schritt zu einer
            erfolgreichen Verteidigungsstrategie.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Häufige Delikte im Allgemeinen Strafrecht:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Diebstahl (&sect;&sect; 242 ff. StGB)</li>
            <li>Betrug (&sect;&sect; 263 ff. StGB)</li>
            <li>Urkundenfälschung (&sect; 267 StGB)</li>
            <li>Körperverletzung (&sect;&sect; 223 ff. StGB)</li>
            <li>Tötungsdelikte (&sect;&sect; 211 ff. StGB)</li>
            <li>Sachbeschädigung (&sect; 303 StGB)</li>
            <li>Nötigung (&sect; 240 StGB)</li>
            <li>Hausfriedensbruch (&sect; 123 StGB)</li>
          </ul>

          <p className="mt-8 font-semibold">
            Sollten Sie eine Vorladung als Beschuldigter erhalten haben oder
            sich in einer anderen strafrechtlichen Situation befinden, nehmen
            Sie einfach{" "}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns auf.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default AllgemeinesStrafrechtPage;
