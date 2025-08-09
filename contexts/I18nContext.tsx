import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

export type SupportedLanguage = "de" | "en";

interface I18nContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>("de");

  // Load language preference from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("app_language") as SupportedLanguage | null;
      if (stored === "de" || stored === "en") {
        setLanguage(stored);
      }
    }
  }, []);

  // Persist language preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("app_language", language);
    }
  }, [language]);

  const t = useMemo(() => {
    return (key: string) => {
      const dict = translations[language] ?? {};
      const value = key.split(".").reduce<any>((acc, part) => (acc ? acc[part] : undefined), dict);
      if (typeof value === "string") return value;
      return key;
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
};