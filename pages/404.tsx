import React from "react";
import Link from "next/link";
import Head from "next/head";

// Importieren Sie Ihre globalen Komponenten
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

/**
 * Dies ist die benutzerdefinierte 404-Seite für den Pages Router von Next.js.
 * Die Stile verwenden die von Ihnen definierten Korff-Klassen aus der Tailwind-Konfiguration
 * und die globale Schriftart aus der globals.css.
 */
const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Seite nicht gefunden</title>
      </Head>
      {/* Der gesamte Container verwendet die globalen Hintergrund- und Textfarben */}
      <div className="flex flex-col min-h-screen bg-korff-background text-korff-text font-sans">
        {/* Ihr Header-Component */}
        <Header />

        <main className="flex-grow flex items-center justify-center p-4 sm:p-6">
          <div className="text-center p-8 sm:p-12 bg-white rounded-3xl shadow-2xl max-w-lg w-full transition-all duration-300 ease-in-out transform hover:scale-105">
            {/* Der 404-Titel verwendet die spezifische Primärfarbe */}
            <h1 className="text-9xl font-extrabold text-korff-primary drop-shadow-xl animate-pulse">
              404
            </h1>

            {/* Die Überschrift und der Text verwenden die globalen Textfarben */}
            <h2 className="text-3xl sm:text-4xl font-bold mt-4">
              Seite nicht gefunden
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Ups, die gesuchte Seite existiert leider nicht. Bitte überprüfen
              Sie die Adresse oder kehren Sie zur Startseite zurück.
            </p>

            {/* Der Link-Button verwendet die Sekundärfarbe */}
            <Link
              href="/"
              className="mt-8 inline-block px-10 py-4 text-lg font-bold text-white bg-korff-secondary rounded-full shadow-lg hover:brightness-125 transition-all duration-300 transform hover:scale-105"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </main>

        {/* Ihr Footer-Component */}
        <Footer />
      </div>
    </>
  );
};

export default Custom404;
