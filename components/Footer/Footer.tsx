// components/Footer/Footer.tsx

import React from "react";
import Link from "next/link";
import { useI18n } from "../../lib/i18n/I18nProvider";

const Footer = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/kontakt">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("common.nav.kontakt")}
            </div>
          </Link>
          <Link href="/#anfahrt">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("common.nav.anfahrt")}
            </div>
          </Link>
          <Link href="/datenschutz">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("common.nav.datenschutz")}
            </div>
          </Link>
          <Link href="/impressum">
            <div className="hover:text-white transition-colors cursor-pointer">
              {t("common.nav.impressum")}
            </div>
          </Link>
        </nav>

        <div className="text-center">
          <p>&copy; {currentYear} | {t("common.footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
