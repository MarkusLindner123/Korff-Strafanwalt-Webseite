import React from "react";

// Die Impressumsseite verwendet das gleiche Layout wie die Datenschutzerklärung,
// um Header und Footer zu integrieren.
const Impressum = () => {
  return (
    <>
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Impressum</h1>
        <p className="mb-4">Angaben gemäß § 5 TMG.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Dienstanbieter</h2>
        <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <strong>[Name der Kanzlei]</strong>
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          <br />
          Vertreten durch:
          <br />
          [Name des/der vertretungsberechtigten Partners/Partnerin]
          <br />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kontakt</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Telefon: [Telefonnummer]</li>
          <li>Telefax: [Faxnummer, falls vorhanden]</li>
          <li>E-Mail: [E-Mail-Adresse]</li>
          <li>Web: [Ihre Website-URL]</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br />
          [Ihre USt-IdNr.]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Berufsrechtliche Angaben
        </h2>
        <p className="mb-4">
          Die Rechtsanwältinnen und Rechtsanwälte der Kanzlei sind nach dem
          Recht der Bundesrepublik Deutschland zugelassen und Mitglieder der:
          <br />
          [Name der zuständigen Rechtsanwaltskammer, z. B. Rechtsanwaltskammer
          Berlin]
        </p>

        <p className="mb-4">
          Zuständige Aufsichtsbehörde:
          <br />
          [Name der Aufsichtsbehörde, z. B. Präsident des Kammergerichts Berlin]
        </p>

        <p className="mb-4">
          Es gelten die folgenden berufsrechtlichen Regelungen:
          <br />
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Bundesrechtsanwaltsordnung (BRAO)</li>
            <li>Berufsordnung für Rechtsanwälte (BORA)</li>
            <li>Fachanwaltsordnung (FAO)</li>
            <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            <li>
              Berufsregeln der Rechtsanwälte der Europäischen Union
              (CCBE-Berufsregeln)
            </li>
          </ul>
          Die Regelungen können bei der Bundesrechtsanwaltskammer unter{" "}
          <a
            href="https://www.brak.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.brak.de
          </a>{" "}
          eingesehen werden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Außergerichtliche Streitschlichtung
        </h2>
        <p className="mb-4">
          Bei Streitigkeiten zwischen Rechtsanwälten und ihren Mandanten besteht
          auf Antrag die Möglichkeit der außergerichtlichen Streitschlichtung
          bei der regionalen Rechtsanwaltskammer ([Name der zuständigen Kammer])
          oder bei der Schlichtungsstelle der Rechtsanwaltschaft bei der
          Bundesrechtsanwaltskammer (
          <a
            href="https://www.schlichtungsstelle-der-rechtsanwaltschaft.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.schlichtungsstelle-der-rechtsanwaltschaft.de
          </a>
          ).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Berufshaftpflichtversicherung
        </h2>
        <p className="mb-4">
          [Hier ggf. Angaben zur Berufshaftpflichtversicherung machen, falls
          erforderlich und gewünscht. Üblicherweise: Name und Sitz des
          Versicherers, Geltungsbereich]
        </p>

        <p className="text-sm text-gray-500 mt-8">Stand: [aktuelles Datum]</p>
      </div>
    </>
  );
};

export default Impressum;
