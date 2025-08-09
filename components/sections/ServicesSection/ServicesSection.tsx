// components/ServicesSection/ServicesSection.tsx

import React from "react";
import Link from "next/link";
import { useI18n } from "../../../contexts/I18nContext";

const services = [
  {
    key: "strafrecht",
    link: "/strafrecht",
  },
  {
    key: "ermittlungsverfahren",
    link: "/strafrecht/ermittlungsverfahren",
  },
  {
    key: "hausdurchsuchung",
    link: "/strafrecht/hausdurchsuchung",
  },
  {
    key: "notruf",
    link: "/kontakt",
  },
] as const;

const ServicesSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          {t("services.heading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {t(`services.items.${service.key}.desc`)}
                </p>
                <div className="text-blue-500 font-bold mt-auto">
                  {t("services.more")}
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
