// app/page.tsx

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Bagian Home */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Affiliate Hub</h1>
        <a
          href="/adenslab-review"
          className="text-xl font-semibold text-blue-600 underline hover:text-blue-800"
        >
          Go to Landing Page
        </a>
      </div>

      <hr className="w-full my-8 border-gray-300" />

      {/* Bagian Review (Contoh konten) */}
      <section className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-gray-900">
          ADEN's Lab Review
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          AI tool for content and marketing automation.
        </p>

        <a
          href="/out/adenslab?gclid=test123"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
        >
          Try ADEN's Lab
        </a>
      </section>
    </main>
  )
}