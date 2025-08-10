import React from "react";

// Die Datenschutzerklärung ist eine eigenständige Seite.
// Durch die Verwendung des Layout-Komponenten wird sichergestellt,
// dass Header und Footer automatisch geladen werden.
const Datenschutz = () => {
  return (
    <>
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Datenschutzerklärung
        </h1>

        <p className="mb-4">
          Wir freuen uns über Ihr Interesse an unserer Kanzlei und Ihrem Besuch
          auf unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein
          wichtiges Anliegen. Im Folgenden informieren wir Sie über die Art, den
          Umfang und den Zweck der Erhebung und Verwendung Ihrer Daten bei der
          Nutzung unserer Website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Wer wir sind (Verantwortliche Stelle)
        </h2>
        <p className="mb-4">
          Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung
          (DSGVO) ist:
        </p>
        <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <strong>[Name der Kanzlei]</strong>
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          [Telefonnummer]
          <br />
          [E-Mail-Adresse]
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Server-Log-Dateien
        </h2>
        <p className="mb-4">
          Aus technischen Gründen, insbesondere zur Gewährleistung einer
          sicheren und stabilen Website, werden Daten, die Ihr Internet-Browser
          an uns übermittelt, automatisch in so genannten Server-Log-Dateien
          erfasst. Dazu gehören:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p className="mb-4">
          Diese Daten werden nicht dazu verwendet, Rückschlüsse auf Ihre Person
          zu ziehen. Sie dienen lediglich der technischen Überwachung,
          Fehlerbehebung und zur Abwehr von Missbrauchsfällen. Die Erhebung
          dieser Daten erfolgt auf Grundlage unseres berechtigten Interesses
          gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden spätestens nach
          sieben Tagen gelöscht, sofern keine weitere Speicherung zur
          Beweissicherung erforderlich ist.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Kontakt per E-Mail oder Kontaktformular
        </h2>
        <p className="mb-4">
          Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren,
          werden die von Ihnen gemachten Angaben (z. B. Ihr Name, Ihre
          E-Mail-Adresse und der Inhalt Ihrer Nachricht) zum Zwecke der
          Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten werden wir
          nicht ohne Ihre Einwilligung an Dritte weitergeben.
        </p>
        <p className="mb-4">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage der Anbahnung eines
          Mandatsverhältnisses dient. In allen anderen Fällen erfolgt die
          Verarbeitung aufgrund unseres berechtigten Interesses an einer
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
          lit. f DSGVO). Die Daten werden gelöscht, sobald Ihre Anfrage
          abschließend bearbeitet wurde und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Ihre Rechte als betroffene Person
        </h2>
        <p className="mb-4">
          Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre
          gespeicherten personenbezogenen Daten zu erhalten. Darüber hinaus
          haben Sie das Recht auf Berichtigung, Löschung und Einschränkung der
          Verarbeitung dieser Daten. Sie können auch der Verarbeitung
          widersprechen und die Datenübertragbarkeit verlangen.
        </p>
        <p className="mb-4">
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das
          Datenschutzrecht verstößt, können Sie sich jederzeit bei der
          zuständigen Aufsichtsbehörde beschweren. Für die Kanzlei in Berlin ist
          dies:
        </p>
        <div className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <strong>
            Berliner Beauftragte für Datenschutz und Informationsfreiheit
          </strong>
          <br />
          [Adresse der Aufsichtsbehörde]
          <br />
          [Telefonnummer und E-Mail-Adresse der Aufsichtsbehörde]
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Speicherdauer Ihrer Daten
        </h2>
        <p className="mb-4">
          Wir speichern Ihre Daten nur so lange, wie es zur Erreichung des
          jeweiligen Verarbeitungszwecks erforderlich ist. Anschließend werden
          die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
          (z. B. im Steuer- oder Handelsrecht) entgegenstehen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Externe Links</h2>
        <p className="mb-4">
          Unsere Website enthält Links zu anderen Websites. Für die Inhalte und
          Datenschutzpraktiken dieser externen Websites sind wir nicht
          verantwortlich. Bitte informieren Sie sich auf den jeweiligen Seiten
          über deren Datenschutzerklärungen.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Änderung dieser Datenschutzerklärung
        </h2>
        <p className="mb-4">
          Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, um sie stets den aktuellen rechtlichen Anforderungen
          anzupassen oder Änderungen an unseren Leistungen umzusetzen. Für Ihren
          erneuten Besuch gilt dann die neue, aktualisierte
          Datenschutzerklärung.
        </p>

        <p className="text-sm text-gray-500 mt-8">Stand: 07.08.2025</p>
      </div>
    </>
  );
};

export default Datenschutz;
