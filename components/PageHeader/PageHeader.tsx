// components/PageHeader/PageHeader.tsx

import React from "react";
import { useI18n } from "../../contexts/I18nContext";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { t } = useI18n();
  const translated = t(title);
  return (
    <header
      className="relative min-h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-20 text-white text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold">{translated}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
