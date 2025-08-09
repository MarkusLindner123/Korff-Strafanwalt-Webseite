// components/AboutSection/AboutSection.tsx

import React from "react";
import Link from "next/link";
import { useI18n } from "../../../contexts/I18nContext";

const AboutSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Bild */}
        <div className="md:w-1/2">
          {/* Platzhalter-Bild. Sie können es später durch ein echtes Foto ersetzen */}
          <img
            src="/images/about-kanzlei.jpg"
            alt="Kanzlei Korff in Berlin"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t("about.heading")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("about.body")}
          </p>
          <Link href="/kanzlei">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full transition-colors duration-300">
              {t("about.cta")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
