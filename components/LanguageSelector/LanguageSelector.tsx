import React from "react";
import { SupportedLanguage, useI18n } from "../../contexts/I18nContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useI18n();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SupportedLanguage;
    setLanguage(value);
  };

  return (
    <label className="flex items-center space-x-2 text-sm text-gray-600">
      <span>{t("header.selector.label")}:</span>
      <select
        aria-label={t("header.selector.label")}
        value={language}
        onChange={handleChange}
        className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-700"
      >
        <option value="de">{t("languageNames.de")}</option>
        <option value="en">{t("languageNames.en")}</option>
      </select>
    </label>
  );
};

export default LanguageSelector;