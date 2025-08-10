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
  const practiceAreas = [
    {
      title: "Allgemeines Strafrecht",
      description: "(Diebstahl, Betrug, Nötigung, Körperverletzung, etc.)",
      href: "/strafrecht/allgemein",
      icon: "⚖️",
    },
    {
      title: "Beamtenstrafrecht / Soldatenstrafrecht",
      description: "",
      href: "/strafrecht/beamten",
      icon: "👮",
    },
    {
      title: "Betäubungsmittelstrafrecht",
      description: "(Drogenbesitz, Drogenhandel, BtMG)",
      href: "/strafrecht/betaeubungsmittel",
      icon: "🌿",
    },
    {
      title: "Jugendstrafrecht",
      description: "",
      href: "/strafrecht/jugend",
      icon: "👦",
    },
    {
      title: "Medizin- / Arztstrafrecht",
      description:
        "(Fahrlässige Tötung, fahrlässige Körperverletzung wg. „Kunstfehler“, Abrechnungsbetrug)",
      href: "/strafrecht/medizin",
      icon: "⚕️",
    },
    {
      title: "Rechtsmittelverteidigung",
      description: "",
      href: "/strafrecht/rechtsmittel",
      icon: "📜",
    },
    {
      title: "Sexualstrafrecht",
      description: "",
      href: "/strafrecht/sexual",
      icon: "🛡️",
    },
    {
      title: "Steuerstrafrecht",
      description: "(Steuerhinterziehung, Steuerverkürzung, Selbstanzeige)",
      href: "/strafrecht/steuer",
      icon: "💰",
    },
    {
      title: "Verkehrsstrafrecht",
      description:
        "(Fahren ohne Fahrerlaubnis, Trunkenheitsfahrt, Unfallflucht)",
      href: "/strafrecht/verkehr",
      icon: "🚗",
    },
    {
      title: "Wirtschaftsstrafrecht",
      description: "(Insolvenzverschleppung, Untreue, Bankrott, Schwarzarbeit)",
      href: "/strafrecht/wirtschaft",
      icon: "💼",
    },
  ];

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
        <div className="max-w-4xl mx-auto text-lg text-[var(--korff-text)] space-y-6">
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
            Ein besonderer Schwerpunkt unserer Kanzlei ist die{" "}
            {/* Markdown-Syntax wurde durch ein <strong>-Tag ersetzt */}
            <strong>Rechtsmittelverteidigung</strong>.
          </p>
          <h2 className="text-2xl font-bold text-[var(--korff-primary)] mt-12 mb-4">
            Wir verteidigen Sie erfolgreich u. a. in folgenden Fällen:
          </h2>
          {/* Das Grid-Layout wurde so angepasst, dass alle Boxen die gleiche Höhe haben */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {practiceAreas.map((area, index) => (
              <Link key={index} href={area.href} className="h-full">
                <div className="h-full bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start h-full">
                    <span className="text-4xl mr-4">{area.icon}</span>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-bold text-[var(--korff-primary)]">
                        {area.title}
                      </h3>
                      {area.description && (
                        <p className="mt-1 text-sm text-[var(--korff-text)]">
                          {area.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Die Kontaktsektion wird nun direkt importiert und angezeigt */}
      <ContactSection />

      <Footer />
    </>
  );
};

export default StrafrechtPage;
