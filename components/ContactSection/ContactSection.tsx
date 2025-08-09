// components/contact-section/ContactSection.tsx

import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="kontakt-formular" className="py-20 bg-korff-background">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Linke Spalte: Kontaktdaten */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-korff-primary mb-6">
                Unsere Kontaktdaten
              </h2>
              <div className="text-korff-text space-y-4 text-lg">
                <p>
                  Kanzlei Korff
                  <br />
                  Beispielstraße 123
                  <br />
                  10115 Berlin
                </p>
                <p>
                  <span className="font-semibold">Telefon:</span>{" "}
                  <a
                    href="tel:+493085479867"
                    className="text-korff-secondary hover:underline"
                  >
                    +49 30 85479867
                  </a>
                  <br />
                  <span className="font-semibold">Telefax:</span> +49 30
                  85479868
                  <br />
                  <span className="font-semibold">Mail:</span>{" "}
                  <a
                    href="mailto:info@kanzlei-korff.de"
                    className="text-korff-secondary hover:underline"
                  >
                    info[at]kanzlei-korff.de
                  </a>
                </p>
                <p>
                  <span className="font-semibold">
                    Anfahrt mit öffentlichen Verkehrsmitteln:
                  </span>
                  <br />
                  U-Bahn-Haltestelle ... (S-Bahn, U-Bahn)
                </p>
                <p>
                  <span className="font-semibold">Anfahrt mit dem PKW:</span>
                  <br />
                  Parkmöglichkeiten vorhanden auf öffentlichen Parkplätzen ...
                </p>
              </div>
            </div>

            {/* Rechte Spalte: Kontaktformular */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-korff-primary mb-6">
                Kontaktieren Sie uns
              </h2>
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-korff-text"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-korff-secondary focus:border-korff-secondary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-korff-text"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-korff-secondary focus:border-korff-secondary"
                  />
                </div>

                {/* NEUES FELD FÜR TELEFONNUMMER */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-korff-text"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-korff-secondary focus:border-korff-secondary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-korff-text"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-korff-secondary focus:border-korff-secondary"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-korff-secondary hover:bg-korff-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-korff-secondary"
                  >
                    Senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
