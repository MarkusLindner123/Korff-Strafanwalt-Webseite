import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Komponenten, die in diesem Layout immer wiederverwendet werden
import PageHeader from "../PageHeader/PageHeader";
import ContactSection from "../ContactSection/ContactSection";

interface StrafrechtSubPageLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    href: "/strafrecht/allgemein",
    title: "Allgemeines Strafrecht",
    description: "(Diebstahl, Betrug, etc.)",
  },
  {
    href: "/strafrecht/beamten",
    title: "Beamtenstrafrecht / Soldatenstrafrecht",
    description: null,
  },
  {
    href: "/strafrecht/betaeubungsmittel",
    title: "Betäubungsmittelstrafrecht",
    description: "(Drogenbesitz, BtMG)",
  },
  {
    href: "/strafrecht/jugend",
    title: "Jugendstrafrecht",
    description: null,
  },
  {
    href: "/strafrecht/medizin",
    title: "Medizin- / Arztstrafrecht",
    description: "(Fahrlässige Tötung, etc.)",
  },
  {
    href: "/strafrecht/rechtsmittel",
    title: "Rechtsmittelverteidigung",
    description: null,
  },
  {
    href: "/strafrecht/sexual",
    title: "Sexualstrafrecht",
    description: "(Missbrauch, Vergewaltigung)",
  },
  {
    href: "/strafrecht/steuer",
    title: "Steuerstrafrecht",
    description: "(Steuerhinterziehung, Selbstanzeige)",
  },
  {
    href: "/strafrecht/verkehr",
    title: "Verkehrsstrafrecht",
    description: "(Fahren ohne Fahrerlaubnis)",
  },
  {
    href: "/strafrecht/wirtschaft",
    title: "Wirtschaftsstrafrecht",
    description: "(Insolvenzverschleppung, Untreue)",
  },
];

const StrafrechtSubPageLayout: React.FC<StrafrechtSubPageLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const pageTitle =
    navItems.find((item) => item.href === router.pathname)?.title ||
    "Strafrecht";

  return (
    <>
      {/* PageHeader wird hier gerendert, da es auf allen Unterseiten gleich ist */}
      <PageHeader title={pageTitle} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Rechtsgebiete
              </h3>
              {/* Dünner, ästhetischer Trennstrich */}
              <div className="w-16 border-b-2 border-korff-primary mb-6"></div>

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

          <div className="md:col-span-3">{children}</div>
        </div>
      </div>

      {/* Die ContactSection wird ebenfalls hier gerendert */}
      <ContactSection />
    </>
  );
};

export default StrafrechtSubPageLayout;
