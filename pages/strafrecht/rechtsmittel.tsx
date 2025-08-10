import React from "react";
import Head from "next/head";

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";

// Die neue Layout-Komponente für Unterseiten
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const RechtsmittelPage = () => {
  return (
    <>
      <Head>
        <title>Rechtsmittelverteidigung | Kanzlei Korff</title>
        <meta name="description" content="Berufung, Revision und weitere Rechtsmittel." />
      </Head>

      <PageHeader title="Rechtsmittelverteidigung" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Ein strafgerichtliches Urteil ist nicht in Stein gemeißelt. Im
            Rechtsmittelverfahren, sei es durch <strong>Berufung</strong> oder{" "}
            <strong>Revision</strong>, kann ein fehlerhaftes Urteil überprüft
            und korrigiert werden. Die Kanzlei Korff ist auf die Verteidigung in
            diesen Instanzen spezialisiert.
          </p>
          <p>
            Im Hauptverhandlungstermin vor dem erstinstanzlichen Gericht ist
            nach der Beweisaufnahme das Urteil des Gerichts gefällt worden. Wenn
            Sie oder Ihre Verteidigung dieses Urteil als fehlerhaft empfinden,
            können Sie die Urteilsentscheidung durch die Einlegung eines
            Rechtsmittels überprüfen lassen. Diesen Teil der Strafverteidigung
            nennt man Rechtsmittelverteidigung.
          </p>
          <p>
            Wichtig ist hier, dass die Fristen für die Einlegung von
            Rechtsmitteln sehr kurz sind. Eine sofortige Mandatierung ist daher
            entscheidend.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Die Arten von Rechtsmitteln
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Berufung</strong>: Die Berufung bewirkt, dass der Fall
              noch einmal vollständig vor einer höheren Instanz verhandelt wird.
              Es wird eine neue Beweisaufnahme durchgeführt.
            </li>
            <li>
              <strong>Revision</strong>: Die Revision bewirkt keine neue
              Hauptverhandlung. Hier wird das Urteil ausschließlich auf
              Rechtsfehler &quot;revidiert&quot;.
            </li>
          </ul>

          <p className="mt-8 font-semibold">
            Sollten Sie mit einem Urteil unzufrieden sein, nehmen Sie einfach{" "}
            <a
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </a>{" "}
            mit uns auf, um eine fristgerechte Prüfung zu gewährleisten.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
    </>
  );
};

export default RechtsmittelPage;
