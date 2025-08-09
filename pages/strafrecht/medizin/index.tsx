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

const ArztstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Medizin- und Arztstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Arzt- und Medizinstrafrecht. Wir beraten und vertreten Ärzte, Pflegepersonal und Klinikpersonal bei strafrechtlichen Vorwürfen."
        />
      </Head>

      <Header />

      <PageHeader title="Medizin- und Arztstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Der Schwerpunkt unserer Tätigkeit liegt in der
            Individualverteidigung von Ärzten, Pflegepersonal, Hebammen und
            Geschäftsführern von Krankenhäusern oder Pflegeeinrichtungen. Wir
            bieten spezialisierte Unterstützung bei allen strafrechtlichen
            Vorwürfen in diesem sensiblen Bereich.
          </p>
          <p>
            Im Medizinstrafrecht gibt es oft einen schmalen Grat zwischen einem
            medizinischen Fehler und einer strafrechtlich relevanten Handlung.
            Eine umfassende Kenntnis des Medizin- und Strafrechts ist
            unerlässlich, um Mandanten bestmöglich zu vertreten. Insbesondere
            der Unterschied zwischen fahrlässigem und vorsätzlichem Handeln kann
            über den Entzug der Approbation entscheiden.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Klassische Delikte bei Behandlungsfehlern ("Kunstfehlern"):
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Fahrlässige Tötung (§ 222 StGB)</li>
            <li>Fahrlässige Körperverletzung (§ 229 StGB)</li>
            <li>Schwangerschaftsabbruch (§§ 218-219b StGB)</li>
            <li>
              Ärztliche Sterbehilfe, Tötung auf Verlangen (§§ 216, 217 StGB)
            </li>
            <li>Unterlassene Hilfeleistung (§ 323c StGB)</li>
            <li>Strafbarkeit klinischer Arzneimittelprüfung (nach dem AMG)</li>
          </ul>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Sonstige Delikte im Zusammenhang mit der ärztlichen Tätigkeit:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Abrechnungsbetrug (§ 263 StGB)</li>
            <li>Untreue (§ 266 StGB)</li>
            <li>
              Vorteilsannahme und Bestechlichkeit (§§ 331, 332, 299 Abs. 1 StGB)
            </li>
            <li>Strafbare Werbung und gewerbliche Betätigung</li>
            <li>
              Verletzung der Schweigepflicht (§§ 203 Abs. 1 Nr. 1, Abs. 2, 204
              StGB)
            </li>
            <li>Ausstellen unrichtiger Gesundheitszeugnisse (§ 278 StGB)</li>
            <li>Urkundenfälschung an Krankenakten (§ 267 StGB)</li>
          </ul>

          <p className="mt-8">
            Die Verteidigung eines Mandanten in diesen Fällen erfordert
            Erfahrung und Spezialwissen. Die Kanzlei Korff berät Sie in allen
            Fragen des Medizin- und Arztstrafrechts.
          </p>
          <p className="mt-8 font-semibold">
            Nehmen Sie frühzeitig{" "}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns auf, damit bereits im Ermittlungsverfahren entscheidend
            Einfluss auf den Verfahrensverlauf genommen werden kann.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default ArztstrafrechtPage;
