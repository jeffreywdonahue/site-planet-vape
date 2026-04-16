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
  openGraph: {
    title: "Planet Vape – Farmington, NM",
    description: "Wide selection, friendly help, and a clean modern shop.",
    url: "https://site-planet-vape.vercel.app",
    siteName: "Planet Vape",
    locale: "en_US",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "VapeShop",
  name: "Planet Vape",
  telephone: "(505) 327-7822",
  url: "https://site-planet-vape.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3150 E Main St Suite A52",
    addressLocality: "Farmington",
    addressRegion: "NM",
    postalCode: "87402",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.747613,
    longitude: -108.165742,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "5",
  },
  sameAs: [
    "https://www.facebook.com/shopplanetvape/",
    "https://www.yelp.com/biz/planet-vape-farmington",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
