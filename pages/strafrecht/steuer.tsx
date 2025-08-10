import React from "react";
import Head from "next/head";
import Link from "next/link";

// Importieren der globalen Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Importieren der spezifischen Layout-Komponente für Strafrecht-Unterseiten
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const SteuerstrafrechtPage = () => {
  return (
    <Layout>
      <Head>
        <title>Steuerstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Umfassende Beratung und Verteidigung im Steuerstrafrecht. Wir unterstützen Sie bei Steuerhinterziehung, Selbstanzeige und weiteren steuerstrafrechtlichen Delikten."
        />
      </Head>

      {/* Die StrafrechtSubPageLayout-Komponente umschließt den gesamten Seiteninhalt.
          Sie kümmert sich um das Rendering von PageHeader, der Seitennavigation und der ContactSection.
          Der Titel wird vom Layout-Component selbst ermittelt. */}
      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Eine erfolgreiche Verteidigung im Steuerstrafrecht setzt vor allem
            fundierte Kenntnisse des Steuerrechts voraus. Die Kanzlei Korff
            bietet Ihnen umfassende Expertise und Unterstützung.
          </p>
          <p>
            Wir beraten Sie von der Vermeidung eines Ermittlungsverfahrens durch
            die Steuerfahndung, beispielsweise durch eine rechtzeitige{" "}
            <strong>Selbstanzeige</strong>, bis hin zur Verteidigung in allen
            Instanzen.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Delikte im Steuerstrafrecht
          </h3>
          <p>Zu den klassischen Steuerstraftaten gehören:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              die <strong>Steuerhinterziehung</strong> (§ 370 AO)
            </li>
            <li>
              die <strong>Steuerhehlerei</strong> (§ 374 AO)
            </li>
            <li>
              Fälle der gewerbsmäßigen{" "}
              <strong>Umsatzsteuerhinterziehung</strong> (z.B.
              Umsatzsteuerkarussell)
            </li>
          </ul>
          <p className="mt-4">
            Darüber hinaus gibt es auch Steuerordnungswidrigkeiten, wie die
            <strong> leichtfertige Steuerverkürzung</strong> (§ 378 AO).
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
    </Layout>
  );
};

export default SteuerstrafrechtPage;
