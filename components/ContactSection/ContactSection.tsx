// components/contact-section/ContactSection.tsx

import React from "react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="kontakt-formular" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Linke Spalte: Kontaktdaten */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Unsere Kontaktdaten
              </h2>
              <div className="text-gray-600 space-y-4 text-lg">
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
                    className="text-blue-600 hover:underline"
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
                    className="text-blue-600 hover:underline"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
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
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* NEUES FELD FÜR TELEFONNUMMER */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
