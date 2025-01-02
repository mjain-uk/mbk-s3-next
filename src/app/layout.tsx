
import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CookieConsentBanner from "./components/cookie-consent/CookieConsent";

const montSerrat = Montserrat({
  weight: ["300", "500"],
  subsets: ["cyrillic"],
});
export const metadata: Metadata = {
  title: "Makeup By Kopal",
  description: "Bridal Makeup Expert",
  icons: {
    icon: "/favicon.webp", // or .png if you use PNG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${montSerrat.className} font-light bg-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
