import React from "react";
import Head from "next/head";


// Globale Komponenten
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

// Die Layout-Komponente für Unterseiten wird nun korrekt importiert
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

// Die Komponente für die Downloads-Seite
const DownloadsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Downloads | Kanzlei Korff</title>
        <meta
          name="description"
          content="Wichtige Formulare und Dokumente zum Download für eine effiziente Bearbeitung Ihres Anliegens."
        />
      </Head>

      <Header />
      <PageHeader title="Wichtige Formulare und Dokumente" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Wichtige Formulare und Dokumente zum Download
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Für eine schnelle und effiziente Bearbeitung Ihres Anliegens finden
            Sie hier die wichtigsten Dokumente und Formulare unserer Kanzlei.
            Sie können diese bequem herunterladen, ausfüllen und uns
            unterschrieben zukommen lassen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Vollmachten</h2>
          <p className="mb-4">
            Die Erteilung einer Vollmacht ist der erste Schritt zur Vertretung
            Ihrer rechtlichen Interessen. Wählen Sie das passende Formular, um
            uns offiziell zu bevollmächtigen.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <a
                href="[PLACEHOLDER_VOLLMACHT_STRAFRECHT_ERTL]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Vollmacht für Strafrechtsmandate (Rechtsanwalt Daniel Korff)
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Weitere nützliche Dokumente
          </h2>
          <p className="mb-4">
            Diese Formulare helfen uns dabei, alle notwendigen Informationen von
            Ihnen zu erhalten und die Kommunikation mit Behörden zu
            vereinfachen.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <a
                href="[PLACEHOLDER_MANDANTENBOGEN]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mandantenbogen zur Erfassung Ihrer Daten
              </a>
            </li>
            <li>
              <a
                href="[PLACEHOLDER_BESUCHSAUFTRAG]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Besuchsauftrag
              </a>
            </li>
            <li>
              <a
                href="[PLACEHOLDER_SCHWEIGEPFLICHTENTBINDUNG]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Entbindung von der Schweigepflicht
              </a>
            </li>
          </ul>

          <p className="mt-8 text-gray-600">
            Bitte beachten Sie, dass die korrekte Ausfüllung dieser Formulare
            für eine reibungslose Vertretung entscheidend ist. Bei Fragen stehen
            wir Ihnen gerne zur Verfügung.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default DownloadsPage;
