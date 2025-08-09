// components/sections/MapSection/MapSection.tsx

import React from "react";
import { useI18n } from "../../../contexts/I18nContext";

const MapSection = () => {
  const { t } = useI18n();
  return (
    // Die id="anfahrt" wird hier zum äußeren Element hinzugefügt,
    // damit der Footer-Link dorthin navigieren kann.
    <section id="anfahrt" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          {t("map.heading")}
        </h2>
        {/* Sektion für die Karte */}
        <div className="bg-white p-6 rounded-lg shadow-lg overflow-hidden">
          {/* NEUE STRUKTUR: Ein Div-Container mit festen, responsiven Höhen
            umschließt den iframe. Dadurch wird die Höhe der Karte auf 
            allen Geräten garantiert und ist nicht mehr von der übergeordneten
            Komponente abhängig.
          */}
          <div className="w-full h-[300px] md:h-[450px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.730336214041!2d13.360155076635848!3d52.50654877196024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8519e917d591f%3A0x867083a22c53f3e!2sKluckstra%C3%9Fe%2036%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1709214751761!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
