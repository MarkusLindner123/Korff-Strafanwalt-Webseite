import React from "react";
import Head from "next/head";
import Link from "next/link";

// Globale Komponenten
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactSection from "../../components/ContactSection/ContactSection";
import InformationenSubPageLayout from "../../components/InformationenSubPageLayout/InformationenSubPageLayout";

const InformationenIndexPage = () => {
  return (
    <>
      <Head>
        <title>Informationen | Kanzlei Korff</title>
        <meta
          name="description"
          content="Wichtige rechtliche Informationen und erste Ratschläge für Betroffene in einem Strafverfahren."
        />
      </Head>

      <PageHeader title="Wichtige Informationen" />

      <InformationenSubPageLayout>
        <div className="prose max-w-none text-lg text-gray-700">
          <p className="font-semibold text-gray-900 mb-6">
            In Konfliktsituationen mit den Strafverfolgungsbehörden ist eine
            frühzeitige und fundierte Orientierung entscheidend. Auf den
            folgenden Seiten haben wir wertvolle Ratschläge und Erklärungen
            zusammengestellt, die Ihnen bereits vor der Mandatierung eines
            Strafverteidigers eine erste Hilfestellung bieten.
          </p>
          <p>
            Zu den wichtigsten Grundsätzen gehört es, niemals ohne Aktenkenntnis
            und Rücksprache mit einem Anwalt eine Aussage zu machen. Dieser
            entscheidende Tipp ist der erste Schritt zu einer erfolgreichen
            Verteidigungsstrategie.
          </p>
          <p>
            Unsere Ratgeberseiten beleuchten verschiedene Situationen, denen Sie
            unerwartet gegenüberstehen könnten, und geben Ihnen Hinweise, wie
            Sie sich verhalten sollten:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Was tun bei einer polizeilichen Vorladung?</li>
            <li>Welche Rechte haben Sie bei einer Hausdurchsuchung?</li>
            <li>Verhalten bei einer Festnahme oder in Untersuchungshaft</li>
          </ul>
          <p className="mt-8">
            Die hier bereitgestellten Informationen ersetzen keinesfalls eine
            individuelle Rechtsberatung. Nehmen Sie so schnell wie möglich {""}
            <Link
              href="/kontakt"
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Kontakt
            </Link>{" "}
            zu uns auf, damit wir Ihren Fall umgehend prüfen können.
          </p>
        </div>
      </InformationenSubPageLayout>

      <ContactSection />
    </>
  );
};

export default InformationenIndexPage;
