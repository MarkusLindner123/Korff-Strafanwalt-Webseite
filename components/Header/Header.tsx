// components/Header/Header.tsx

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "../../contexts/I18nContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = () => {
  // States for the mobile menu view
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [strafrechtDropdownOpen, setStrafrechtDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Handlers to toggle the main menu and dropdowns
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleStrafrechtDropdown = () => {
    setStrafrechtDropdownOpen(!strafrechtDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  const { t } = useI18n();
  return (
    <header className="bg-white shadow-md z-20">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold text-gray-800 cursor-pointer">
            {t("header.logo")}
          </div>
        </Link>

        {/*
          Mobiler Telefon-Link und Hamburger-Menü-Button für Mobilgeräte und Tablets.
          Diese Gruppe ist nur sichtbar auf kleinen Bildschirmen (`md:hidden`).
        */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSelector />
          <a
            href="tel:+493085479867"
            className="flex items-center text-red-600 hover:text-red-800 transition-colors"
          >
            {/* Das Telefon-Icon wird hier direkt aus dem public-Ordner geladen */}
            <img
              src="/images/phone-icon.svg"
              alt="Telefon-Icon"
              className="h-5 w-5 mr-2"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            <div className="space-y-2">
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
              <span className="block h-0.5 w-8 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation and phone number box */}
        {/* Diese Gruppe ist nur auf größeren Bildschirmen sichtbar (`md:flex`). */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/kanzlei">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              {t("header.nav.kanzlei")}
            </div>
          </Link>

          {/* Desktop dropdown for 'Strafrecht' (UPDATED) */}
          <div className="relative group z-50">
            <Link href="/strafrecht">
              <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center">
                {t("header.nav.strafrecht")}
                <span className="ml-2">&#9660;</span> {/* Triangle icon */}
              </div>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-64 z-50">
              <Link href="/strafrecht/allgemein">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.allgemein.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.allgemein.desc")}
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/betaeubungsmittel">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.betaeubungsmittel.title")}
                  <p className="text-xs text-gray-400">{t("header.strafrechtDropdown.betaeubungsmittel.desc")}</p>
                </div>
              </Link>
              <Link href="/strafrecht/wirtschaft">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.wirtschaft.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.wirtschaft.desc")}
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/verkehr">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.verkehr.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.verkehr.desc")}
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/sexual">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.sexual.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.sexual.desc")}
                  </p>
                </div>
              </Link>
                              <Link href="/strafrecht/jugend">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.strafrechtDropdown.jugend.title")}
                  </div>
                </Link>
              <Link href="/strafrecht/steuer">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.steuer.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.steuer.desc")}
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/medizin">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.strafrechtDropdown.medizin.title")}
                  <p className="text-xs text-gray-400">
                    {t("header.strafrechtDropdown.medizin.desc")}
                  </p>
                </div>
              </Link>
                              <Link href="/strafrecht/beamten">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.strafrechtDropdown.beamten.title")}
                  </div>
                </Link>
                              <Link href="/strafrecht/rechtsmittel">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.strafrechtDropdown.rechtsmittel.title")}
                  </div>
                </Link>
            </div>
          </div>

          {/* Desktop dropdown for 'Informationen' (NEW) */}
          <div className="relative group z-50">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center">
              {t("header.nav.informationen")}
              <span className="ml-2">&#9660;</span> {/* Triangle icon */}
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56 z-50">
              {/* Old Strafrecht sub-items */}
                              <Link href="/strafrecht/vorladung">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.vorladung")}
                  </div>
                </Link>
                              <Link href="/strafrecht/ermittlungsverfahren">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.ermittlungsverfahren")}
                  </div>
                </Link>
                              <Link href="/strafrecht/hausdurchsuchung">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.hausdurchsuchung")}
                  </div>
                </Link>
                              <Link href="/strafrecht/untersuchungshaft">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.untersuchungshaft")}
                  </div>
                </Link>
                              <Link href="/strafrecht/u-haft-jva-stadelheim">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.u_haft_jva_stadelheim")}
                  </div>
                </Link>
                              <Link href="/strafrecht/strafbefehl">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.strafbefehl")}
                  </div>
                </Link>
                              <Link href="/strafrecht/geldstrafe">
                  <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    {t("header.informationenDropdown.geldstrafe")}
                  </div>
                </Link>
              {/* Downloads link */}
              <Link href="/downloads">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  {t("header.informationenDropdown.downloads")}
                </div>
              </Link>
            </div>
          </div>

          <Link href="/kontakt">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              {t("header.nav.kontakt_notruf")}
            </div>
          </Link>
        </div>

        {/* Box for appointments and phone number (Desktop) */}
        {/* Diese Box ist nur auf größeren Bildschirmen sichtbar (`md:block`). */}
        <div className="hidden md:block">
          <div className="p-2 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              {/* Das Telefon-Icon wurde hier hinzugefügt */}
              <img
                src="/images/phone-icon.svg"
                alt="Telefon-Icon"
                className="h-5 w-5 mr-1"
              />
              <p className="text-gray-800 text-sm font-semibold">{t("header.phoneBox.label")} </p>
              <a
                href="tel:+493085479867"
                className="text-red-600 font-bold text-lg hover:underline"
              >
                030 - 85479867
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Mobile menu (becomes visible when clicking the hamburger icon) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md absolute w-full z-10 top-16`}
      >
        <div className="flex flex-col space-y-4 p-4">
                      <Link href="/kanzlei" onClick={toggleMenu}>
              <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-lg border-b pb-2">
                {t("header.nav.kanzlei")}
              </div>
            </Link>

          {/* Mobile dropdown for 'Strafrecht' (UPDATED) */}
          <div className="relative">
            <Link href="/strafrecht" onClick={toggleMenu}>
              <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-lg flex justify-between items-center border-b pb-2">
                <span>{t("header.nav.strafrecht")}</span>
                <span
                  className={`transform transition-transform duration-200 ${
                    strafrechtDropdownOpen ? "rotate-180" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Verhindert, dass der Link klickt
                    toggleStrafrechtDropdown();
                  }}
                >
                  &#9660;
                </span>
              </div>
            </Link>
            {strafrechtDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-50">
                <Link href="/strafrecht/allgemein" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.allgemein.title") }
                  </div>
                </Link>
                <Link href="/strafrecht/betaeubungsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.betaeubungsmittel.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/wirtschaft" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.wirtschaft.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/verkehr" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.verkehr.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/sexual" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.sexual.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/jugend" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.jugend.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/steuer" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.steuer.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/medizin" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.medizin.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/beamten" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.beamten.title")}
                  </div>
                </Link>
                <Link href="/strafrecht/rechtsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    {t("header.strafrechtDropdown.rechtsmittel.title")}
                  </div>
                </Link>
              </div>
            )}
          </div>
          {/* Mobile dropdown for 'Informationen' (NEW) */}
          <div className="relative">
            <div
              onClick={toggleInfoDropdown}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-lg border-b pb-2 flex justify-between items-center"
            >
              <span>{t("header.nav.informationen")}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  infoDropdownOpen ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {infoDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-50">
                <Link href="/strafrecht/vorladung" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Vorladung
                  </div>
                </Link>
                <Link
                  href="/strafrecht/ermittlungsverfahren"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Ermittlungsverfahren
                  </div>
                </Link>
                <Link href="/strafrecht/hausdurchsuchung" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Hausdurchsuchung
                  </div>
                </Link>
                <Link href="/strafrecht/untersuchungshaft" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Untersuchungshaft
                  </div>
                </Link>
                <Link
                  href="/strafrecht/u-haft-jva-stadelheim"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    U-Haft in der JVA Stadelheim
                  </div>
                </Link>
                <Link href="/strafrecht/strafbefehl" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Strafbefehl
                  </div>
                </Link>
                <Link href="/strafrecht/geldstrafe" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Geldstrafe
                  </div>
                </Link>
                <Link href="/downloads" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Downloads
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link href="/kontakt" onClick={toggleMenu}>
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-lg border-b pb-2">
              {t("header.nav.kontakt_notruf")}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
