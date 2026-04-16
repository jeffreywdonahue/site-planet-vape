import { Phone } from "lucide-react";

const HERO_IMAGE =
  "https://places.googleapis.com/v1/places/ChIJdSuKlv-PO4cR7O280VklEfc/photos/AU_ZVEFvVAuXLzsMggwilNW4ltDCDLAznrz59Aff91lUVdEYK_s563_PMTh7WLBTyW1FGV1ytgsQMayO4uf6RzyAGzSy7RjBMfQUlTkxTHds5NJX9wKKP_iSvXwsALF5tJWGQAcoDDtsRtuTpF4EGfJzh5_yHZ_3nXivt_KLW5ZKIXmWKHN98_KAA-_8IDeW1FUVWrWAWw7eSSeYMeV8mqf3PW08gSx4_WaXgGtGSfu1Fqd8jwJeRm8aCeZozZjQl1yNTSr-oPdxNkzoHBAiWETGFeJ6UvbPStoWrhog5njvPJAigw/media?maxWidthPx=1200&key=AIzaSyC7jI0eiMaGHdvPRJyt2ER56WKt_fI86V4";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0B1A2A" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        role="img"
        aria-label="Planet Vape store interior"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,26,42,0.95) 0%, rgba(11,26,42,0.85) 50%, rgba(11,26,42,0.7) 100%)",
        }}
      />

      {/* Teal accent line — vertical */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ backgroundColor: "#1FA6B3" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div>
            {/* Teal eyebrow */}
            <p
              className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "#1FA6B3" }}
            >
              Farmington, NM
            </p>

            <h1
              className="leading-none uppercase mb-6"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                color: "#F5F7FA",
                lineHeight: "0.95",
              }}
            >
              Vape
              <br />
              Made
              <br />
              <span style={{ color: "#C24A3A" }}>Easy.</span>
            </h1>

            <p
              className="text-lg mb-8 max-w-md leading-relaxed"
              style={{ color: "#B7C0CC" }}
            >
              Wide selection, friendly help, and a clean, modern shop in
              Farmington. From disposables to box mods — we stock what you need
              and listen when you ask for more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15053277822"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-bold transition-all hover:opacity-90 hover:scale-105"
                style={{
                  backgroundColor: "#C24A3A",
                  color: "#F5F7FA",
                  minHeight: "52px",
                }}
                aria-label="Call Planet Vape at (505) 327-7822"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-bold border-2 transition-all hover:bg-[#1FA6B3] hover:text-[#0B1A2A]"
                style={{
                  borderColor: "#1FA6B3",
                  color: "#1FA6B3",
                  minHeight: "52px",
                }}
              >
                See What We Stock
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:flex flex-col gap-6 hidden">
            {[
              { value: "5★", label: "Average Rating", sublabel: "5 Google reviews" },
              { value: "Open", label: "Mon–Sat 8AM–9PM", sublabel: "Sun 9AM–7PM" },
              { value: "Farmington", label: "3150 E Main St", sublabel: "Suite A52, NM 87402" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-lg border-l-4"
                style={{
                  backgroundColor: "rgba(17, 31, 51, 0.85)",
                  borderLeftColor: "#1FA6B3",
                }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-anton)",
                    color: "#F5F7FA",
                  }}
                >
                  {stat.value}
                </p>
                <p className="font-semibold text-sm" style={{ color: "#F5F7FA" }}>
                  {stat.label}
                </p>
                <p className="text-xs mt-1" style={{ color: "#B7C0CC" }}>
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom teal gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B1A2A)",
        }}
      />
    </section>
  );
}
