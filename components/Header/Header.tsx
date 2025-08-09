// components/Header/Header.tsx

import React, { useState } from "react";
import Link from "next/link";

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

  return (
    <header className="bg-white shadow-md z-20">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold text-gray-800 cursor-pointer">
            Kanzlei
          </div>
        </Link>

        {/*
          Mobiler Telefon-Link und Hamburger-Menü-Button für Mobilgeräte und Tablets.
          Diese Gruppe ist nur sichtbar auf kleinen Bildschirmen (`md:hidden`).
        */}
        <div className="flex items-center space-x-4 md:hidden">
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
              Kanzlei
            </div>
          </Link>

          {/* Desktop dropdown for 'Strafrecht' (UPDATED) */}
          <div className="relative group z-50">
            <Link href="/strafrecht">
              <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center">
                Strafrecht
                <span className="ml-2">&#9660;</span> {/* Triangle icon */}
              </div>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-64 z-50">
              <Link href="/strafrecht/allgemein">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Allgemeines Strafrecht
                  <p className="text-xs text-gray-400">
                    (Diebstahl, Betrug, etc.)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/betaeubungsmittel">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Betäubungsmittelstrafrecht
                  <p className="text-xs text-gray-400">(Drogenbesitz, BtMG)</p>
                </div>
              </Link>
              <Link href="/strafrecht/wirtschaft">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Wirtschaftsstrafrecht
                  <p className="text-xs text-gray-400">
                    (Insolvenzverschleppung, Untreue)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/verkehr">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Verkehrsstrafrecht
                  <p className="text-xs text-gray-400">
                    (Fahren ohne Fahrerlaubnis)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/sexual">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Sexualstrafrecht
                  <p className="text-xs text-gray-400">
                    (Missbrauch, Vergewaltigung)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/jugend">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Jugendstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/steuer">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Steuerstrafrecht
                  <p className="text-xs text-gray-400">
                    (Steuerhinterziehung, Selbstanzeige)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/medizin">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Medizin- / Arztstrafrecht
                  <p className="text-xs text-gray-400">
                    (Fahrlässige Tötung, etc.)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/beamten">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Beamtenstrafrecht / Soldatenstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/rechtsmittel">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Rechtsmittelverteidigung
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop dropdown for 'Informationen' (NEW) */}
          <div className="relative group z-50">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer flex items-center">
              Informationen
              <span className="ml-2">&#9660;</span> {/* Triangle icon */}
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56 z-50">
              {/* Old Strafrecht sub-items */}
              <Link href="/strafrecht/vorladung">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Vorladung
                </div>
              </Link>
              <Link href="/strafrecht/ermittlungsverfahren">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Ermittlungsverfahren
                </div>
              </Link>
              <Link href="/strafrecht/hausdurchsuchung">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Hausdurchsuchung
                </div>
              </Link>
              <Link href="/strafrecht/untersuchungshaft">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Untersuchungshaft
                </div>
              </Link>
              <Link href="/strafrecht/u-haft-jva-stadelheim">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  U-Haft in der JVA Stadelheim
                </div>
              </Link>
              <Link href="/strafrecht/strafbefehl">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Strafbefehl
                </div>
              </Link>
              <Link href="/strafrecht/geldstrafe">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Geldstrafe
                </div>
              </Link>
              {/* Downloads link */}
              <Link href="/downloads">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Downloads
                </div>
              </Link>
            </div>
          </div>

          <Link href="/kontakt">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Kontakt/Notruf
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
              <p className="text-gray-800 text-sm font-semibold">Termine:</p>
              <a
                href="tel:+493085479867"
                className="text-red-600 font-bold text-lg hover:underline"
              >
                030 - 85479867
              </a>
            </div>
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
              Kanzlei
            </div>
          </Link>

          {/* Mobile dropdown for 'Strafrecht' (UPDATED) */}
          <div className="relative">
            <Link href="/strafrecht" onClick={toggleMenu}>
              <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-lg flex justify-between items-center border-b pb-2">
                <span>Strafrecht</span>
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
                    Allgemeines Strafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/betaeubungsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Betäubungsmittelstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/wirtschaft" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Wirtschaftsstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/verkehr" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Verkehrsstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/sexual" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Sexualstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/jugend" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Jugendstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/steuer" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Steuerstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/medizin" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Medizin- / Arztstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/beamten" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Beamtenstrafrecht / Soldatenstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/rechtsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-gray-900">
                    Rechtsmittelverteidigung
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
              <span>Informationen</span>
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
              Kontakt/Notruf
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
