// pages/_app.tsx
import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app"; // WICHTIG: AppProps importieren

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Den Typ für die AppProps-Destrukturierung festlegen
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
