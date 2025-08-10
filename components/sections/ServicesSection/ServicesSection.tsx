import React from "react";
import Link from "next/link";

// Die Services-Datenstruktur wurde angepasst, um die drei Hauptpunkte abzubilden.
const services = [
  {
    title: "Strafrecht",
    description:
      "Wir verteidigen Ihre Rechte in allen Phasen des Strafverfahrens und stehen Ihnen in sämtlichen strafrechtlichen Angelegenheiten zur Seite.",
    icon: "🔨", // Das Symbol für Strafrecht wurde geändert
    href: "/strafrecht",
  },
  {
    title: "Informationen",
    description:
      "Erhalten Sie einen Überblick über den Ablauf eines Strafverfahrens, Ihre Rechte als Beschuldigter oder Opfer und wichtige Fristen.",
    icon: "📄",
    href: "/information", // Der Link wurde angepasst
  },
  {
    title: "Kontakt & Notruf",
    description:
      "Für schnelle Hilfe in Notsituationen oder zur Vereinbarung eines Beratungstermins stehen wir Ihnen jederzeit zur Verfügung.",
    icon: "🚨",
    href: "/kontakt",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug tracking-tight text-[var(--korff-primary)] mb-4">
          Unsere Schwerpunkte
        </h2>
        <p className="text-lg md:text-xl text-center text-[var(--korff-text)] max-w-2xl mx-auto mb-16">
          Wir bieten Ihnen eine spezialisierte juristische Beratung und
          Vertretung.
        </p>

        {/* Das Grid-Layout wurde um 'items-stretch' erweitert, um sicherzustellen, dass die Boxen
          in der gleichen Reihe die gleiche Höhe haben. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              // Jede Box verwendet 'h-full' und ein flexibles Layout,
              // um eine konsistente Höhe zu gewährleisten.
              className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--korff-secondary)] text-4xl text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--korff-primary)] mb-4">
                {service.title}
              </h3>
              {/* Der Beschreibungstext verwendet 'flex-grow', um den Button am unteren Rand zu positionieren,
                  unabhängig von der Textlänge. */}
              <p className="text-[var(--korff-text)] mb-8 flex-grow">
                {service.description}
              </p>

              {/* Jede Box hat jetzt einen eigenen Button */}
              <Link href={service.href} passHref>
                <button className="px-6 py-3 bg-[var(--korff-secondary)] text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:bg-[var(--korff-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--korff-secondary)] focus:ring-opacity-50">
                  Mehr erfahren
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Der Button 'Alle Leistungen ansehen' wurde entfernt. */}
      </div>
    </section>
  );
};

export default ServicesSection;
