// File: app/(public)/[slug]/page.tsx

export default function DynamicLandingPage({ params }: { params: { slug: string } }) {
  // NANTINYA: Di sini kita akan menembak API Worker untuk mengambil data 
  // copywriting berdasarkan params.slug (misal: "ad-automation")

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-4 block">
          Preview Mode
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 sm:text-5xl">
          Landing Page: <span className="text-indigo-600">{params.slug}</span>
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Halaman ini bersifat dinamis. Teks, gambar, dan angle penawaran untuk kampanye <strong>{params.slug}</strong> akan dimuat dari database D1.
        </p>
        
        {/* Tombol Tracker yang akan diarahkan sesuai slug */}
        <a
          href={`https://affiliate-hub-tracker.affiliate-hub.workers.dev/out/${params.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
        >
          Ambil Promo ↗
        </a>
      </div>
    </div>
  );
}