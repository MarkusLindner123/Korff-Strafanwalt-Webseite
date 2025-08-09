// components/ServicesSection/ServicesSection.tsx

import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Strafrecht",
    description:
      "Wir verteidigen Sie in allen Bereichen des allgemeinen Strafrechts.",
    link: "/strafrecht",
  },
  {
    title: "Ermittlungsverfahren",
    description: "Frühzeitige Beratung kann entscheidend sein.",
    link: "/strafrecht/ermittlungsverfahren",
  },
  {
    title: "Hausdurchsuchung",
    description:
      "Wir stehen Ihnen im Fall einer Hausdurchsuchung sofort zur Seite.",
    link: "/strafrecht/hausdurchsuchung",
  },
  {
    title: "Notruf",
    description: "24/7 erreichbar bei Festnahme oder Durchsuchung.",
    link: "/kontakt",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Unsere Leistungen
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="text-blue-500 font-bold mt-auto">
                  Mehr erfahren
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
