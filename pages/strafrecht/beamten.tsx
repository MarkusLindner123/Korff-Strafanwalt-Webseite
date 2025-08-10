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

const BeamtenstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Beamten- und Soldatenstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Strafverteidigung für Beamte und Soldaten in Disziplinar- und Ermittlungsverfahren. Wir sichern Ihre berufliche Zukunft."
        />
      </Head>

      <Header />

      <PageHeader title="Beamten- / Soldatenstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Das **Beamten- und Soldatenstrafrecht** ist ein hochspezialisiertes
            Rechtsgebiet. Wenn Sie als Amtsträger oder Soldat in ein
            strafrechtliches Ermittlungsverfahren oder ein Disziplinarverfahren
            verwickelt sind, stehen nicht nur strafrechtliche Sanktionen im
            Raum, sondern oft auch weitreichende disziplinarische Konsequenzen.
          </p>
          <p>
            Wir verteidigen Sie bei spezifischen Vorwürfen, die häufig im
            öffentlichen Dienst eine Rolle spielen:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              **Delikte im Amt:** Vorteilsnahme, Bestechlichkeit, Bestechung (§§
              331, 332, 334 StGB) und Körperverletzung im Amt (§ 340 StGB).
            </li>
            <li>
              **Allgemeine Delikte:** Untreue (§ 266 StGB) und Betrug (§ 263
              StGB).
            </li>
          </ul>

          <p>
            Wichtig ist, dass auch außerhalb des Dienstes begangene Straftaten
            disziplinarische Maßnahmen nach sich ziehen können. Beispielsweise
            kann eine Trunkenheitsfahrt als "Eignungsmangel" gewertet werden und
            schwerwiegende berufliche Folgen haben.
          </p>
          <p>
            Die Ergebnisse eines Strafverfahrens können gemäß den Paragraphen
            des Bundesdisziplinargesetzes für das sich anschließende
            Disziplinarverfahren übernommen werden. Fehler in der
            Strafverteidigung wiegen daher doppelt schwer, da sie sich direkt
            auf Ihre berufliche Zukunft auswirken. Ein zentraler Aspekt ist
            hierbei **§ 24 des Beamtenstatusgesetzes**, der den Verlust der
            Beamtenrechte bei bestimmten Strafen regelt.
          </p>

          <p className="mt-8 font-semibold">
            Wir stehen Ihnen mit unserer Expertise zur Seite, um die komplexen
            Zusammenhänge zwischen Straf- und Disziplinarrecht zu
            berücksichtigen und Ihre berufliche Laufbahn zu sichern. Nehmen Sie
            daher möglichst frühzeitig{" "}
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

export default BeamtenstrafrechtPage;
