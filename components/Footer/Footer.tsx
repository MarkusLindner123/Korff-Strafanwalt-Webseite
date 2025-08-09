// components/Footer/Footer.tsx

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sektion 1: Kanzlei */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Kanzlei Korff</h4>
            <address className="not-italic">
              <p>Kluckstraße 36</p>
              <p>10785 Berlin</p>
            </address>
            <p className="mt-4">
              <a
                href="tel:+493085479867"
                className="hover:text-white transition-colors"
              >
                +49 30 85479867
              </a>
            </p>
            <p>
              <a
                href="mailto:info@korff-kanzlei.de"
                className="hover:text-white transition-colors"
              >
                info@korff-kanzlei.de
              </a>
            </p>
          </div>

          {/* Sektion 2: Navigation */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Navigation</h4>
            <ul>
              <li className="mb-2">
                <Link href="/kanzlei">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Kanzlei
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/strafrecht">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Strafrecht
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/downloads">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Downloads
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/kontakt">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Kontakt/Notruf
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sektion 3: Rechtliches */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Rechtliches</h4>
            <ul>
              <li className="mb-2">
                <Link href="/impressum">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Impressum
                  </div>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/datenschutz">
                  <div className="hover:text-white transition-colors cursor-pointer">
                    Datenschutz
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sektion 4: Urheberrecht */}
          <div className="md:col-span-4 mt-8 text-center border-t border-gray-700 pt-8">
            <p>&copy; {currentYear} Kanzlei Korff. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
