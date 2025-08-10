import React from "react";
import Head from "next/head";

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const StrafbefehlPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Strafbefehl | Kanzlei Korff</title>
        <meta name="description" content="Informationen zum Strafbefehl und wie Sie reagieren sollten." />
      </Head>

      <PageHeader title="Strafbefehl: Was jetzt?" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Der Strafbefehl: Ein Verfahren ohne Hauptverhandlung
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ein Strafbefehl ist ein schriftlicher Beschluss des Gerichts, der
            die Rechtsfolgen einer Straftat festsetzt, ohne dass es zu einer
            öffentlichen Hauptverhandlung kommt. Dies geschieht auf Antrag der
            Staatsanwaltschaft.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Ihre wichtigste Option: Der Einspruch
          </h2>
          <p className="mb-4">
            Wenn Sie einen Strafbefehl erhalten, haben Sie die Möglichkeit,
            dagegen Einspruch einzulegen. Dafür gilt eine strenge Frist von
            <span className="font-bold"> zwei Wochen</span> nach der Zustellung.
            Es ist entscheidend, diese Frist nicht zu versäumen, da der
            Strafbefehl sonst rechtskräftig wird.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Die strategische Rolle Ihres Strafverteidigers
          </h2>
          <p className="mb-4">
            Die Entscheidung, ob und wie Sie Einspruch einlegen, sollte gut
            durchdacht sein. Rechtsanwalt Korff berät Sie umfassend, welche
            strategischen Möglichkeiten Sie haben:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Vollständiger Einspruch:</span> Dies
              führt meist zu einer Hauptverhandlung, bei der das gesamte
              Verfahren neu aufgerollt wird.
            </li>
            <li>
              <span className="font-bold">Beschränkung des Einspruchs:</span> Es
              kann sinnvoll sein, den Einspruch nur auf die Rechtsfolgen (z.B.
              die Höhe der Tagessätze der Geldstrafe) zu beschränken.
            </li>
          </ul>

          <p className="mt-4 text-gray-600">
            Durch eine solche strategische Beschränkung können Sie unter
            Umständen die hohen Kosten und den zeitlichen Aufwand einer
            Hauptverhandlung vermeiden, insbesondere wenn das Gericht Ihr
            Einkommen zu hoch geschätzt hat. Rechtsanwalt Korff kann dies für
            Sie überprüfen und die beste Vorgehensweise empfehlen.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
    </>
  );
};

export default StrafbefehlPage;
