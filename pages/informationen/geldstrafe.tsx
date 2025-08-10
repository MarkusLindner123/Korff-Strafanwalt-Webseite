import React from "react";
import Head from "next/head";

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const GeldstrafePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Geldstrafe | Kanzlei Korff</title>
        <meta name="description" content="Informationen zur Geldstrafe und wie Sie reagieren sollten." />
      </Head>

      <PageHeader title="Geldstrafe" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Die Geldstrafe: Eine Sanktion in Tagessätzen
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Eine Geldstrafe ist eine strafrechtliche Sanktion, die durch ein
            Urteil oder einen Strafbefehl verhängt wird. Ihre Besonderheit liegt
            darin, dass sie nicht als fester Betrag, sondern in Tagessätzen
            angeordnet wird. Dieses System stellt sicher, dass die Strafe den
            unterschiedlichen finanziellen Verhältnissen des Verurteilten
            gerecht wird.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Anzahl und Höhe der Tagessätze
          </h2>
          <p className="mb-4">
            Die Geldstrafe besteht aus zwei Komponenten: der
            <span className="font-bold"> Anzahl der Tagessätze</span> und der
            <span className="font-bold"> Höhe eines Tagessatzes.</span>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Anzahl:</span> Das Gericht legt die
              Anzahl der Tagessätze fest, die je nach Schwere der Tat zwischen 5
              und 360 Tagessätzen betragen kann.
            </li>
            <li>
              <span className="font-bold">Höhe:</span> Die Höhe eines
              Tagessatzes orientiert sich an Ihrem monatlichen Nettoeinkommen.
              Sie entspricht üblicherweise
              <span className="font-bold"> 1/30 Ihres Nettoeinkommens.</span>
              Dabei werden auch Unterhaltszahlungen und andere finanzielle
              Belastungen berücksichtigt.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ein Rechenbeispiel</h2>
          <p className="mb-4">
            Der letztlich zu zahlende Betrag ergibt sich aus der Multiplikation
            der Tagessatzanzahl mit der Tagessatzhöhe.
          </p>
          <p className="mt-4">
            Bei einem monatlichen Nettoeinkommen von
            <span className="font-bold"> 2.100 Euro</span> beträgt der Tagessatz
            <span className="font-bold"> 70 Euro</span> (2100 / 30).
          </p>
          <p className="mb-4">
            Bei einem Urteil von beispielsweise
            <span className="font-bold"> 90 Tagessätzen </span>
            ergibt sich eine Geldstrafe von (90 x 70 Euro =)
            <span className="font-bold"> 6.300 Euro.</span>
          </p>
          <p className="mt-4 text-gray-600">
            Hätte der Verurteilte ein höheres Einkommen von
            <span className="font-bold"> 6.000 Euro</span> (Tagessatz:
            <span className="font-bold"> 200 Euro</span>), würde er für die
            gleiche Tat eine Strafe von (90 x 200 Euro =)
            <span className="font-bold"> 18.000 Euro</span> zahlen.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
    </>
  );
};

export default GeldstrafePage;
