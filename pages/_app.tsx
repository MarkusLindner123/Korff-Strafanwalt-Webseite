// pages/_app.tsx

import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { I18nProvider } from "../contexts/I18nContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;
