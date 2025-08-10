"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import getConfig from "next/config";

// Holt den basePath aus der Next.js-Konfiguration, um Bilder korrekt zu laden.
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || "";

// Eine Hilfskomponente für das Hamburger-Icon mit Animation
const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="p-2 relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none"
    aria-label="Toggle mobile menu"
  >
    <span
      className={`block h-0.5 w-6 transform bg-korff-primary transition-all duration-300 ease-out ${
        isOpen ? "translate-y-2 rotate-45" : ""
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 bg-korff-primary transition-all duration-300 ease-out ${
        isOpen ? "opacity-0" : ""
      }`}
    ></span>
    <span
      className={`block h-0.5 w-6 transform bg-korff-primary transition-all duration-300 ease-out ${
        isOpen ? "-translate-y-2 -rotate-45" : ""
      }`}
    ></span>
  </button>
);

const Header = () => {
  // Zustände für die mobile Menüansicht und Dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [strafrechtDropdownOpen, setStrafrechtDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Schaltet das Hauptmenü um und schließt Dropdowns für einen sauberen Zustand.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Dropdowns bei Menüschließung zurücksetzen
    if (isMenuOpen) {
      setStrafrechtDropdownOpen(false);
      setInfoDropdownOpen(false);
    }
  };

  // Handler für die mobilen Dropdowns
  const toggleStrafrechtDropdown = () => {
    setStrafrechtDropdownOpen(!strafrechtDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md z-50 font-['Inter']">
      {/* Container für Desktop- und mobile Navigation */}
      <nav className="container mx-auto flex items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={`${basePath}/images/logo-korff1.png`}
            alt="Kanzlei Korff Logo"
            width={150} // Basisbreite für Desktop
            height={40} // Basishöhe für Desktop
            className="h-10 w-auto md:h-12 cursor-pointer"
            priority
          />
        </Link>

        {/* Nur mobile Elemente: Telefon-Icon und Hamburger-Button */}
        <div className="flex items-center space-x-4 md:hidden ml-auto">
          {/* Telefon-Link */}
          <a
            href="tel:+493085479867"
            className="flex items-center text-korff-secondary hover:text-korff-primary transition-colors"
          >
            <Image
              src={`${basePath}/images/phone-icon.svg`}
              alt="Telefon-Icon"
              width={20}
              height={20}
              className="h-5 w-5 mr-2"
            />
          </a>
          {/* Hamburger-Menü-Button */}
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Desktop-Navigation (auf Mobilgeräten ausgeblendet) */}
        <div className="hidden md:flex md:items-center md:space-x-6 ml-10">
          <Link href="/kanzlei">
            <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer">
              Kanzlei
            </div>
          </Link>

          {/* Strafrecht-Dropdown für Desktop */}
          <div className="relative group z-50">
            <Link href="/strafrecht">
              <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer flex items-center">
                Strafrecht
                <span className="ml-2">&#9660;</span>
              </div>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-64">
              <Link href="/strafrecht/allgemein">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Allgemeines Strafrecht
                  <p className="text-xs text-korff-text-light">
                    (Diebstahl, Betrug, etc.)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/beamten">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Beamtenstrafrecht / Soldatenstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/betaeubungsmittel">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Betäubungsmittelstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Drogenbesitz, BtMG)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/jugend">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Jugendstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/medizin">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Medizin- / Arztstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Fahrlässige Tötung, etc.)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/rechtsmittel">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Rechtsmittelverteidigung
                </div>
              </Link>
              <Link href="/strafrecht/sexual">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Sexualstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Missbrauch, Vergewaltigung)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/steuer">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Steuerstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Steuerhinterziehung, Selbstanzeige)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/verkehr">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Verkehrsstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Fahren ohne Fahrerlaubnis)
                  </p>
                </div>
              </Link>
              <Link href="/strafrecht/wirtschaft">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Wirtschaftsstrafrecht
                  <p className="text-xs text-korff-text-light">
                    (Insolvenzverschleppung, Untreue)
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Informationen-Dropdown für Desktop */}
          <div className="relative group z-50">
            <Link href="/informationen">
              <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer flex items-center">
                Informationen
                <span className="ml-2">&#9660;</span>
              </div>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56">
              <Link href="/informationen/downloads">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Downloads
                </div>
              </Link>
              <Link href="/informationen/ermittlungsverfahren">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Ermittlungsverfahren
                </div>
              </Link>
              <Link href="/informationen/geldstrafe">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Geldstrafe
                </div>
              </Link>
              <Link href="/informationen/hausdurchsuchung">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Hausdurchsuchung
                </div>
              </Link>
              <Link href="/informationen/strafbefehl">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Strafbefehl
                </div>
              </Link>
              <Link href="/informationen/untersuchungshaft">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Untersuchungshaft
                </div>
              </Link>
              <Link href="/informationen/vorladung">
                <div className="block px-4 py-2 text-sm text-korff-text hover:bg-korff-background cursor-pointer">
                  Vorladung
                </div>
              </Link>
            </div>
          </div>

          <Link href="/kontakt">
            <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer">
              Kontakt/Notruf
            </div>
          </Link>
        </div>

        {/* Desktop-Telefonnummer */}
        <div className="hidden md:block ml-auto">
          <div className="p-2 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <Image
                src={`${basePath}/images/phone-icon.svg`}
                alt="Telefon-Icon"
                width={20}
                height={20}
                className="h-5 w-5 mr-1"
              />
              <p className="text-korff-text text-sm font-semibold">Termine:</p>
              <a
                href="tel:+493085479867"
                className="text-korff-secondary font-bold text-lg hover:underline"
              >
                030 - 85479867
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile-Menü (einklappbar) */}
      <div
        className={`md:hidden absolute w-full z-40 top-16 bg-white shadow-md transition-all duration-300 ease-out overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/kanzlei" onClick={toggleMenu}>
            <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer text-lg border-b pb-2">
              Kanzlei
            </div>
          </Link>

          {/* Mobiles Strafrecht */}
          <div>
            <div
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
              onClick={toggleStrafrechtDropdown}
            >
              <Link href="/strafrecht" onClick={toggleMenu}>
                <div className="text-korff-text hover:text-korff-primary transition-colors text-lg">
                  Strafrecht
                </div>
              </Link>
              <span
                className={`transform transition-transform duration-200 cursor-pointer ${
                  strafrechtDropdownOpen ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {/* Animiertes Submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                strafrechtDropdownOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-100 rounded-b-lg">
                <Link href="/strafrecht/allgemein" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Allgemeines Strafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/beamten" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Beamtenstrafrecht / Soldatenstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/betaeubungsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Betäubungsmittelstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/jugend" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Jugendstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/medizin" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Medizin- / Arztstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/rechtsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Rechtsmittelverteidigung
                  </div>
                </Link>
                <Link href="/strafrecht/sexual" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Sexualstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/steuer" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Steuerstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/verkehr" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Verkehrsstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/wirtschaft" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Wirtschaftsstrafrecht
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Informationen */}
          <div>
            <div
              className="flex justify-between items-center border-b pb-2 cursor-pointer"
              onClick={toggleInfoDropdown}
            >
              <Link href="/informationen" onClick={toggleMenu}>
                <div className="text-korff-text hover:text-korff-primary transition-colors text-lg">
                  Informationen
                </div>
              </Link>
              <span
                onClick={toggleInfoDropdown}
                className={`transform transition-transform duration-200 cursor-pointer ${
                  infoDropdownOpen ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {/* Animiertes Submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                infoDropdownOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-100 rounded-b-lg">
                <Link href="/informationen/downloads" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Downloads
                  </div>
                </Link>
                <Link
                  href="/informationen/ermittlungsverfahren"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Ermittlungsverfahren
                  </div>
                </Link>
                <Link href="/informationen/geldstrafe" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Geldstrafe
                  </div>
                </Link>
                <Link
                  href="/informationen/hausdurchsuchung"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Hausdurchsuchung
                  </div>
                </Link>
                <Link href="/informationen/strafbefehl" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Strafbefehl
                  </div>
                </Link>
                <Link
                  href="/informationen/untersuchungshaft"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Untersuchungshaft
                  </div>
                </Link>
                <Link href="/informationen/vorladung" onClick={toggleMenu}>
                  <div className="text-sm text-korff-text hover:text-korff-primary">
                    Vorladung
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/kontakt" onClick={toggleMenu}>
            <div className="text-korff-text hover:text-korff-primary transition-colors cursor-pointer border-b pb-2">
              Kontakt/Notruf
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
