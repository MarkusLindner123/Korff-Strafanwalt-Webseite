import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { I18nProvider, useI18n } from "../lib/i18n/I18nProvider";
import Layout from "../components/Layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-teal-500"></div>
    </div>
  );
};

function AppShell({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { dir, locale } = useI18n();

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [dir, locale]);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setTimeout(() => setIsLoading(false), 300);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={`${inter.variable} font-sans`}>
      {isLoading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

function MyApp(props: AppProps) {
  return (
    <I18nProvider>
      <AppShell {...props} />
    </I18nProvider>
  );
}

export default MyApp;
