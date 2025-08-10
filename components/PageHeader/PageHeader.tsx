// components/PageHeader/PageHeader.tsx

import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header
      className="relative min-h-96 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-20 text-white text-center z-10 flex-grow flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
      {/* Der Balken mit Kanzlei-Informationen, jetzt rechtsbündig ausgerichtet */}
      <div className="relative w-full bg-gray-800 text-white text-right py-2 px-4 text-sm font-medium z-20">
        Daniel Korff - Kanzlei für Strafrecht - in Berlin und bundesweit
      </div>
    </header>
  );
};

export default PageHeader;
