// app/(public)/page.tsx

import { featuredOffers } from "@/data/offfers";

export default function HomePage() {
  const isDevelopment = process.env.NODE_ENV === "development";

  const TRACKER_BASE_URL = isDevelopment
    ? "http://localhost:8787/out/"
    : "https://affiliate-hub-tracker.affiliate-hub.workers.dev/out/";

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700">
            AI Tools • Automation • Productivity
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Discover AI Tools
            <br />
            That Help You
            <span className="text-indigo-600"> Work Smarter.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
            We research, test, and recommend AI platforms that help
            entrepreneurs, developers, marketers, and growing businesses
            automate workflows, improve productivity, and save valuable time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#offers"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
            >
              Explore AI Tools
            </a>

            <a
              href="/ai-automation"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition"
            >
              Learn About AI Automation
            </a>
          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-3xl font-bold text-indigo-600">
                24/7
              </div>

              <p className="mt-2 text-gray-600">
                Automation
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">
                AI
              </div>

              <p className="mt-2 text-gray-600">
                Powered Workflows
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">
                Curated
              </div>

              <p className="mt-2 text-gray-600">
                Trusted Platforms
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">
                Global
              </div>

              <p className="mt-2 text-gray-600">
                Resources
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl">

            <h2 className="text-4xl font-bold">
              Why Follow Our Recommendations?
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              The AI landscape changes every week.
              We simplify your search by highlighting tools that
              solve real business problems instead of chasing hype.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-xl border p-8">

              <h3 className="font-bold text-xl">
                Save Time
              </h3>

              <p className="mt-4 text-gray-600">
                Stop comparing hundreds of products.
                We shortlist the most practical AI solutions.
              </p>

            </div>

            <div className="rounded-xl border p-8">

              <h3 className="font-bold text-xl">
                Work Smarter
              </h3>

              <p className="mt-4 text-gray-600">
                Discover automation platforms that eliminate repetitive work.
              </p>

            </div>

            <div className="rounded-xl border p-8">

              <h3 className="font-bold text-xl">
                Grow Faster
              </h3>

              <p className="mt-4 text-gray-600">
                Adopt modern AI tools used by startups, creators, and businesses worldwide.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OFFERS */}

      <section
        id="offers"
        className="bg-gray-50 py-24"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Featured AI Platforms
            </h2>

            <p className="mt-4 text-gray-600">
              Carefully selected tools that can improve productivity and business performance.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {featuredOffers.map((offer) => (

              <div
                key={offer.id}
                className="rounded-2xl bg-white border p-8 shadow-sm hover:shadow-lg transition"
              >

                <span className="text-sm font-semibold text-indigo-600 uppercase">
                  {offer.merchantName}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {offer.name}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {offer.description}
                </p>

                <a
                  href={`${TRACKER_BASE_URL}${offer.slug}`}
                  className="mt-8 inline-flex w-full justify-center rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700 transition"
                >
                  Learn More
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Stay Ahead with AI
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore modern AI platforms that help you automate,
            create, and grow your business more efficiently.
          </p>

          <a
            href="#offers"
            className="inline-flex mt-10 rounded-lg bg-indigo-600 px-8 py-4 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Browse Recommended Tools
          </a>

        </div>

      </section>

    </div>
  );
}