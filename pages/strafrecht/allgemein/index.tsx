import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import PageHeader from "../../../components/PageHeader/PageHeader";
import ContactSection from "../../../components/ContactSection/ContactSection";
import StrafrechtSubPageLayout from "../../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const AllgemeinesStrafrechtIndexPage = () => {
  return (
    <>
      <Head>
        <title>Allgemeines Strafrecht | Kanzlei Korff</title>
        <meta name="description" content="Überblick über das Allgemeine Strafrecht." />
      </Head>

      <PageHeader title="Allgemeines Strafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
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

          <h3 className="mt-8 text-xl font-bold text-gray-800">
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
            Sollte Ihnen ein strafrechtlicher Vorwurf gemacht werden, sollten
            Sie möglichst frühzeitig mit uns Kontakt aufnehmen. Schon im Vorfeld
            werden Sie über den wahrscheinlichen Verlauf des Verfahrens
            aufgeklärt und wir entwickeln eine für Sie individuelle
            Verteidigungsstrategie.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
    </>
  );
};

export default AllgemeinesStrafrechtIndexPage;
