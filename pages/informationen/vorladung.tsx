import React from "react";
import Head from "next/head";

// Globale Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Die spezifische Layout-Komponente für Unterseiten
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const VorladungPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Vorladung als Beschuldigter | Kanzlei Korff</title>
        <meta
          name="description"
          content="Sie haben eine Vorladung erhalten? Erfahren Sie, welche Rechte Sie als Beschuldigter haben und wie Rechtsanwalt Korff Sie verteidigt."
        />
      </Head>

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Ihre Rechte bei einer Vorladung als Beschuldigter
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Eine Vorladung als Beschuldigter ist ein klares Signal: Gegen Sie
            wird ein strafrechtliches Ermittlungsverfahren geführt. Die Polizei
            oder die Staatsanwaltschaft möchte Sie zu einem konkreten Vorwurf
            einer Straftat vernehmen. In dieser Situation ist schnelles und
            überlegtes Handeln entscheidend.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Ihre wichtigsten Rechte
          </h2>
          <p className="mb-4">
            Als Beschuldigter haben Sie gesetzlich verbriefte Rechte, die Sie
            unbedingt kennen und nutzen sollten:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Das Recht zu schweigen:</span> Sie
              müssen keine Angaben zur Sache machen. Dieses Schweigerecht gilt
              uneingeschränkt und darf Ihnen nicht negativ ausgelegt werden.
            </li>
            <li>
              <span className="font-bold">Keine Pflicht zum Erscheinen:</span>{" "}
              Einer Vorladung der Polizei müssen Sie nicht folgen. Lediglich
              einer richterlichen Vorladung müssen Sie nachkommen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Empfohlene Vorgehensweise
          </h2>
          <p className="mb-4">
            Nach Erhalt einer Vorladung sollten Sie zwei Schritte
            uneingeschränkt befolgen, um Ihre Verteidigung optimal zu gestalten:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Schweigen Sie:</span> Machen Sie
              gegenüber der Polizei oder Staatsanwaltschaft keinerlei Aussagen –
              weder zum Vorwurf noch zu persönlichen Verhältnissen.
            </li>
            <li>
              <span className="font-bold">Kontaktieren Sie uns sofort:</span>{" "}
              Rufen Sie umgehend einen auf Strafrecht spezialisierten Anwalt an.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Warum ein Anwalt unerlässlich ist
          </h2>
          <p className="mb-4">
            Ihr Strafverteidiger wird umgehend der ermittelnden Behörde
            mitteilen, dass Sie nicht zum Termin erscheinen werden. Der
            wichtigste Schritt ist dann die{" "}
            <span className="font-bold">Einsicht in die Ermittlungsakten.</span>{" "}
            Erst nach sorgfältiger Prüfung der vollständigen Beweislage kann
            eine fundierte Entscheidung getroffen werden, ob eine Äußerung
            sinnvoll ist oder nicht.
          </p>

          <p className="mt-8 text-gray-600">
            Zögern Sie daher nicht, uns im Falle einer Vorladung zu
            kontaktieren, um Ihre Rechte von Anfang an bestmöglich zu schützen.
          </p>
        </div>
      </InformationenSubPageLayout>
    </Layout>
  );
};

export default VorladungPage;
