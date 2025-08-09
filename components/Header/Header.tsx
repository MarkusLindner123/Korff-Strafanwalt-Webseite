import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  // States for the mobile menu view and dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [strafrechtDropdownOpen, setStrafrechtDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Handler to toggle the main menu. Also closes dropdowns for a clean state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setStrafrechtDropdownOpen(false);
      setInfoDropdownOpen(false);
    }
  };

  // Handlers for the mobile dropdowns
  const toggleStrafrechtDropdown = () => {
    setStrafrechtDropdownOpen(!strafrechtDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md z-50 font-['Inter']">
      {/* Container for desktop and mobile navigation */}
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold text-korff-primary cursor-pointer">
            Kanzlei
          </div>
        </Link>

        {/* Mobile-only elements: Phone icon and Hamburger button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Phone Link */}
          <a
            href="tel:+493085479867"
            className="flex items-center text-korff-secondary hover:text-korff-primary transition-colors"
          >
            <img
              src="/images/phone-icon.svg"
              alt="Telefon-Icon"
              className="h-5 w-5 mr-2"
            />
          </a>
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-korff-primary text-2xl focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-2">
              {/* NOTE: I replaced bg-korff-primary with bg-gray-800 to make the icon visible. */}
              {/* Please replace this with your custom color from tailwind.config.ts once defined. */}
              <span className="block h-0.5 w-8 bg-gray-800"></span>
              <span className="block h-0.5 w-8 bg-gray-800"></span>
              <span className="block h-0.5 w-8 bg-gray-800"></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation (hidden on mobile) */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/kanzlei">
            <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer">
              Kanzlei
            </div>
          </Link>

          {/* Strafrecht Dropdown for Desktop */}
          <div className="relative group z-50">
            <Link href="/strafrecht">
              <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer flex items-center">
                Strafrecht
                <span className="ml-2">&#9660;</span>
              </div>
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-64">
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

          {/* Informationen Dropdown for Desktop */}
          <div className="relative group z-50">
            <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer flex items-center">
              Informationen
              <span className="ml-2">&#9660;</span>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56">
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
              <Link href="/downloads">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Downloads
                </div>
              </Link>
            </div>
          </div>

          <Link href="/kontakt">
            <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer">
              Kontakt/Notruf
            </div>
          </Link>
        </div>

        {/* Desktop phone number box */}
        <div className="hidden md:block">
          <div className="p-2 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <img
                src="/images/phone-icon.svg"
                alt="Telefon-Icon"
                className="h-5 w-5 mr-1"
              />
              <p className="text-gray-800 text-sm font-semibold">Termine:</p>
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

      {/* Mobile Menu (collapsible) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md absolute w-full z-40 top-16`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/kanzlei" onClick={toggleMenu}>
            <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer text-lg border-b pb-2">
              Kanzlei
            </div>
          </Link>

          {/* Mobile Dropdown for 'Strafrecht' */}
          <div className="relative">
            <div className="flex justify-between items-center border-b pb-2">
              <Link href="/strafrecht" onClick={toggleMenu}>
                <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer text-lg">
                  Strafrecht
                </div>
              </Link>
              <span
                onClick={toggleStrafrechtDropdown}
                className={`transform transition-transform duration-200 cursor-pointer ${
                  strafrechtDropdownOpen ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </div>
            {strafrechtDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-50">
                <Link href="/strafrecht/allgemein" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Allgemeines Strafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/betaeubungsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Betäubungsmittelstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/wirtschaft" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Wirtschaftsstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/verkehr" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Verkehrsstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/sexual" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Sexualstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/jugend" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Jugendstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/steuer" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Steuerstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/medizin" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Medizin- / Arztstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/beamten" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Beamtenstrafrecht / Soldatenstrafrecht
                  </div>
                </Link>
                <Link href="/strafrecht/rechtsmittel" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Rechtsmittelverteidigung
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown for 'Informationen' */}
          <div className="relative">
            <div className="flex justify-between items-center border-b pb-2">
              <Link href="/strafrecht/informationen" onClick={toggleMenu}>
                <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer text-lg">
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
            {infoDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4 py-2 bg-gray-50">
                <Link href="/strafrecht/vorladung" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Vorladung
                  </div>
                </Link>
                <Link
                  href="/strafrecht/ermittlungsverfahren"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Ermittlungsverfahren
                  </div>
                </Link>
                <Link href="/strafrecht/hausdurchsuchung" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Hausdurchsuchung
                  </div>
                </Link>
                <Link href="/strafrecht/untersuchungshaft" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Untersuchungshaft
                  </div>
                </Link>
                <Link
                  href="/strafrecht/u-haft-jva-stadelheim"
                  onClick={toggleMenu}
                >
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    U-Haft in der JVA Stadelheim
                  </div>
                </Link>
                <Link href="/strafrecht/strafbefehl" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Strafbefehl
                  </div>
                </Link>
                <Link href="/strafrecht/geldstrafe" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Geldstrafe
                  </div>
                </Link>
                <Link href="/downloads" onClick={toggleMenu}>
                  <div className="text-sm text-gray-700 hover:text-korff-primary">
                    Downloads
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/kontakt" onClick={toggleMenu}>
            <div className="text-gray-600 hover:text-korff-primary transition-colors cursor-pointer text-lg border-b pb-2">
              Kontakt/Notruf
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
