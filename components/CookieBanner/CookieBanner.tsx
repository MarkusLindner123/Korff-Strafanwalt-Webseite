import React, { useState, useEffect } from "react";

// Die CookieBanner-Komponente, die beim ersten Besuch der Website angezeigt wird.
const CookieBanner: React.FC = () => {
  // Zustand zur Steuerung der Sichtbarkeit des Banners.
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Überprüfen, ob der Benutzer bereits eine Cookie-Entscheidung getroffen hat.
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []); // Das leere Array stellt sicher, dass dies nur einmal beim Laden der Komponente ausgeführt wird.

  // Funktion zum Akzeptieren aller Cookies.
  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  // Funktion zum Ablehnen aller Cookies.
  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  // Wenn das Banner nicht sichtbar sein soll, gib null zurück.
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-2xl md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 md:mr-6">
          <p className="text-sm font-semibold text-korff-text">
            Wir verwenden Cookies auf unserer Website, um Ihnen das beste
            Nutzererlebnis zu bieten.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Durch Klicken auf „Alle akzeptieren“ stimmen Sie der Verwendung
            ALLER Cookies zu. Sie können jedoch die „Cookie-Einstellungen“
            besuchen, um eine kontrollierte Zustimmung zu erteilen.
          </p>
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={acceptCookies}
            className="rounded-md bg-korff-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-korff-secondary focus:ring-offset-2"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={declineCookies}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-korff-text shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-korff-text focus:ring-offset-2"
          >
            Alle ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
