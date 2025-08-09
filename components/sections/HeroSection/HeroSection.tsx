// components/HeroSection/HeroSection.tsx

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
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
        <Link href="/kontakt">
          <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors duration-300 shadow-lg">
            Jetzt Notruf
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
