const featuredProducts = [
  {
    name: "Disposable Vapes",
    category: "Vapes",
    description: "Grab-and-go disposable devices in a variety of flavors and nicotine options. Perfect for quick pickups.",
    icon: "💨",
    featured: true,
  },
  {
    name: "Pod Systems",
    category: "Devices",
    description: "Compact pod-style devices for simple everyday use. Refillable and pre-filled options available.",
    icon: "🔋",
    featured: true,
  },
  {
    name: "E-Liquid (Salt Nic)",
    category: "E-Liquid",
    description: "Salt nicotine e-liquid options for pod systems. Smooth hit, high satisfaction — great for pod users.",
    icon: "💧",
    featured: true,
  },
];

const otherProducts = [
  { name: "Box Mods", category: "Devices", icon: "⚡" },
  { name: "Vape Tanks", category: "Accessories", icon: "🛢️" },
  { name: "Replacement Coils", category: "Accessories", icon: "🔩" },
  { name: "Replacement Pods", category: "Accessories", icon: "📦" },
  { name: "E-Liquid (Freebase)", category: "E-Liquid", icon: "💧" },
  { name: "Batteries & Chargers", category: "Accessories", icon: "🔌" },
  { name: "Drip Tips", category: "Accessories", icon: "🎯" },
  { name: "Carrying Cases", category: "Accessories", icon: "👜" },
  { name: "Cleaning Supplies", category: "Accessories", icon: "🧹" },
  { name: "New Arrivals", category: "Featured", icon: "✨" },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-4 sm:px-8"
      style={{ backgroundColor: "#0B1A2A" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#1FA6B3" }}
          >
            What We Stock
          </p>
          <h2
            className="text-5xl md:text-6xl uppercase leading-none"
            style={{
              fontFamily: "var(--font-anton)",
              color: "#F5F7FA",
            }}
          >
            Wide Selection.
            <br />
            <span style={{ color: "#C24A3A" }}>Real Inventory.</span>
          </h2>
        </div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="p-8 rounded-lg border-t-4 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "#111F33",
                borderTopColor: "#C24A3A",
              }}
            >
              <span className="text-4xl" role="img" aria-hidden="true">
                {product.icon}
              </span>
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#1FA6B3" }}
                >
                  {product.category}
                </span>
                <h3
                  className="text-xl font-bold mt-1 mb-2"
                  style={{ color: "#F5F7FA" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#B7C0CC" }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {otherProducts.map((product) => (
            <div
              key={product.name}
              className="p-4 rounded-lg border flex items-start gap-3 transition-colors hover:border-[#1FA6B3]"
              style={{
                backgroundColor: "#111F33",
                borderColor: "#2F343A",
              }}
            >
              <span className="text-xl" role="img" aria-hidden="true">
                {product.icon}
              </span>
              <div>
                <p
                  className="text-xs text-[#B7C0CC] uppercase tracking-wider"
                >
                  {product.category}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#F5F7FA" }}
                >
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* In-store only note */}
        <p
          className="mt-8 text-center text-sm"
          style={{ color: "#B7C0CC" }}
        >
          🛍️ In-store pickup only · Ask for specific brands or products —
          we&apos;ll do our best to stock what you want.
        </p>
      </div>
    </section>
  );
}
