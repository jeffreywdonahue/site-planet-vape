const reviews = [
  {
    author: "Bruce Werner",
    rating: 5,
    text: "Tons of options and I requested some things and like a week or so later they had it in stock. Cool to see a shop that goes with what the customers want",
    date: "Oct 2025",
  },
  {
    author: "Heather Howlett",
    rating: 5,
    text: "Bri was super helpful, didn't have the brand I was looking for. But she suggested another, super nice environment. Happy to be here! Love her!",
    date: "Nov 2025",
  },
  {
    author: "Brooklynn Tiva",
    rating: 5,
    text: "The BEST vape store in all of Farmington. Wide selection and options to choose from. Staff is amazing, resourceful, and helpful. 10/10 5/5 stars!!",
    date: "Oct 2025",
  },
  {
    author: "Uriah Day",
    rating: 5,
    text: "Very friendly staff, got to speak with Clay and he had us in and out quickly. 10/10 would recommend",
    date: "Dec 2025",
  },
  {
    author: "Shorty Herrera",
    rating: 5,
    text: "Planet vape has a great selection, plenty to choose from. Great staff Bree was very nice and helpful! I plan to be a loyal customer thanks to her.",
    date: "Jan 2026",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} style={{ color: "#C24A3A" }} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 p-6 rounded-lg border mx-3"
      style={{
        backgroundColor: "#111F33",
        borderColor: "#2F343A",
      }}
    >
      <StarRating rating={review.rating} />
      <p
        className="mt-3 text-sm leading-relaxed line-clamp-3"
        style={{ color: "#B7C0CC" }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-semibold" style={{ color: "#F5F7FA" }}>
          {review.author}
        </p>
        <p className="text-xs" style={{ color: "#B7C0CC" }}>
          {review.date}
        </p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: "#0B1A2A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <p
          className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          style={{ color: "#1FA6B3" }}
        >
          What Customers Say
        </p>
        <h2
          className="text-5xl md:text-6xl uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            color: "#F5F7FA",
          }}
        >
          Real People,
          <br />
          <span style={{ color: "#C24A3A" }}>Real Results.</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden mb-4">
        <div className="flex marquee-left" style={{ width: "max-content" }}>
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="flex marquee-right" style={{ width: "max-content" }}>
          {[...doubled].reverse().map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Google rating badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-10 flex justify-center">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
          style={{
            backgroundColor: "#111F33",
            borderColor: "#2F343A",
          }}
        >
          <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-anton)", color: "#F5F7FA" }}>
            5.0
          </span>
          <div>
            <div className="flex gap-0.5" aria-label="5 out of 5 stars">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#C24A3A" }} aria-hidden="true">
                  {s}
                </span>
              ))}
            </div>
            <p className="text-xs" style={{ color: "#B7C0CC" }}>
              Google Reviews · Farmington, NM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
