import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import PageHeader from "../../../components/PageHeader/PageHeader";
import ContactSection from "../../../components/ContactSection/ContactSection";
import StrafrechtSubPageLayout from "../../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const VerkehrsStrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Verkehrsstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Verkehrsstrafrecht. Wir beraten Sie bei Fahrerflucht, Trunkenheit im Verkehr und weiteren Delikten."
        />
      </Head>

      <PageHeader title="Verkehrsstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Jeder, der sich im Straßenverkehr bewegt, kann sich schneller
            strafbar machen als man denkt. Egal ob bewusst oder fahrlässig –
            schon ein kleiner Fehler kann weitreichende Folgen haben. Wir
            verteidigen Sie bei sämtlichen Delikten des Verkehrsstrafrechts.
          </p>
          <p>
            Die häufigsten Verkehrsstraftaten reichen von Fahren ohne
            Fahrerlaubnis bis hin zu schwerwiegenden Delikten wie Trunkenheit im
            Verkehr oder unerlaubtem Entfernen vom Unfallort.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Häufige Delikte im Verkehrsstrafrecht:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Unerlaubtes Entfernen vom Unfallort, Fahrerflucht (§ 142 StGB)
            </li>
            <li>Fahrlässige Tötung (§ 222 StGB)</li>
            <li>Fahrlässige Körperverletzung (§ 229 StGB)</li>
            <li>Nötigung (§ 240 StGB)</li>
            <li>Gefährlicher Eingriff in den Straßenverkehr (§ 315b StGB)</li>
            <li>Gefährdung des Straßenverkehrs (§ 315c StGB)</li>
            <li>Trunkenheit im Verkehr (§ 316 StGB)</li>
            <li>Vollrausch (§ 323a StGB)</li>
            <li>Unterlassene Hilfeleistung (§ 323c StGB)</li>
            <li>Fahren ohne Fahrerlaubnis (§ 21 StVG)</li>
            <li>Kennzeichenmissbrauch (§ 22 StVG)</li>
            <li>Fahren ohne Pflichtversicherung (§ 6 PflVersG)</li>
          </ul>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Mögliche Rechtsfolgen bei Verkehrsstraftaten
          </h3>
          <p>
            Verkehrsstraftaten können unterschiedlichste Rechtsfolgen nach sich
            ziehen. Im besten Fall wird das Verfahren gegen oder ohne
            Geldauflage eingestellt. Im Falle einer Anklage drohen empfindliche
            Geld- oder Freiheitsstrafen.
          </p>
          <p>
            Neben den klassischen Sanktionen sind insbesondere das Fahrverbot
            und die Entziehung der Fahrerlaubnis bedeutsam. Diese können für die
            Betroffenen, je nach beruflichem Umfeld, gravierende bis
            existenzbedrohende Folgen nach sich ziehen. Es ist daher
            unerlässlich, frühzeitig einen Rechtsanwalt aufzusuchen, um die
            Verteidigungsmöglichkeiten zu besprechen.
          </p>
          <p className="mt-8 font-semibold">
            Gerne berät Sie die Kanzlei Korff in allen Fragen des
            Verkehrsstrafrechts. Nehmen Sie einfach{" "}
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
    </>
  );
};

export default VerkehrsStrafrechtPage;
