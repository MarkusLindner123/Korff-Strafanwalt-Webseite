import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["de", "en", "pl", "tr", "ar", "fr"],
    defaultLocale: "de",
    localeDetection: false,
  },
};

export default nextConfig;
