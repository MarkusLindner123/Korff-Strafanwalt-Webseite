import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SupportedLocale = "de" | "en" | "pl" | "tr" | "ar" | "fr";

type Messages = { [key: string]: string | Messages };

export interface I18nContextValue {
  locale: SupportedLocale;
  dir: "ltr" | "rtl";
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

// Static imports to allow tree-shaking and bundling
import de from "./locales/de.json";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import tr from "./locales/tr.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";

const LOCALES: Record<SupportedLocale, Messages> = {
  de: de as Messages,
  en: en as Messages,
  pl: pl as Messages,
  tr: tr as Messages,
  ar: ar as Messages,
  fr: fr as Messages,
};

const DEFAULT_LOCALE: SupportedLocale = "de";

function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem("locale") as SupportedLocale | null;
  if (stored && LOCALES[stored]) return stored;
  const navigatorLang = window.navigator.language?.slice(0, 2) as SupportedLocale;
  if (navigatorLang && LOCALES[navigatorLang]) return navigatorLang;
  return DEFAULT_LOCALE;
}

function resolveKey(messages: Messages, path: string): string | undefined {
  const parts = path.split(".");
  let node: string | Messages | undefined = messages;
  for (const part of parts) {
    if (node && typeof node === "object" && part in node) {
      node = (node as Messages)[part];
    } else {
      return undefined;
    }
  }
  return typeof node === "string" ? node : undefined;
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<SupportedLocale>(getInitialLocale());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  const t = useMemo(() => {
    const dict = LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];
    return (key: string) => {
      const value = resolveKey(dict, key);
      if (typeof value === "string") return value;
      // Fallback to German
      const fallback = resolveKey(LOCALES[DEFAULT_LOCALE], key);
      return typeof fallback === "string" ? fallback : key;
    };
  }, [locale]);

  const value: I18nContextValue = useMemo(
    () => ({ locale, dir, setLocale, t }),
    [locale, dir, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}