import React from "react";
import { useI18n } from "../../lib/i18n/I18nProvider";

const HeroSection = () => {
  const { t } = useI18n();
  return (
    <>
      <div
        className="font-sans relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            {t("home.hero.subtitle")}
          </p>
        </div>
      </div>

      <div className="bg-[var(--korff-secondary)] text-white py-8 px-4 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img src="/images/calender-icon.svg" alt="Kalender-Icon" className="h-10 w-10 mb-2 md:mb-0" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">{t("home.cta.appointments")}</h3>
              <a href="tel:+493085479867" className="mt-1 text-2xl font-bold hover:underline transition-colors">
                030 - 85479867
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img src="/images/mail-icon.svg" alt="Mail-Icon" className="h-10 w-10 mb-2 md:mb-0" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">{t("home.cta.email")}</h3>
              <a href="mailto:info@kanzlei.de" className="mt-1 text-lg font-bold hover:underline transition-colors">
                info@kanzlei.de
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img src="/images/clock-icon.svg" alt="Uhr-Icon" className="h-10 w-10 mb-2 md:mb-0" />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">{t("home.cta.openingHours")}</h3>
              <p className="mt-1 text-lg font-bold">{t("home.cta.openingHoursValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
