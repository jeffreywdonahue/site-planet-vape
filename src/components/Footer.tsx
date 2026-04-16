import { Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-4 sm:px-8 border-t"
      style={{
        backgroundColor: "#0B1A2A",
        borderTopColor: "#2F343A",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p
              className="text-xl uppercase mb-2"
              style={{
                fontFamily: "var(--font-anton)",
                color: "#F5F7FA",
              }}
            >
              Planet Vape
            </p>
            <p className="text-sm" style={{ color: "#B7C0CC" }}>
              Farmington&apos;s modern vape shop.
              <br />
              Wide selection. Friendly help.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ color: "#1FA6B3" }}
            >
              Contact
            </p>
            <a
              href="tel:+15053277822"
              className="flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#F5F7FA" }}
              aria-label="Call Planet Vape"
            >
              <Phone className="w-4 h-4" style={{ color: "#C24A3A" }} aria-hidden="true" />
              (505) 327-7822
            </a>
            <address className="not-italic text-sm mt-2" style={{ color: "#B7C0CC" }}>
              3150 E Main St Suite A52
              <br />
              Farmington, NM 87402
            </address>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3 font-semibold"
              style={{ color: "#1FA6B3" }}
            >
              Follow
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/shopplanetvape/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#1FA6B3] transition-colors"
                style={{ color: "#B7C0CC" }}
                aria-label="Planet Vape on Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.yelp.com/biz/planet-vape-farmington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#1FA6B3] transition-colors"
                style={{ color: "#B7C0CC" }}
                aria-label="Planet Vape on Yelp"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t text-center"
          style={{ borderTopColor: "#2F343A" }}
        >
          <p className="text-xs" style={{ color: "#B7C0CC" }}>
            © {currentYear} Planet Vape · Farmington, NM · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
