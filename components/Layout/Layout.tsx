// components/Layout/Layout.tsx

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // <-- Diese Zeile hinzufügen

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer /> {/* <-- Diese Zeile ändern */}
    </>
  );
};

export default Layout;
