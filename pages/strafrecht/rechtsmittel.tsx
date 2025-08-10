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

const RechtsmittelverteidigungPage = () => {
  return (
    <>
      <Head>
        <title>Rechtsmittelverteidigung | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung in Rechtsmittelverfahren wie Berufung und Revision. Wir vertreten Sie nach einem erstinstanzlichen Urteil."
        />
      </Head>

      <Header />

      <PageHeader title="Rechtsmittelverteidigung" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Wir verteidigen seit Jahren erfolgreich in sogenannten
            Rechtsmittelverfahren, insbesondere in den Bereichen **Berufung**
            und **Revision**.
          </p>
          <p>
            Die **Berufung** stellt eine zweite Tatsacheninstanz dar. Das
            bedeutet, die gesamte Beweisaufnahme wird erneut durchgeführt,
            sofern das Rechtsmittel nicht auf das Strafmaß beschränkt ist. Dies
            bietet die Chance, ein erstinstanzliches Urteil umfassend überprüfen
            zu lassen.
          </p>
          <p>
            Die **Revision** ist oft die "letzte Chance" auf ein anderes,
            besseres Urteil. Hierbei handelt es sich um eine reine
            Rechtsinstanz. Das Revisionsgericht (Oberlandesgericht oder
            Bundesgerichtshof) überprüft das Urteil lediglich auf Rechtsfehler,
            die sowohl formeller als auch materieller Natur sein können.
          </p>
          <p className="mt-8 font-semibold">
            Bei Fragen zum Thema Berufung oder Revision können Sie gerne
            jederzeit{" "}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            mit uns aufnehmen.
          </p>
        </div>
      </StrafrechtSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default RechtsmittelverteidigungPage;
