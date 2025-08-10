// components/PageHeader/PageHeader.tsx

import React from "react";
import { useI18n } from "../../lib/i18n/I18nProvider";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { t } = useI18n();
  return (
    <header
      className="relative min-h-96 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-20 text-white text-center z-10 flex-grow flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
      <div className="relative w-full bg-gray-800 text-white text-right py-2 px-4 text-sm font-medium z-20">
        {t("pageHeader.banner")}
      </div>
    </header>
  );
};

export default PageHeader;
