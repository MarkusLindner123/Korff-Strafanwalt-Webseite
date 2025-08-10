import React from "react";
import Head from "next/head";
import Link from "next/link"; // 'Link' wird hier verwendet und bleibt

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";

// Die neue Layout-Komponente für Unterseiten
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const BeamtenstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Beamtenstrafrecht / Soldatenstrafrecht | Kanzlei Korff</title>
        <meta name="description" content="Verteidigung im Beamten- und Soldatenstrafrecht." />
      </Head>

      <PageHeader title="Beamtenstrafrecht / Soldatenstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Das <strong>Beamten- und Soldatenstrafrecht</strong> ist ein
            hochspezialisiertes Rechtsgebiet. Wenn Sie als Amtsträger oder
            Soldat in ein strafrechtliches Ermittlungsverfahren oder ein
            Disziplinarverfahren verwickelt sind, stehen nicht nur
            strafrechtliche Sanktionen im Raum, sondern oft auch weitreichende
            disziplinarische Konsequenzen.
          </p>
          <p>
            Wir verteidigen Sie bei spezifischen Vorwürfen, die häufig im
            öffentlichen Dienst eine Rolle spielen:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Delikte im Amt:</strong> Vorteilsnahme, Bestechlichkeit,
              Bestechung (§§ 331, 332, 334 StGB) und Körperverletzung im Amt (§
              340 StGB).
            </li>
            <li>
              <strong>Allgemeine Delikte:</strong> Untreue (§ 266 StGB) und
              Betrug (§ 263 StGB).
            </li>
          </ul>

          <p>
            Wichtig ist, dass auch außerhalb des Dienstes begangene Straftaten
            disziplinarische Maßnahmen nach sich ziehen können. Beispielsweise
            kann eine Trunkenheitsfahrt als &quot;Eignungsmangel&quot; gewertet
            werden und schwerwiegende berufliche Folgen haben.
          </p>
          <p>
            Die Ergebnisse eines Strafverfahrens können gemäß den Paragraphen
            des Bundesdisziplinargesetzes für das sich anschließende
            Disziplinarverfahren übernommen werden. Fehler in der
            Strafverteidigung wiegen daher doppelt schwer, da sie sich direkt
            auf Ihre berufliche Zukunft auswirken. Ein zentraler Aspekt ist
            hierbei <strong>§ 24 des Beamtenstatusgesetzes</strong>, der den
            Verlust der Beamtenrechte bei bestimmten Strafen regelt.
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
    </>
  );
};

export default BeamtenstrafrechtPage;
