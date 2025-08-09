// components/PageHeader/PageHeader.tsx

import React from "react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header
      className="relative min-h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 py-20 text-white text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
