import React from "react";
import Link from "next/link";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || "";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Bild-Container */}
        <div className="md:w-1/2">
          <img
            src={`${basePath}/images/about-kanzlei.jpg`}
            alt="Kanzlei Korff in Berlin"
            className="rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Text-Container */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight text-[var(--korff-primary)] mb-6">
            Kanzlei Korff: Ihr Anwalt in Berlin
          </h2>
          <p className="text-lg text-[var(--korff-text)] mb-8">
            Als erfahrene Anwaltskanzlei in Berlin-Mitte stehen wir für
            fundierte juristische Beratung und entschlossene
            Interessenvertretung. Unser Fokus liegt auf der Strafverteidigung
            und dem Einsatz für die Rechte unserer Mandanten. Wir verstehen die
            Dringlichkeit und Sensibilität Ihrer Situation und bieten Ihnen eine
            kompetente und vertrauensvolle Begleitung in jeder Phase Ihres
            Verfahrens.
          </p>
          <Link href="/kanzlei">
            <button className="px-8 py-4 bg-[var(--korff-secondary)] text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-[var(--korff-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--korff-secondary)] focus:ring-opacity-50">
              Mehr über uns
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
