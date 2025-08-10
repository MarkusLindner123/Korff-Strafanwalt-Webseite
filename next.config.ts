import type { NextConfig } from "next";

// Wir prüfen, ob wir uns im Produktionsmodus befinden, indem wir die Umgebungsvariable NODE_ENV überprüfen.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Aktiviert den statischen Export-Modus nur für die Produktion.
  output: isProd ? "export" : undefined,

  // Setzt den Basis-Pfad nur für die Produktion.
  basePath: isProd ? "/Korff-Strafanwalt-Webseite" : "",

  // Definiert den Präfix für alle Assets, wieder nur in der Produktion.
  // Es sollte auf den gleichen Pfad wie basePath gesetzt werden.
  assetPrefix: isProd ? "/Korff-Strafanwalt-Webseite/" : "",

  // Deaktiviert die interne Next.js-Bildoptimierung,
  // da sie mit statischen Exports nicht kompatibel ist.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
