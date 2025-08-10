import type { NextConfig } from "next";

// Wir prüfen, ob wir uns im Produktionsmodus (beim `build`) befinden.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Für den Build-Prozess einer statischen Seite ist "export" zwingend notwendig.
  // Das sorgt dafür, dass alle HTML-, CSS- und JS-Dateien im 'out'-Ordner landen.
  output: isProd ? "export" : undefined,

  // Der 'basePath' ist der wichtigste Teil der Lösung.
  // Er teilt Next.js mit, dass deine App in einem Unterverzeichnis gehostet wird.
  // Alle internen Links und Asset-Pfade werden automatisch mit '/Korff-Strafanwalt-Webseite'
  // präfixiert. Das behebt dein Problem mit den verschwindenden Bildern.
  basePath: isProd ? "/Korff-Strafanwalt-Webseite" : "",

  // Der 'assetPrefix' stellt sicher, dass auch Bilder und andere Assets
  // den korrekten Pfad-Präfix erhalten. Wir setzen ihn auf das Gleiche wie 'basePath'.
  assetPrefix: isProd ? "/Korff-Strafanwalt-Webseite/" : "",

  // 'unoptimized: true' muss gesetzt werden, da die Next.js-Bildoptimierung
  // einen Server benötigt, der bei statischen Exports nicht existiert.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
