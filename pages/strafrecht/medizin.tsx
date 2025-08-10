import React from "react";
import Head from "next/head";
import Link from "next/link";

// Importieren der globalen Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Importieren der spezifischen Layout-Komponente für Strafrecht-Unterseiten
// Diese übernimmt jetzt das Rendering von PageHeader, ContactSection und Footer.
import StrafrechtSubPageLayout from "../../components/StrafrechtSubPageLayout/StrafrechtSubPageLayout";

const MedizinStrafrechtPage = () => {
  return (
    <Layout>
      <Head>
        <title>Medizin-/Arztstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Medizin- und Arztstrafrecht. Wir beraten Sie bei Vorwürfen der fahrlässigen Tötung, Körperverletzung und weiteren Delikten."
        />
      </Head>

      {/* Die StrafrechtSubPageLayout-Komponente umschließt den gesamten Seiteninhalt.
          Sie kümmert sich um das Rendering von PageHeader, der Seitennavigation und der ContactSection.
          Der Titel wird vom Layout-Component selbst ermittelt. */}
      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Das Medizinstrafrecht, auch Arztstrafrecht genannt, befasst sich mit
            den strafrechtlichen Vorwürfen, die sich aus der beruflichen
            Tätigkeit von Ärzten und medizinischem Personal ergeben. Die Kanzlei
            Korff bietet hierbei eine umfassende Verteidigung.
          </p>
          <p>
            Im Kern steht oft der Vorwurf der{" "}
            <strong>fahrlässigen Tötung</strong> oder der
            <strong> fahrlässigen Körperverletzung</strong>. Diese Delikte
            können schnell entstehen, da die Behandlung von Patienten
            zwangsläufig mit Risiken verbunden ist und ein nicht optimales
            Behandlungsergebnis schnell als Kunstfehler oder Behandlungsfehler
            interpretiert werden kann.
          </p>
          <p>
            Die Konsequenzen einer strafrechtlichen Verurteilung im
            Medizinstrafrecht reichen von Geldstrafen bis hin zu
            Freiheitsstrafen. Hinzu kommen berufsrechtliche Sanktionen wie der
            <strong> Entzug der Approbation</strong> oder das{" "}
            <strong>Ruhen der Zulassung</strong>, was die berufliche Existenz
            gefährdet. Aus diesem Grund ist eine engmaschige Zusammenarbeit mit
            einem erfahrenen Anwalt unerlässlich.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Häufige Vorwürfe im Medizinstrafrecht:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Fahrlässige Tötung</strong> (§ 222 StGB) nach
              Behandlungsfehlern
            </li>
            <li>
              <strong>Fahrlässige Körperverletzung</strong> (§ 229 StGB) nach
              Behandlungsfehlern
            </li>
            <li>
              <strong>Abrechnungsbetrug</strong>
            </li>
            <li>
              <strong>Korruptionsdelikte</strong> wie Bestechung und
              Bestechlichkeit im Gesundheitswesen (§§ 299a, 299b StGB)
            </li>
            <li>
              <strong>Dokumentationsdelikte</strong> (z.B. falsche
              Patienten-/Krankenunterlagen)
            </li>
            <li>
              <strong>Verletzung der ärztlichen Schweigepflicht</strong> (§ 203
              StGB)
            </li>
          </ul>

          <p className="mt-8 font-semibold">
            Sollten Sie als Mediziner oder medizinisches Personal mit
            strafrechtlichen Vorwürfen konfrontiert sein, nehmen Sie einfach{" "}
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

export default MedizinStrafrechtPage;
