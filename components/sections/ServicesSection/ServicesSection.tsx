import React from "react";
import Link from "next/link";

// TypeScript-Schnittstelle, um die Struktur eines Service-Objekts zu definieren
interface Service {
  title: string;
  description: string;
  link: string;
}

// Array von Dienstleistungen, ohne Icons
const services: Service[] = [
  {
    title: "Strafrecht",
    description:
      "Umfassende Verteidigung in allen Bereichen des allgemeinen Strafrechts.",
    link: "/strafrecht",
  },
  {
    title: "Verkehrsstrafrecht",
    description:
      "Spezialisierte Vertretung bei Verkehrsdelikten wie Trunkenheit am Steuer oder Unfallflucht.",
    link: "/strafrecht/verkehrsstrafrecht",
  },
  {
    title: "Drogenstrafrecht",
    description:
      "Wir verteidigen Sie bei Delikten nach dem Betäubungsmittelgesetz (BtMG).",
    link: "/strafrecht/betaeubungsmittelstrafrecht",
  },
  {
    title: "Ermittlungsverfahren",
    description:
      "Wir stehen Ihnen schon während des Ermittlungsverfahrens zur Seite. Frühzeitige Beratung ist entscheidend.",
    link: "/strafrecht/ermittlungsverfahren",
  },
  {
    title: "Hausdurchsuchung",
    description:
      "Rechtlicher Beistand und Soforthilfe im Falle einer Hausdurchsuchung. Bleiben Sie ruhig, wir sind für Sie da.",
    link: "/strafrecht/hausdurchsuchung",
  },
  {
    title: "Notruf 24/7",
    description:
      "Rund um die Uhr erreichbar bei Festnahme oder Hausdurchsuchung. Zögern Sie nicht anzurufen!",
    link: "/kontakt",
  },
];

// Wiederverwendbare Komponente für die Service-Karten
const ServiceCard = ({ service }: { service: Service }) => (
  <Link href={service.link}>
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center border border-gray-200">
      <h3 className="text-xl font-semibold text-korff-text mb-2">
        {service.title}
      </h3>
      <p className="text-korff-text mb-6 flex-grow">{service.description}</p>
      <div className="mt-auto">
        <span className="inline-block px-6 py-2 border-2 border-korff-primary text-korff-primary font-bold rounded-full hover:bg-korff-primary hover:text-white transition-colors duration-300">
          Mehr erfahren
        </span>
      </div>
    </div>
  </Link>
);

const ServicesSection = () => {
  return (
    // Hintergrundfarbe und Schriftart werden aus den Tailwind-Variablen übernommen
    <section className="py-16 md:py-24 bg-korff-background font-sans">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-korff-text mb-4">
          Unsere Kompetenzen
        </h2>
        <p className="text-lg text-korff-text mb-12 max-w-2xl mx-auto">
          Wir stehen Ihnen in den wichtigsten Bereichen des Strafrechts zur
          Seite, um Ihre Rechte zu wahren.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
