// components/Header/Header.tsx

import React from "react";
import Link from "next/link";
// Importieren der notwendigen Font Awesome Komponenten
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white shadow-md z-20">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold text-gray-800 cursor-pointer">
            Kanzlei
          </div>
        </Link>

        {/* Navigationslinks mit Dropdowns */}
        <div className="flex items-center space-x-6">
          <Link href="/kanzlei">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Kanzlei
            </div>
          </Link>

          {/* Dropdown für 'Strafrecht' */}
          <div className="relative group z-50">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Strafrecht
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56 z-50">
              <Link href="/strafrecht/vorladung">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Vorladung
                </div>
              </Link>
              <Link href="/strafrecht/ermittlungsverfahren">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Ermittlungsverfahren
                </div>
              </Link>
              <Link href="/strafrecht/hausdurchsuchung">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Hausdurchsuchung
                </div>
              </Link>
              <Link href="/strafrecht/untersuchungshaft">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Untersuchungshaft
                </div>
              </Link>
              <Link href="/strafrecht/u-haft-jva-stadelheim">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  U-Haft in der JVA Stadelheim
                </div>
              </Link>
              <Link href="/strafrecht/strafbefehl">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Strafbefehl
                </div>
              </Link>
              <Link href="/strafrecht/geldstrafe">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
                  Geldstrafe
                </div>
              </Link>
            </div>
          </div>

          {/* Dropdown für 'Informationen' */}
          <div className="relative group z-50">
            <div className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Informationen
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 top-full space-y-2 rounded w-56 z-50">
              <Link href="/downloads">
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer font-sans tracking-normal leading-normal">
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

        {/* Die Box für Termine und Telefonnummer */}
        <div className="hidden md:block">
          <div className="p-2 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-red-600 text-lg"
              />
              <div>
                <p className="text-gray-800 text-sm font-semibold">Termine</p>
                <a
                  href="tel:+493085479867"
                  className="text-red-600 font-bold text-lg hover:underline"
                >
                  030 - 85479867
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
