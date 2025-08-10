// pages/_app.tsx

import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// Importiere die CookieBanner-Komponente
import CookieBanner from "../components/CookieBanner/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// WICHTIG: Hier definieren wir unsere Ladekomponente.
// Sie verwendet Tailwind CSS, um einen Spinner zu erstellen,
// der als Overlay über der gesamten Seite liegt.
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-teal-500"></div>
    </div>
  );
};

// Den Typ für die AppProps-Destrukturierung festlegen
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Der useEffect-Hook ist essenziell für die Ladelogik.
  useEffect(() => {
    // Funktion, die den Lader aktiviert, wenn eine Navigation beginnt.
    const handleStart = () => {
      setIsLoading(true);
    };

    // Funktion, die den Lader deaktiviert, wenn die Navigation abgeschlossen ist.
    const handleComplete = () => {
      // Eine kleine Verzögerung (z. B. 300 ms) hilft, ein schnelles "Flackern" zu verhindern,
      // wenn die Ladezeit sehr kurz ist.
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    // Wir lauschen auf die Events des Next.js-Routers.
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete); // Auch bei Fehlern den Lader ausblenden

    // Aufräumfunktion: Die Event-Listener müssen entfernt werden,
    // um Speicherlecks zu vermeiden.
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]); // Der Effekt läuft nur einmalig beim ersten Laden der Komponente.

  return (
    <main className={`${inter.variable} font-sans`}>
      {/* Bedingte Anzeige des Lade-Overlays */}
      {isLoading && <Loader />}
      {/* Hier wird die aktuelle Seite gerendert */}
      <Component {...pageProps} />
      {/* Füge das Cookie-Banner hier ein */}
      <CookieBanner />
    </main>
  );
}

export default MyApp;
