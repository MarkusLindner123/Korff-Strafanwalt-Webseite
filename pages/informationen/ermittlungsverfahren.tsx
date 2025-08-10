import React from "react";
import Head from "next/head";

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const ErmittlungsverfahrenPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ermittlungsverfahren | Kanzlei Korff</title>
        <meta
          name="description"
          content="Was tun beim Ermittlungsverfahren? Wichtige Hinweise und erste Schritte."
        />
      </Head>

      <PageHeader title="Ermittlungsverfahren: Erste Schritte" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-gray-800">
          <p className="font-semibold text-gray-900 mb-6">
            Wenn Sie Kenntnis davon erhalten, dass gegen Sie ein
            Ermittlungsverfahren geführt wird, ist schnelles und überlegtes
            Handeln erforderlich. Der Ausgang des Verfahrens wird maßgeblich
            durch Ihr Verhalten in der Frühphase beeinflusst.
          </p>
          <p>
            Im Kern gilt die goldene Regel:{" "}
            <strong>Machen Sie keine Aussage.</strong> Und zwar weder als
            Beschuldigter, noch als Zeuge. Gerade die ersten Aussagen sind in
            der Regel die Schlechtesten, denn es sind Laien-, sogenannte
            &quot;Spontan-Aussagen&quot;.
          </p>
          <p>
            Stattdessen sollten Sie umgehend einen Anwalt kontaktieren. Ein
            Strafverteidiger kann Akteneinsicht beantragen und nur mit der
            Kenntnis der Aktenlage kann eine sinnvolle Verteidigungsstrategie
            erarbeitet werden. Ohne Aktenkenntnis ist jede Aussage, so gut sie
            auch gemeint sein mag, ein Spiel mit dem Feuer.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Wichtige Grundsätze
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Keine Aussage machen:</strong> Weder bei der Polizei, noch
              bei der Staatsanwaltschaft.
            </li>
            <li>
              <strong>Rechtsbeistand hinzuziehen:</strong> Kontaktieren Sie
              umgehend einen Rechtsanwalt für Strafrecht.
            </li>
            <li>
              <strong>Aussageverweigerungsrecht:</strong> Machen Sie von Ihrem
              Recht auf Aussageverweigerung Gebrauch.
            </li>
          </ul>

          <p className="mt-8">
            Ein Ermittlungsverfahren endet in der Regel mit einer Einstellung
            (z.B. gemäß § 170 Abs. 2 StPO oder § 153a StPO) oder mit einer
            Anklage vor Gericht. Eine frühzeitige Mandatierung kann oftmals
            schon die Einstellung des Verfahrens im Vorfeld bewirken.
          </p>

          <p className="mt-8 font-semibold">
            Nehmen Sie am besten unverzüglich{" "}
            <a
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </a>{" "}
            mit uns auf, um Ihre Rechte zu wahren.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
    </>
  );
};

export default ErmittlungsverfahrenPage;
