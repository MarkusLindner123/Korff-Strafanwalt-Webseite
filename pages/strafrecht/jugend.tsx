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

const JugendstrafrechtPage = () => {
  return (
    <>
      <Head>
        <title>Jugendstrafrecht | Kanzlei Korff</title>
        <meta
          name="description"
          content="Spezialisierte Verteidigung im Jugendstrafrecht. Wir beraten Jugendliche und Heranwachsende bei allen juristischen Fragen."
        />
      </Head>

      <Header />

      <PageHeader title="Jugendstrafrecht" />

      <StrafrechtSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            Das Jugendstrafrecht unterscheidet sich in wesentlichen Punkten vom
            allgemeinen Strafrecht. Die Rechtsfolgen einer Tat sind im
            Jugendgerichtsgesetz (JGG) geregelt und fokussieren sich primär auf
            den Erziehungsgedanken.
          </p>
          <p>
            Das Jugendstrafrecht gilt für Jugendliche im Alter von 14 bis zum
            18. Geburtstag. Unter bestimmten Voraussetzungen kann es aber auch
            bei sogenannten <strong>Heranwachsenden</strong> im Alter zwischen
            18 und 21 Jahren angewendet werden. Ob dies der Fall ist, hängt
            unter anderem vom Reifegrad der Person und der Art der vorgeworfenen
            Tat ab. Bei Reifeverzögerungen kommt das Jugendstrafrecht zur
            Anwendung. Dies liegt vor, wenn der Heranwachsende zum Tatzeitpunkt
            seiner sittlichen und geistigen Entwicklung nach einem Jugendlichen
            gleichstand oder eine typische Jugendverfehlung begangen hat.
          </p>
          <p>
            Die Anwendbarkeit des Jugendstrafrechts kann dem Beschuldigten
            aufgrund der vielfältigen Sanktionsmöglichkeiten erhebliche Vorteile
            bringen. Daher ist es sinnvoll, stets zu überprüfen, ob auch bei
            einem über 18 Jahre alten Mandanten die Anwendung des
            Jugendstrafrechts in Betracht kommt.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-800">
            Sanktionen im Jugendstrafrecht
          </h3>
          <p>
            Während das allgemeine Strafrecht die lebenslange Freiheitsstrafe,
            die zeitige Freiheitsstrafe und die Geldstrafe kennt, bietet das
            Jugendstrafrecht vielfältigere Sanktionsmöglichkeiten, die nicht
            primär als Strafe, sondern als Erziehungsmaßnahme verstanden werden:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Erziehungsmaßregeln:</strong> Weisungen, Anordnungen oder
              Erziehungshilfen, wie gemeinnützige Arbeit oder die Teilnahme an
              sozialen Kursen.
            </li>
            <li>
              <strong>Zuchtmittel:</strong> Verwarnung, die Erteilung von
              Auflagen (z.B. Sozialstunden) und der Jugendarrest. Der
              Jugendarrest unterscheidet sich in Freizeitarrest, Kurzarrest und
              Dauerarrest.
            </li>
            <li>
              <strong>Jugendstrafe:</strong> Die Jugendstrafe stellt die
              schärfste Sanktion dar. Sie wird verhängt, wenn
              Erziehungsmaßregeln oder Zuchtmittel nicht mehr ausreichen. Die
              Mindeststrafe beträgt sechs Monate, die Höchststrafe fünf Jahre
              bei einem Vergehen und zehn Jahre bei einem Verbrechen.
            </li>
          </ul>

          <p className="mt-8">
            Im Jugendstrafrecht ist es entscheidend, jede Situation mit höchster
            Sorgfalt zu betrachten. Auch hier gilt es, die richtige Strategie zu
            wählen, um Sie aus der unangenehmen Situation zu befreien.
          </p>
          <p className="mt-8 font-semibold">
            Kontaktieren Sie uns daher möglichst frühzeitig. Gerade im
            Jugendstrafrecht kann mit den richtigen Schritten oft eine
            Hauptverhandlung vermieden und das Verfahren zur Einstellung
            gebracht werden. Nehmen Sie{" "}
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

export default JugendstrafrechtPage;
