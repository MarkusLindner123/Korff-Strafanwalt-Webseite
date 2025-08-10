import React from "react";
import Head from "next/head";

// Globale Layout-Komponente
import Layout from "../../components/Layout/Layout";

// Die spezifische Layout-Komponente für Unterseiten
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

// Die Komponente für die Untersuchungshaft-Seite
const UntersuchungshaftPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Untersuchungshaft in Berlin | Kanzlei Korff</title>
        <meta
          name="description"
          content="Eine Untersuchungshaft ist eine schwerwiegende Maßnahme. Erfahren Sie, welche Voraussetzungen erfüllt sein müssen und wie Rechtsanwalt Korff Sie vertritt."
        />
      </Head>

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Ablauf und Voraussetzungen der Untersuchungshaft
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Die Untersuchungshaft ist eine der schwerwiegendsten Maßnahmen im
            Strafverfahren. Sie dient dazu, das Ermittlungsverfahren oder das
            spätere Hauptverfahren zu sichern. Rechtsanwalt Daniel Korff in
            Berlin steht Ihnen im Fall einer Verhaftung sofort zur Seite.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Wann wird Untersuchungshaft angeordnet?
          </h2>
          <p className="mb-4">
            Eine Untersuchungshaft kann nur dann angeordnet werden, wenn zwei
            wichtige Voraussetzungen erfüllt sind:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Dringender Tatverdacht:</span> Es
              müssen konkrete Tatsachen vorliegen, die den dringenden Verdacht
              begründen, dass Sie eine Straftat begangen haben.
            </li>
            <li>
              <span className="font-bold">Ein Haftgrund:</span> Zusätzlich muss
              ein sogenannter Haftgrund vorliegen. Dies kann unter anderem
              <span className="italic"> Fluchtgefahr, Verdunkelungsgefahr</span>
              (die Gefahr, dass Sie Beweise vernichten) oder
              <span className="italic"> Wiederholungsgefahr</span> (die Gefahr,
              dass Sie erneut eine Straftat begehen) sein.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Das Verfahren vor dem Haftrichter
          </h2>
          <p className="mb-4">
            Nach Ihrer Verhaftung muss ein Richter spätestens bis zum Ende des
            folgenden Tages (24:00 Uhr) entscheiden, ob die beiden genannten
            Voraussetzungen vorliegen und die Untersuchungshaft angeordnet wird.
            Hier ist schnelles Handeln entscheidend.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Die entscheidende Rolle des Strafverteidigers
          </h2>
          <p className="mb-4">
            In der Phase der Untersuchungshaft ist die sofortige Beauftragung
            eines Strafverteidigers von größter Bedeutung. Er wird die
            Haftgründe umgehend überprüfen und gegebenenfalls Rechtsmittel wie
            eine <span className="font-bold">Haftprüfung</span> oder eine
            <span className="font-bold"> Haftbeschwerde</span> einlegen, um die
            Haft so schnell wie möglich zu beenden.
          </p>

          <p className="mt-8 text-gray-600">
            Wenn Sie oder eine Ihnen nahestehende Person verhaftet wurden,
            zögern Sie nicht, sofort Kontakt mit Rechtsanwalt Daniel Korff
            aufzunehmen, um Ihre Rechte zu sichern.
          </p>
        </div>
      </InformationenSubPageLayout>
    </Layout>
  );
};

export default UntersuchungshaftPage;
