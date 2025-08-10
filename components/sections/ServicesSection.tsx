import React from "react";
import Link from "next/link";
import { useI18n } from "../../lib/i18n/I18nProvider";

const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    {
      title: t("home.services.items.strafrecht_title"),
      description: t("home.services.items.strafrecht_desc"),
      icon: "🔨",
      href: "/strafrecht",
    },
    {
      title: t("home.services.items.informationen_title"),
      description: t("home.services.items.informationen_desc"),
      icon: "📄",
      href: "/informationen",
    },
    {
      title: t("home.services.items.kontakt_title"),
      description: t("home.services.items.kontakt_desc"),
      icon: "🚨",
      href: "/kontakt",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-snug tracking-tight text-[var(--korff-primary)] mb-4">
          {t("home.services.title")}
        </h2>
        <p className="text-lg md:text-xl text-center text-[var(--korff-text)] max-w-2xl mx-auto mb-16">
          {t("home.services.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--korff-secondary)] text-4xl text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--korff-primary)] mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--korff-text)] mb-8 flex-grow">{service.description}</p>
              <Link href={service.href} passHref>
                <button className="btn-primary-rounded-sm">{t("home.services.learnMore")}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
