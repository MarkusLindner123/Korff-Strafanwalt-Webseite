import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Für statisches Exportieren (GitHub Pages)
  basePath: isProd ? "/Korff-Strafanwalt-Webseite" : "",
  assetPrefix: isProd ? "/Korff-Strafanwalt-Webseite/" : "",
  images: {
    unoptimized: true, // Keine Image-Optimierung (GitHub Pages hat keinen Server)
  },
  publicRuntimeConfig: {
    basePath: isProd ? "/Korff-Strafanwalt-Webseite" : "",
  },
};

export default nextConfig;
