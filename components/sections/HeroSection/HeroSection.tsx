// components/HeroSection/HeroSection.tsx

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* Hero-Sektion mit Hintergrundbild und Text */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Overlay für bessere Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Inhalt der Hero-Sektion */}
        <div className="relative z-10 text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ihre kompetenten Strafverteidiger in Berlin
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            Wir stehen Ihnen in jeder Situation zur Seite.
          </p>
        </div>
      </div>

      {/* Neuer horizontaler Balken mit drei Einträgen */}
      <div className="bg-korff-secondary text-white py-8 px-4 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Eintrag 1: Termine vereinbaren */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src="/images/calender-icon.svg"
              alt="Kalender-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              {/* Die Überschrift ist jetzt kleiner (text-sm) */}
              <h3 className="text-sm font-normal">Termine vereinbaren</h3>
              {/* Die Telefonnummer ist größer (text-2xl) */}
              <a
                href="tel:+493085479867"
                className="mt-1 text-2xl font-bold hover:underline transition-colors"
              >
                030 - 85479867
              </a>
            </div>
          </div>

          {/* Eintrag 2: E-Mail senden */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src="/images/mail-icon.svg"
              alt="Mail-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              {/* Die Überschrift ist jetzt kleiner (text-sm) */}
              <h3 className="text-sm font-normal">E-Mail senden</h3>
              {/* Die E-Mail-Adresse ist größer (text-lg) */}
              <a
                href="mailto:info@kanzlei.de"
                className="mt-1 text-lg font-bold hover:underline transition-colors"
              >
                info@kanzlei.de
              </a>
            </div>
          </div>

          {/* Eintrag 3: Öffnungszeiten */}
          <div className="flex flex-col items-center text-center md:flex-row md:space-x-4">
            <img
              src="/images/clock-icon.svg"
              alt="Uhr-Icon"
              className="h-10 w-10 mb-2 md:mb-0"
            />
            <div className="flex flex-col items-center md:items-start">
              {/* Die Überschrift ist jetzt kleiner (text-sm) */}
              <h3 className="text-sm font-normal">Unsere Öffnungszeiten</h3>
              {/* Die Öffnungszeiten sind größer (text-lg) */}
              <p className="mt-1 text-lg font-bold">MO-FR: 09-17 Uhr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
