import React from "react";
import Link from "next/link";
import { useI18n } from "../../lib/i18n/I18nProvider";

const AboutSection = () => {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img
            src="/images/about-kanzlei.jpg"
            alt="Kanzlei Korff in Berlin"
            className="rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight text-[var(--korff-primary)] mb-6">
            {t("home.about.title")}
          </h2>
          <p className="text-lg text-[var(--korff-text)] mb-8">
            {t("home.about.paragraph1")}
          </p>
          <Link href="/kanzlei">
            <button className="btn-primary-rounded">
              {t("home.about.cta")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
