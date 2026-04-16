import { Phone, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const hours = [
  { day: "Monday", hours: "8:00 AM – 9:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 9:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 9:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 9:00 PM" },
  { day: "Friday", hours: "8:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 7:00 PM" },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-4 sm:px-8"
      style={{ backgroundColor: "#111F33" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#1FA6B3" }}
          >
            Find Us
          </p>
          <h2
            className="text-5xl md:text-6xl uppercase leading-none"
            style={{
              fontFamily: "var(--font-anton)",
              color: "#F5F7FA",
            }}
          >
            Come In &amp;
            <br />
            <span style={{ color: "#C24A3A" }}>Say Hi.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Hours */}
          <div
            className="p-8 rounded-lg"
            style={{ backgroundColor: "#0B1A2A" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "#1FA6B3" }}
                aria-hidden="true"
              />
              <h3
                className="text-xl font-bold uppercase"
                style={{
                  fontFamily: "var(--font-anton)",
                  color: "#F5F7FA",
                }}
              >
                Store Hours
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {hours.map((item, i) => (
                <div key={item.day}>
                  <div className="flex justify-between items-center py-1">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color:
                          item.day === "Sunday" ? "#B7C0CC" : "#F5F7FA",
                      }}
                    >
                      {item.day}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{
                        color:
                          item.day === "Sunday" ? "#B7C0CC" : "#1FA6B3",
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                  {i < hours.length - 1 && (
                    <Separator
                      style={{ backgroundColor: "#2F343A" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Address + CTA */}
          <div className="flex flex-col gap-8 justify-center">
            {/* Address */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: "#1FA6B3" }}
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className="text-xl font-bold uppercase mb-2"
                    style={{
                      fontFamily: "var(--font-anton)",
                      color: "#F5F7FA",
                    }}
                  >
                    Planet Vape
                  </h3>
                  <address className="not-italic" style={{ color: "#B7C0CC" }}>
                    <p>3150 E Main St Suite A52</p>
                    <p>Farmington, NM 87402</p>
                  </address>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=36.747613,-108.165742"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline"
                style={{ color: "#1FA6B3" }}
                aria-label="Get directions to Planet Vape on Google Maps"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone CTA */}
            <div
              className="p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: "#0B1A2A",
                borderLeftColor: "#C24A3A",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone
                  className="w-5 h-5"
                  style={{ color: "#C24A3A" }}
                  aria-hidden="true"
                />
                <h3
                  className="font-bold uppercase"
                  style={{
                    fontFamily: "var(--font-anton)",
                    color: "#F5F7FA",
                  }}
                >
                  Give Us a Call
                </h3>
              </div>
              <a
                href="tel:+15053277822"
                className="text-2xl font-bold block mb-4 hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "var(--font-anton)",
                  color: "#F5F7FA",
                }}
                aria-label="Call Planet Vape at (505) 327-7822"
              >
                (505) 327-7822
              </a>
              <a
                href="tel:+15053277822"
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-bold transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#C24A3A",
                  color: "#F5F7FA",
                  minHeight: "48px",
                }}
                aria-label="Call Planet Vape"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/shopplanetvape/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold transition-colors hover:text-[#1FA6B3]"
                style={{ color: "#B7C0CC" }}
                aria-label="Planet Vape on Facebook"
              >
                Facebook →
              </a>
              <a
                href="https://www.yelp.com/biz/planet-vape-farmington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold transition-colors hover:text-[#1FA6B3]"
                style={{ color: "#B7C0CC" }}
                aria-label="Planet Vape on Yelp"
              >
                Yelp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
