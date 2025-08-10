import React from "react";
import Link from "next/link";

interface InformationenSubPageLayoutProps {
  children: React.ReactNode;
}

const InformationenSubPageLayout: React.FC<InformationenSubPageLayoutProps> = ({
  children,
}) => {
  return (
    // The main section of the page, which contains the two-column layout
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/*
          Left column for the menu.
          On mobile devices, it is displayed as a single block, on desktops as a 1/4 column.
        */}
        <aside className="md:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Informationen
            </h3>
            {/* Navigation points for the subpages with corrected links */}
            <nav className="space-y-2">
              <Link href="/informationen/downloads">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Downloads
                </div>
              </Link>
              <Link href="/informationen/ermittlungsverfahren">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Ermittlungsverfahren
                </div>
              </Link>
              <Link href="/informationen/geldstrafe">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Geldstrafe
                </div>
              </Link>
              <Link href="/informationen/hausdurchsuchung">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Hausdurchsuchung
                </div>
              </Link>
              <Link href="/informationen/strafbefehl">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Strafbefehl
                </div>
              </Link>
              <Link href="/informationen/untersuchungshaft">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Untersuchungshaft
                </div>
              </Link>
              <Link href="/informationen/vorladung">
                <div className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
                  Vorladung
                </div>
              </Link>
            </nav>
          </div>
        </aside>

        {/*
          Right column for the content of the current page.
          On mobile devices below the menu, on desktops as a 3/4 column.
        */}
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default InformationenSubPageLayout;
