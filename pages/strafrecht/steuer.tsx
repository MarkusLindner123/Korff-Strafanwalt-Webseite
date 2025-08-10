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

const SteuerstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Steuerstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Umfassende Beratung und Verteidigung im Steuerstrafrecht. Wir unterstützen Sie bei Steuerhinterziehung, Selbstanzeige und weiteren steuerstrafrechtlichen Delikten."
        />
      </Head>

      <Header />

      <PageHeader title="Steuerstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Eine erfolgreiche Verteidigung im Steuerstrafrecht setzt vor allem
            fundierte Kenntnisse des Steuerrechts voraus. Die Kanzlei Korff
            bietet Ihnen umfassende Expertise und Unterstützung.
          </p>
          <p>
            Wir beraten Sie von der Vermeidung eines Ermittlungsverfahrens durch
            die Steuerfahndung, beispielsweise durch eine rechtzeitige
            **Selbstanzeige**, bis hin zur Verteidigung in allen Instanzen.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Delikte im Steuerstrafrecht
          </h3>
          <p>Zu den klassischen Steuerstraftaten gehören:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>die **Steuerhinterziehung** (§ 370 AO)</li>
            <li>die **Steuerhehlerei** (§ 374 AO)</li>
            <li>
              Fälle der gewerbsmäßigen **Umsatzsteuerhinterziehung** (z.B.
              Umsatzsteuerkarussell)
            </li>
          </ul>
          <p className="mt-4">
            Darüber hinaus gibt es auch Steuerordnungswidrigkeiten, wie die
            **leichtfertige Steuerverkürzung** (§ 378 AO).
          </p>

          <p className="mt-8 font-semibold">
            Sollten Sie die Abgabe einer Selbstanzeige planen oder sind Sie
            Beschuldigter eines Steuerstrafverfahrens, nehmen Sie einfach{" "}
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

export default SteuerstrafrechtPage;
