import React, { useMemo, useState } from "react";
import { useI18n } from "../../lib/i18n/I18nProvider";
import type { SupportedLocale } from "../../lib/i18n/I18nProvider";

interface LanguageOption {
  code: SupportedLocale;
  label: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "tr", label: "Türkçe" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
];

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  const currentLabel = useMemo(() => {
    return LANGUAGES.find((l) => l.code === locale)?.label ?? locale.toUpperCase();
  }, [locale]);

  return (
    <div className="relative">
      <button
        aria-label={t("common.changeLanguage")}
        className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white text-korff-text hover:bg-gray-50 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        {currentLabel}
        <span className="ml-2">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg z-50">
          <ul className="py-1 text-sm">
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`flex w-full items-center px-3 py-2 text-left hover:bg-gray-50 ${
                    lang.code === locale ? "font-semibold text-korff-primary" : "text-korff-text"
                  }`}
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;