import React from "react";
import Link from "next/link";
import Head from "next/head";

// Wichtige Anmerkung:
// Die Importpfade wurden korrigiert, um direkt auf die .tsx-Dateien zu verweisen.
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

// Annahme: Es existiert eine wiederverwendbare Kontaktsektion-Komponente
// an diesem Pfad. Bitte passen Sie den Pfad an, falls er in Ihrem Projekt anders ist.
import ContactSection from "../../components/ContactSection/ContactSection";

const StrafrechtPage = () => {
  return (
    <>
      {/* Setzt den Seitentitel für SEO */}
      <Head>
        <title>Strafrecht | Fachanwälte für Strafrecht in Berlin</title>
        <meta
          name="description"
          content="Ihre Experten für Strafrecht in Berlin. Wir verteidigen Sie in allen Bereichen des Strafrechts."
        />
      </Head>

      <Header />

      {/* Page Header mit Titel und Untertitel */}
      <PageHeader title="Fachanwälte für Strafrecht" />

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-lg text-korff-text space-y-6">
          <p>
            Wir schöpfen immer alle Möglichkeiten aus, um eine öffentliche
            Gerichtsverhandlung zu vermeiden und wenn irgend möglich bereits im
            Vorfeld die Anklageerhebung zu vermeiden bzw. die Einstellung des
            Verfahrens zu erreichen. Aber auch, wenn die Eröffnung des
            Hauptverfahrens unumgänglich ist, ist unser Bestreben immer, die
            Belastung für unsere Mandanten so gering wie möglich zu halten.
          </p>
          <p>
            Als erfahrene Fachanwälte für Strafrecht kennen wir nicht nur die
            einschlägigen Normen, sondern wissen auch, wie diese in der Praxis –
            speziell von den Berliner Behörden und Strafrichtern – gehandhabt
            werden. Mit vernünftigen Vorschlägen und Augenmaß erreichen wir oft
            mehr als mit dem Kopf durch die Wand.
          </p>
          <p>
            Wir scheuen aber auch die harte Auseinandersetzung nicht und wann
            immer es nötig ist, kämpfen wir mit allen legalen Mitteln für die
            Rechte unserer Mandanten – wenn es sein muss durch alle Instanzen.
            Ein besonderer Schwerpunkt unserer Kanzlei ist die
            **Rechtsmittelverteidigung**.
          </p>
          <h2 className="text-2xl font-bold text-korff-primary mt-12 mb-4">
            Wir verteidigen Sie erfolgreich u. a. in folgenden Fällen:
          </h2>
          {/* Liste der Fachgebiete */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <li>
              <Link href="/strafrecht/allgemein">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Allgemeines Strafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Diebstahl, Betrug, Nötigung, Körperverletzung, etc.)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/betaeubungsmittel">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Betäubungsmittelstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Drogenbesitz, Drogenhandel, BtMG)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/wirtschaft">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Wirtschaftsstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Insolvenzverschleppung, Untreue, Bankrott, Schwarzarbeit)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/verkehr">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Verkehrsstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Fahren ohne Fahrerlaubnis, Trunkenheitsfahrt, Unfallflucht)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/sexual">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Sexualstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text"></p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/jugend">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Jugendstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text"></p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/steuer">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Steuerstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Steuerhinterziehung, Steuerverkürzung, Selbstanzeige)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/medizin">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Medizin- / Arztstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text">
                    (Fahrlässige Tötung, fahrlässige Körperverletzung wg.
                    „Kunstfehler“, Abrechnungsbetrug)
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/beamten">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Beamtenstrafrecht / Soldatenstrafrecht
                  </h3>
                  <p className="text-sm text-korff-text"></p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/strafrecht/rechtsmittel">
                <div className="hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-korff-primary">
                    Rechtsmittelverteidigung
                  </h3>
                  <p className="text-sm text-korff-text"></p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </main>

      {/* Die Kontaktsektion wird nun direkt importiert und angezeigt */}
      <ContactSection />

      <Footer />
    </>
  );
};

export default StrafrechtPage;
