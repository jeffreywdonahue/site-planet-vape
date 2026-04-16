import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planet Vape – Farmington, NM | Wide Selection, Friendly Help",
  description:
    "Planet Vape in Farmington, NM offers a wide selection of disposables, pod systems, box mods, e-liquids, and accessories. Friendly staff, clean shop, and we stock what you ask for.",
  keywords: [
    "vape shop Farmington NM",
    "Planet Vape",
    "vape store Farmington",
    "disposable vapes New Mexico",
    "e-liquid Farmington",
    "pod systems Farmington",
  ],
  metadataBase: new URL("https://site-planet-vape.vercel.app"),
  alternates: {
    canonical: "https://site-planet-vape.vercel.app",
  },
  openGraph: {
    title: "Planet Vape – Farmington, NM",
    description:
      "Wide selection, friendly help, and a clean modern vape shop in Farmington, NM.",
    url: "https://site-planet-vape.vercel.app",
    siteName: "Planet Vape",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://places.googleapis.com/v1/places/ChIJdSuKlv-PO4cR7O280VklEfc/photos/AU_ZVEFvVAuXLzsMggwilNW4ltDCDLAznrz59Aff91lUVdEYK_s563_PMTh7WLBTyW1FGV1ytgsQMayO4uf6RzyAGzSy7RjBMfQUlTkxTHds5NJX9wKKP_iSvXwsALF5tJWGQAcoDDtsRtuTpF4EGfJzh5_yHZ_3nXivt_KLW5ZKIXmWKHN98_KAA-_8IDeW1FUVWrWAWw7eSSeYMeV8mqf3PW08gSx4_WaXgGtGSfu1Fqd8jwJeRm8aCeZozZjQl1yNTSr-oPdxNkzoHBAiWETGFeJ6UvbPStoWrhog5njvPJAigw/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
        width: 1200,
        height: 630,
        alt: "Planet Vape store interior – Farmington, NM",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
