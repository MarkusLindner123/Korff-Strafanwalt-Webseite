// components/Footer/Footer.tsx

import React from "react";
import Link from "next/link";
import { useI18n } from "../../contexts/I18nContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Horizontales Menü */}
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/kontakt">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("footer.links.kontakt")}
            </div>
          </Link>
          <Link href="/#anfahrt">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("footer.links.anfahrt")}
            </div>
          </Link>
          <Link href="/datenschutz">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("footer.links.datenschutz")}
            </div>
          </Link>
          <Link href="/impressum">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("footer.links.impressum")}
            </div>
          </Link>
        </nav>

        {/* Urheberrecht */}
        <div className="text-center">
          <p>&copy; {currentYear} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
