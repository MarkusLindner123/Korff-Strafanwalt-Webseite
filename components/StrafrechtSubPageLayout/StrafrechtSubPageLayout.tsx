import React from "react";
import Link from "next/link";

interface StrafrechtSubPageLayoutProps {
  children: React.ReactNode;
}

const StrafrechtSubPageLayout: React.FC<StrafrechtSubPageLayoutProps> = ({
  children,
}) => {
  return (
    // Die Haupt-Sektion der Seite, die das Zwei-Spalten-Layout enthält
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/*
          Linke Spalte für das Menü.
          Auf Mobilgeräten wird es als einzelner Block angezeigt, auf Desktops als 1/4-Spalte.
        */}
        <aside className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Rechtsgebiete
            </h3>
            {/* Navigationspunkte für die Unterseiten */}
            <nav className="space-y-2">
              <Link href="/strafrecht/allgemein">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Allgemeines Strafrecht
                </div>
              </Link>
              <Link href="/strafrecht/betaeubungsmittel">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Betäubungsmittelstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/wirtschaft">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Wirtschaftsstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/verkehr">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Verkehrsstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/sexual">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Sexualstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/jugend">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Jugendstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/steuer">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Steuerstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/medizin">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Medizin- / Arztstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/beamten">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Beamtenstrafrecht / Soldatenstrafrecht
                </div>
              </Link>
              <Link href="/strafrecht/rechtsmittel">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Rechtsmittelverteidigung
                </div>
              </Link>
            </nav>
          </div>
        </aside>

        {/*
          Rechte Spalte für den Inhalt der aktuellen Seite.
          Auf Mobilgeräten unter dem Menü, auf Desktops als 3/4-Spalte.
        */}
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default StrafrechtSubPageLayout;
