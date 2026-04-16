import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
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
  image:
    "https://places.googleapis.com/v1/places/ChIJdSuKlv-PO4cR7O280VklEfc/photos/AU_ZVEFvVAuXLzsMggwilNW4ltDCDLAznrz59Aff91lUVdEYK_s563_PMTh7WLBTyW1FGV1ytgsQMayO4uf6RzyAGzSy7RjBMfQUlTkxTHds5NJX9wKKP_iSvXwsALF5tJWGQAcoDDtsRtuTpF4EGfJzh5_yHZ_3nXivt_KLW5ZKIXmWKHN98_KAA-_8IDeW1FUVWrWAWw7eSSeYMeV8mqf3PW08gSx4_WaXgGtGSfu1Fqd8jwJeRm8aCeZozZjQl1yNTSr-oPdxNkzoHBAiWETGFeJ6UvbPStoWrhog5njvPJAigw/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Nav />
      <main>
        <Hero />
        <Products />
        <Reviews />
        <About />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
