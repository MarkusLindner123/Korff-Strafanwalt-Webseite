import React from "react";
import Head from "next/head";

// Globale Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Die spezifische Layout-Komponente für Unterseiten
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const HausdurchsuchungPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verhalten bei einer Hausdurchsuchung | Kanzlei Korff</title>
        <meta
          name="description"
          content="Eine Hausdurchsuchung ist eine Ausnahmesituation. Erfahren Sie, wie Sie sich richtig verhalten und Ihre Rechte wahren. Rechtsanwalt Korff hilft."
        />
      </Head>

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Was Sie bei einer Hausdurchsuchung beachten müssen
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Eine Hausdurchsuchung ist eine belastende Situation. Es ist
            entscheidend, Ruhe zu bewahren und die richtigen Schritte zu
            unternehmen, um Ihre Rechte zu schützen. Rechtsanwalt Daniel Korff
            aus Berlin berät Sie umfassend und steht Ihnen in dieser Situation
            bei.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Die wichtigsten Grundregeln
          </h2>
          <p className="mb-4">
            Das oberste Gebot bei einer Hausdurchsuchung ist es, keine
            voreiligen Aussagen zu machen. Befolgen Sie diese Regeln, um Ihre
            Verteidigung nicht zu gefährden:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Keine Aussage ohne Anwalt:</span> Sie
              sind nicht verpflichtet, Angaben zur Sache zu machen. Informieren
              Sie Ihren Verteidiger so schnell wie möglich.
            </li>
            <li>
              <span className="font-bold">Anwalt kontaktieren:</span> Rufen Sie
              Ihren Anwalt umgehend an. Rechtsanwalt Korff steht Ihnen auch
              außerhalb der normalen Geschäftszeiten zur Verfügung, um Sie zu
              beraten oder sich schnellstmöglich auf den Weg zu Ihnen zu machen.
            </li>
            <li>
              <span className="font-bold">Dulden statt mitwirken:</span> Sie
              müssen die Durchsuchung dulden, aber nicht aktiv mitwirken. Eine
              aktive Beteiligung kann jedoch in manchen Fällen sinnvoll sein, um
              „Zufallsfunde“ zu vermeiden. Besprechen Sie dies am besten
              telefonisch mit Ihrem Anwalt.
            </li>
            <li>
              <span className="font-bold">Mitarbeiter informieren:</span> Falls
              die Durchsuchung in Geschäftsräumen stattfindet, weisen Sie Ihre
              Mitarbeiter an, keine Auskünfte an die Beamten zu geben, solange
              sie nicht offiziell als Zeugen geladen sind.
            </li>
          </ul>

          <p className="mt-8 text-gray-600">
            Im Falle einer Hausdurchsuchung ist eine schnelle und professionelle
            Reaktion essenziell. Zögern Sie nicht, Rechtsanwalt Korff zu
            kontaktieren, damit er Ihnen in dieser Ausnahmesituation zur Seite
            stehen kann.
          </p>
        </div>
      </InformationenSubPageLayout>
    </Layout>
  );
};

export default HausdurchsuchungPage;
