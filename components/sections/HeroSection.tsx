import React from "react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";

const HeroSection = () => {
  return (
    <>
      {/* Hero-Sektion mit Hintergrundbild */}
      <div
        className="font-sans relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url('${basePath}/images/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ihre kompetenten Strafverteidiger in Berlin
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            Wir stehen Ihnen in jeder Situation zur Seite.
          </p>
        </div>
      </div>

      {/* Infobalken */}
      <div className="bg-[var(--korff-secondary)] text-white py-8 px-4 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Termine */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src={`${basePath}/images/calender-icon.svg`}
              alt="Kalender-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">Termine vereinbaren</h3>
              <a
                href="tel:+493085479867"
                className="mt-1 text-2xl font-bold hover:underline transition-colors"
              >
                030 - 85479867
              </a>
            </div>
          </div>

          {/* E-Mail */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src={`${basePath}/images/mail-icon.svg`}
              alt="Mail-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">E-Mail senden</h3>
              <a
                href="mailto:info@kanzlei.de"
                className="mt-1 text-lg font-bold hover:underline transition-colors"
              >
                info@kanzlei.de
              </a>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src={`${basePath}/images/clock-icon.svg`}
              alt="Uhr-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-sm font-normal">Unsere Öffnungszeiten</h3>
              <p className="mt-1 text-lg font-bold">MO-FR: 09-17 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
