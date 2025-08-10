import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Globale Komponenten
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

// Die Layout-Komponente für Unterseiten wird korrekt importiert
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

// Die Komponente für die Ermittlungsverfahren-Seite
const ErmittlungsverfahrenPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ermittlungsverfahren in Berlin | Kanzlei Korff</title>
        <meta
          name="description"
          content="Ein Ermittlungsverfahren wurde gegen Sie eingeleitet? Erfahren Sie, wie Sie sich in Berlin richtig verhalten und wie Rechtsanwalt Korff Sie vertritt."
        />
      </Head>

      <Header />
      <PageHeader title="Ermittlungsverfahren: So verhalten Sie sich richtig" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <h1 className="text-3xl font-extrabold mb-4">
            Ablauf eines strafrechtlichen Ermittlungsverfahrens
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ein Ermittlungsverfahren kann einschüchternd wirken. Es ist der
            erste Schritt, den die Staatsanwaltschaft unternimmt, wenn der
            Verdacht besteht, dass eine Straftat begangen wurde. Rechtsanwalt
            Daniel Korff aus Berlin steht Ihnen in dieser Phase kompetent zur
            Seite.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Der Beginn des Verfahrens
          </h2>
          <p className="mb-4">
            Das Verfahren wird eingeleitet, sobald die Staatsanwaltschaft
            Kenntnis von einem möglichen Delikt erhält. Dies geschieht in der
            Regel durch eine Strafanzeige bei der Polizei oder
            Staatsanwaltschaft. Es kann aber auch "von Amts wegen" durch eigene
            Wahrnehmung der Behörden in die Wege geleitet werden. Die
            Ermittlungen, wie Vernehmungen und Spurensicherung, werden meist von
            der Polizei im Auftrag der Staatsanwaltschaft durchgeführt.
          </p>

          <p className="font-bold text-red-600">
            Wichtiger Hinweis: Als Beschuldigter sind Sie nicht verpflichtet,
            bei der Polizei zu erscheinen oder eine Aussage zu machen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Mögliche Ausgänge des Verfahrens
          </h2>
          <p className="mb-4">
            Nach Abschluss der Beweiserhebung entscheidet der Staatsanwalt über
            den weiteren Weg. Das Verfahren kann auf verschiedene Weisen enden:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Einstellung des Verfahrens:</span>{" "}
              Dies geschieht oft mangels hinreichenden Tatverdachts oder nach
              dem Opportunitätsprinzip.
            </li>
            <li>
              <span className="font-bold">Öffentliche Klage:</span> Wenn
              ausreichender Tatverdacht besteht, erhebt die Staatsanwaltschaft
              Klage, und es kommt zu einer Hauptverhandlung vor Gericht.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Grundregeln bei einem Ermittlungsverfahren
          </h2>
          <p className="mb-4">
            Um Ihre Verteidigungschancen nicht zu gefährden, sollten Sie die
            folgenden Grundregeln unbedingt beachten:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Machen Sie von Ihrem{" "}
              <span className="font-bold">Schweigerecht</span>
              Gebrauch. Leisten Sie keine Aussage und führen Sie keine Gespräche
              mit den ermittelnden Beamten.
            </li>
            <li>
              <span className="font-bold">
                Verweigern Sie aktive Mitwirkung
              </span>
              , zum Beispiel eine Schrift- oder Stimmprobe.
            </li>
            <li>
              Nehmen Sie{" "}
              <span className="font-bold">niemals ohne einen Anwalt</span> an
              einer Vernehmung teil.
            </li>
            <li>
              Bei einer <span className="font-bold">Festnahme</span>: Verlangen
              Sie sofort, einen Anruf bei Ihrem Anwalt tätigen zu dürfen. Die
              Polizei muss Ihnen hierbei helfen.
            </li>
            <li>
              Denken Sie daran, dass Gespräche (z.B. Telefonate) abgehört und
              Räumlichkeiten durchsucht werden könnten.
            </li>
          </ul>

          <p className="mt-8 text-gray-600">
            Bei Fragen oder im Notfall steht Ihnen Rechtsanwalt Daniel Korff in
            Berlin gerne zur Seite. Zögern Sie nicht, Kontakt mit uns
            aufzunehmen.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
      <Footer />
    </>
  );
};

export default ErmittlungsverfahrenPage;
