import React from "react";
import { useId } from "react";
import { useI18n } from "../../lib/i18n/I18nProvider";

const ContactSection = () => {
  const formId = useId();
  const { t } = useI18n();

  return (
    <section id="kontakt-formular" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] mb-6 flex items-center">
                {t("contact.headline")}<span className="ml-4 text-5xl">✉️</span>
              </h2>
              <p className="text-lg text-[var(--korff-text)] dark:text-gray-300 mb-8">
                {t("contact.intro")}
              </p>
              <div className="text-[var(--korff-text)] dark:text-gray-300 space-y-6 text-base md:text-lg">
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    {t("contact.address")}
                  </span>
                  Beispielstraße 123
                  <br />
                  10115 Berlin
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    {t("contact.phoneFax")}
                  </span>
                  <a href="tel:+493085479867" className="text-[var(--korff-secondary)] hover:underline dark:text-blue-400">
                    +49 30 85479867
                  </a>
                  <br />
                  Telefax: +49 30 85479868
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    {t("contact.email")}
                  </span>
                  <a href="mailto:info@kanzlei-korff.de" className="text-[var(--korff-secondary)] hover:underline dark:text-blue-400">
                    info[at]kanzlei-korff.de
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--korff-primary)] dark:text-[var(--korff-secondary)] block">
                    {t("contact.route")}
                  </span>
                  {t("contact.routeInfo")}
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
                <div>
                  <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300">
                    {t("contact.form.name")}
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
                  <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300">
                    {t("contact.form.email")}
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
                  <label htmlFor={`${formId}-phone`} className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    id={`${formId}-phone`}
                    name="phone"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--korff-secondary)] focus:border-[var(--korff-secondary)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-[var(--korff-text)] dark:text-gray-300">
                    {t("contact.form.message")}
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
                  <button type="submit" className="w-full btn-primary-rounded">
                    {t("contact.form.send")}
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
