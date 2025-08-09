import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import Header from "../../../components/Header/Header";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Footer from "../../../components/Footer/Footer";
import ContactSection from "../../../components/ContactSection/ContactSection";

// Die neue Layout-Komponente für Unterseiten
import StrafrechtSubPageLayout from "../../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const AllgemeinesStrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Allgemeines Strafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Verteidigung bei 'Alltagskriminalität': Diebstahl, Betrug, Nötigung und anderen Delikten des allgemeinen Strafrechts."
        />
      </Head>

      {/* Die Hauptfarbe der Palette wird für den Header verwendet */}
      <Header />

      {/* PageHeader mit Textfarbe der Hauptfarbe */}
      <PageHeader title="Allgemeines Strafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Wir verteidigen Sie umfassend in allen Bereichen der sogenannten
            'Alltagskriminalität', von Verkehrsdelikten über Diebstahl bis hin
            zu Körperverletzungsdelikten.
          </p>
          <p>
            Unter dem Begriff **Allgemeines Strafrecht** wird gemeinhin die
            „Alltagskriminalität“ verstanden. So werden etwa Verkehrsdelikte,
            Körperverletzungen und Diebstahl unter das allgemeine Strafrecht
            gefasst.
          </p>

          <p>
            Neben den Fragen, welcher Straftatbestand einschlägig sein kann,
            betrifft das allgemeine Strafrecht auch Fragen zu Vorsatz oder
            Fahrlässigkeit, Täterschaft oder Teilnahme, Beihilfe, Notwehr oder
            Notstand. Eine vertiefte Kenntnis dieser Bestimmungen und der hierzu
            ergangenen Rechtsprechung ist grundsätzliche Voraussetzung für eine
            erfolgreiche Verteidigung.
          </p>

          <h3 className="mt-8 text-xl font-bold text-korff-primary">
            Folgende Vergehen und Verbrechen werden vornehmlich unter den
            Begriff des allgemeinen Strafrechts gefasst:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Diebstahl, Ladendiebstahl, Einbruchsdiebstahl, Bandendiebstahl (§§
              242, 243, 244 ff. StGB)
            </li>
            <li>Betrug, gewerbsmäßiger Betrug ( § 263 StGB)</li>
            <li>Hehlerei (§ 259 StGB)</li>
            <li>Unterschlagung (§ 246 StGB)</li>
            <li>Untreue (§ 266 StGB)</li>
            <li>Erpressung, räuberische Erpressung (§§ 253, 255 StGB)</li>
            <li>
              Körperverletzung, gefährliche Körperverletzung, schwere
              Körperverletzung (§§ 223, 224, 226 StGB)
            </li>
            <li>
              Korruption, Bestechung, Bestechlichkeit, Bestechung im
              geschäftlichen Verkehr (§§ 299, 332, 334 StGB)
            </li>
            <li>Nötigung (§ 240 StGB)</li>
            <li>Raub, räuberischer Diebstahl (§§ 249, 252 StGB)</li>
            <li>Sachbeschädigung (§§ 303 ff. StGB)</li>
            <li>
              Unerlaubtes Entfernen vom Unfallort – Unfallflucht (§ 142 StGB)
            </li>
            <li>Brandstiftung, schwere Brandstiftung (§ 306, 306a StGB)</li>
            <li>
              Beleidigung, üble Nachrede, Verleumdung (§§ 185, 186, 187 StGB)
            </li>
            <li>
              Urkundenfälschung, Fälschung technischer Aufzeichnungen (§§ 267,
              268 StGB)
            </li>
            <li>Meineid, uneidliche Falschaussage (§§ 154, 153 StGB)</li>
            <li>
              Kapitalstrafsachen wie Totschlag und Mord (§§ 211, 212 StGB)
            </li>
          </ul>

          <p className="mt-8 font-semibold">
            Die Kenntnis der jeweiligen Mengen nach dem BtMG ist ein
            unerlässlicher Bestandteil einer erfolgreichen Verteidigung. Nehmen
            Sie daher frühzeitig{" "}
            <Link
              href="/kontakt"
              className="text-korff-primary hover:text-korff-secondary transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns auf, um von Anfang an auf das Ermittlungsverfahren Einfluss
            nehmen zu können.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      {/* ContactSection mit Hintergrundfarbe und Buttonfarbe aus der Palette */}
      <ContactSection />
      <Footer />
    </>
  );
};

export default AllgemeinesStrafrechtPage;
