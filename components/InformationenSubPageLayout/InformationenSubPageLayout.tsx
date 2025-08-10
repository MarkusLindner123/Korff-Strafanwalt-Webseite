import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Komponenten, die in diesem Layout immer wiederverwendet werden
import PageHeader from "../PageHeader/PageHeader";
import ContactSection from "../ContactSection/ContactSection";

interface InformationenSubPageLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    href: "/informationen/downloads",
    title: "Downloads",
    description: null,
  },
  {
    href: "/informationen/ermittlungsverfahren",
    title: "Ermittlungsverfahren",
    description: null,
  },
  {
    href: "/informationen/geldstrafe",
    title: "Geldstrafe",
    description: null,
  },
  {
    href: "/informationen/hausdurchsuchung",
    title: "Hausdurchsuchung",
    description: null,
  },
  {
    href: "/informationen/strafbefehl",
    title: "Strafbefehl",
    description: null,
  },
  {
    href: "/informationen/untersuchungshaft",
    title: "Untersuchungshaft",
    description: null,
  },
  {
    href: "/informationen/vorladung",
    title: "Vorladung",
    description: null,
  },
];

const InformationenSubPageLayout: React.FC<InformationenSubPageLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  // Dynamischer Titel für den PageHeader
  const pageTitle =
    navItems.find((item) => item.href === router.pathname)?.title ||
    "Informationen";

  return (
    <>
      {/* PageHeader wird hier gerendert */}
      <PageHeader title={pageTitle} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Informationen
              </h3>
              {/* Dünner, ästhetischer Trennstrich */}
              <div className="w-16 border-b-2 border-korff-primary mb-6"></div>

              {/* Navigation für die Unterseiten */}
              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = router.pathname === item.href;
                  return (
                    <Link href={item.href} key={index}>
                      <div
                        className={`
                          flex items-center px-4 py-2 rounded-md transition-colors cursor-pointer group
                          ${
                            isActive
                              ? "bg-korff-background"
                              : "hover:bg-korff-background"
                          }
                        `}
                      >
                        {/* Kleine, schicke vertikale Linie */}
                        <span
                          className={`
                            w-1 h-5 mr-3 rounded-full transition-all duration-200
                            ${isActive ? "bg-korff-primary" : "bg-gray-300"}
                          `}
                        ></span>
                        <div>
                          <span className="block text-sm font-semibold text-korff-text group-hover:text-korff-primary">
                            {item.title}
                          </span>
                          {item.description && (
                            <p className="text-xs text-korff-text-light group-hover:text-korff-text">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Der Inhalt der aktuellen Unterseite */}
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>

      {/* Die ContactSection wird ebenfalls hier gerendert */}
      <ContactSection />
    </>
  );
};

export default InformationenSubPageLayout;
