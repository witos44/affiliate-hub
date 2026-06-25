import { featuredOffers } from "@/data/offfers";

export default function HomePage() {
  const TRACKER_BASE_URL = process.env.NEXT_PUBLIC_TRACKER_URL || "http://localhost:8787/out/";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header / Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-indigo-600">
            Affiliate Hub
          </h1>
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium">
            Live Promo
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900 sm:text-5xl">
            Rekomendasi Produk & Layanan Terbaik
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-500">
            Temukan berbagai perkakas, automasi bisnis, dan penawaran khusus yang sudah dikurasi secara eksklusif.
          </p>
        </section>

        {/* Offers Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredOffers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  {offer.merchantName}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                  {offer.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {offer.description}
                </p>
              </div>

              {/* Tombol yang mengarah langsung ke Mesin Tracker Backend */}
              <div className="mt-6">
                <a
                  href={`${TRACKER_BASE_URL}${offer.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors text-center"
                >
                  Ambil Promo ↗
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-24">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          © 2026 Affiliate Hub. Built with Next.js Statics.
        </div>
      </footer>
    </div>
  );
}