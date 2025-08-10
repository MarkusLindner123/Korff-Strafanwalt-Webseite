import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // Setzen Sie die Hauptsprache auf Deutsch, um Suchmaschinen zu signalisieren, dass der Inhalt in deutscher Sprache ist.
    <Html lang="de">
      <Head>
        {/*
          Dieser Bereich enthält alle globalen Meta-Tags und Links,
          die für die Suchmaschinenoptimierung (SEO) wichtig sind.
        */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/*
          Eine aussagekräftige Beschreibung ist für die Snippets in den Google-Suchergebnissen entscheidend.
          Fügen Sie hier relevante Keywords und eine kurze Zusammenfassung Ihrer Dienstleistung ein.
          Wichtig: Ersetzen Sie den Platzhalter durch Ihre eigenen Inhalte.
        */}
        <meta
          name="description"
          content="Strafverteidiger in Berlin für alle Bereiche des Strafrechts. Wir bieten kompetente Vertretung bei Ermittlungsverfahren, Hauptverhandlungen und Revisionen. Kontaktieren Sie uns für eine Erstberatung."
        />

        {/*
          Fügen Sie hier die wichtigsten Keywords ein, die Ihre Kanzlei beschreiben.
          (Hinweis: Keywords sind für modernes SEO weniger wichtig, können aber dennoch hilfreich sein.)
          Wichtig: Ersetzen Sie den Platzhalter durch Ihre eigenen Keywords.
        */}
        <meta
          name="keywords"
          content="Strafanwalt Berlin, Strafverteidiger Berlin, Strafrecht Berlin, Kanzlei Berlin, Verkehrsrecht, Betäubungsmittelstrafrecht, Wirtschaftsstrafrecht"
        />

        {/* Autor der Webseite, hier der Name des Anwalts oder der Kanzlei. */}
        <meta name="author" content="[Name des Anwalts / der Kanzlei]" />

        {/* Open Graph Tags für die Vorschau beim Teilen in sozialen Medien wie Facebook oder WhatsApp. */}
        <meta
          property="og:title"
          content="[Name des Anwalts] - Ihr Strafverteidiger in Berlin"
        />
        <meta
          property="og:description"
          content="Strafverteidiger in Berlin für alle Bereiche des Strafrechts. Wir bieten kompetente Vertretung bei Ermittlungsverfahren und Hauptverhandlungen."
        />
        <meta property="og:url" content="https://www.[kanzleiseite].de/" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />

        {/* Canonical-Tag verhindert Probleme mit doppeltem Inhalt, indem es Suchmaschinen die bevorzugte URL mitteilt. */}
        <link rel="canonical" href="https://www.[kanzleiseite].de/" />

        {/* Verlinkung des Favicons aus dem 'public'-Ordner. */}
        <link rel="icon" href="/favicon.ico" />

        {/*
          Globale Schriftarten (hier "Inter") können hier eingebunden werden.
          Sie werden dann auf jeder Seite Ihrer Anwendung geladen.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
