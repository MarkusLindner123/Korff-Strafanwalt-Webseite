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

const WirtschaftsstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Wirtschaftsstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Wirtschaftsstrafrecht. Wir beraten Sie bei Untreue, Insolvenzstraftaten, Kreditbetrug und weiteren Delikten."
        />
      </Head>

      <Header />

      <PageHeader title="Wirtschaftsstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Die Grenzen zwischen erlaubtem und strafrechtlich relevantem
            unternehmerischen Handeln sind oft fließend. Unsere Kanzlei
            unterstützt Freiberufler, Selbstständige und Führungskräfte bei der
            Verteidigung gegen wirtschaftsstrafrechtliche Vorwürfe.
          </p>
          <p>
            Findiger Geschäftssinn und Betrug, wirtschaftlicher Verlust und
            Insolvenzstraftaten, risikofreudiges unternehmerisches Handeln und
            Untreue liegen dicht beieinander. Heute müssen Freiberufler,
            Selbstständige oder Führungskräfte eines Unternehmens neben der
            betriebswirtschaftlichen Geschäftstätigkeit auch zwangsläufig
            Sachverhalte in strafrechtlicher Hinsicht beleuchten. Kleinste
            Ungenauigkeiten können bereits ein Ermittlungsverfahren der
            Staatsanwaltschaft auslösen.
          </p>
          <p>
            Neben der Bestrafung der Verantwortlichen und möglichen
            berufsrechtlichen Sanktionen drohen auch dem Unternehmen erhebliche
            Schäden durch öffentlichkeitswirksame Ermittlungen und den damit
            einhergehenden Reputations- und Vertrauensverlust bei Kunden und
            Geschäftspartnern.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Kanzlei Korff berät und verteidigt Sie in allen Bereichen des
            Wirtschaftsstrafrechts, insbesondere bei Vorwürfen:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>der Untreue (§ 266 StGB)</li>
            <li>
              des Vorenthaltens von Arbeitnehmerbeiträgen zur Sozialversicherung
              (§ 266a StGB)
            </li>
            <li>
              der Insolvenzverschleppung (§ 15a InsO) und des Bankrotts (§ 283
              StGB)
            </li>
            <li>der unrichtigen Darstellung (§§ 331 ff. HGB)</li>
            <li>des Kreditbetrugs (§ 265 b StGB)</li>
            <li>der Bestechung und Bestechlichkeit (§ 299 StGB)</li>
            <li>
              der Vorteilsannahme und Vorteilsgewährung (§§ 331, 333 StGB)
            </li>
            <li>der wettbewerbsbeschränkenden Absprachen (§ 298 StGB)</li>
            <li>des Insiderhandels (§ 38 WpHG)</li>
          </ul>

          <p className="mt-8">
            Das Verteidigungsziel im Wirtschaftsstrafrecht ist grundsätzlich
            eine geräuschlose Erledigung im Ermittlungsverfahren und die
            Vermeidung einer Hauptverhandlung. Dabei wird eine an den
            individuellen Interessen des Mandanten ausgerichtete,
            maßgeschneiderte Lösung erarbeitet.
          </p>

          <p className="mt-8 font-semibold">
            Bei Fragen zum Thema Wirtschaftsstrafrecht nehmen Sie einfach{" "}
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

export default WirtschaftsstrafrechtPage;
