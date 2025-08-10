import React from "react";
import Link from "next/link";
import { useId } from "react";

const ContactSection = () => {
  const formId = useId();

  return (
    // Die Sektion hat jetzt eine hellere Hintergrundfarbe und größere vertikale Abstände.
    <section
      id="kontakt-formular"
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Der äußere Container hat ein neues, modernes Design mit einem prominenteren Schatten und abgerundeten Ecken. */}
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {/* Linke Spalte: Kontaktdaten */}
            {/* Der Inhalt hat größere Abstände und ein Icon für mehr visuelle Anziehungskraft. */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] mb-6 flex items-center">
                Kontaktieren Sie uns
                <span className="ml-4 text-5xl">✉️</span>
              </h2>
              <p className="text-lg text-[var(--korff-text)] dark:text-gray-300 mb-8">
                Wir sind für Sie da, um Ihre Fragen zu beantworten und Sie bei
                Ihren rechtlichen Anliegen zu unterstützen.
              </p>
              <div className="text-[var(--korff-text)] dark:text-gray-300 space-y-6 text-base md:text-lg">
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    Kanzlei Korff
                  </span>
                  Beispielstraße 123
                  <br />
                  10115 Berlin
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    Telefon & Fax
                  </span>
                  <a
                    href="tel:+493085479867"
                    className="text-[var(--korff-secondary)] hover:underline dark:text-blue-400"
                  >
                    +49 30 85479867
                  </a>
                  <br />
                  Telefax: +49 30 85479868
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    E-Mail
                  </span>
                  <a
                    href="mailto:info@kanzlei-korff.de"
                    className="text-[var(--korff-secondary)] hover:underline dark:text-blue-400"
                  >
                    info[at]kanzlei-korff.de
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    Anfahrt
                  </span>
                  Öffentliche Verkehrsmittel und Parkmöglichkeiten in der Nähe
                  vorhanden.
                </p>
              </div>
            </div>

            {/* Rechte Spalte: Kontaktformular */}
            {/* Das Formular ist jetzt besser zentriert und hat größere Abstände zwischen den Feldern. */}
            <div className="md:w-1/2 w-full">
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor={`${formId}-name`}
                    className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id={`${formId}-name`}
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--korff-secondary)] focus:border-[var(--korff-secondary)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id={`${formId}-email`}
                    name="_replyto"
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--korff-secondary)] focus:border-[var(--korff-secondary)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-phone`}
                    className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id={`${formId}-phone`}
                    name="phone"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--korff-secondary)] focus:border-[var(--korff-secondary)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-message`}
                    className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--korff-secondary)] focus:border-[var(--korff-secondary)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-[var(--korff-secondary)] transition-colors duration-300 ease-in-out hover:bg-[var(--korff-secondary)]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--korff-secondary)]"
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
