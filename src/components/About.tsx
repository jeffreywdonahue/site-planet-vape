import { Badge } from "@/components/ui/badge";

const differentiators = [
  "Wide device + liquid selection",
  "Friendly, no-pressure staff",
  "We stock what you ask for",
  "Clean, organized shop",
  "Quick in-and-out service",
  "Open 7 days a week",
];

const paragraphs = [
  "Planet Vape is a product-forward vape shop built around selection, organization, and a modern in-store experience. The space is clean and easy to shop, with displays that keep the focus on what's in stock.",
  "What sets Planet Vape apart is the team—customers regularly mention how helpful and friendly the staff is, and how easy it is to get in and out with exactly what they need.",
  "If you're looking for something specific, don't hesitate to ask. Planet Vape is known for responding to customer requests and bringing in items people actually want.",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-8"
      style={{ backgroundColor: "#111F33" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div>
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#1FA6B3" }}
          >
            About Planet Vape
          </p>
          <h2
            className="text-5xl md:text-6xl uppercase leading-none mb-8"
            style={{
              fontFamily: "var(--font-anton)",
              color: "#F5F7FA",
            }}
          >
            A Shop That
            <br />
            <span style={{ color: "#C24A3A" }}>Listens.</span>
          </h2>

          <div className="flex flex-col gap-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "#B7C0CC" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Right: differentiators */}
        <div className="flex flex-col justify-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: "#1FA6B3" }}
          >
            Why Planet Vape
          </p>
          <div className="flex flex-wrap gap-3">
            {differentiators.map((diff) => (
              <Badge
                key={diff}
                className="px-4 py-2 text-sm font-medium rounded-full border"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#1FA6B3",
                  color: "#F5F7FA",
                }}
              >
                {diff}
              </Badge>
            ))}
          </div>

          {/* Quote callout */}
          <div
            className="mt-10 p-6 rounded-lg border-l-4"
            style={{
              backgroundColor: "#0B1A2A",
              borderLeftColor: "#C24A3A",
            }}
          >
            <p
              className="text-lg italic leading-relaxed"
              style={{ color: "#F5F7FA" }}
            >
              &ldquo;Ask for it—we&apos;ll try to stock it.&rdquo;
            </p>
            <p className="mt-2 text-sm" style={{ color: "#B7C0CC" }}>
              — Planet Vape, Farmington NM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
