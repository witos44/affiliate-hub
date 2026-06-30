// components/public/LandingPage.tsx

import type { LandingPage } from "@/types/landing";

interface LandingPageProps {
  landing: LandingPage;
}

export default function LandingPage({ landing }: LandingPageProps) {
  const isDevelopment = process.env.NODE_ENV === "development";
  const TRACKER_BASE_URL = isDevelopment
    ? "http://localhost:8787/out/"
    : "https://affiliate-hub-tracker.affiliate-hub.workers.dev/out/";

  return (
    <>
      {/* ===========================================================
          HERO
      ============================================================ */}
      <section className="relative overflow-hidden bg-linear-to-b from-indigo-50 via-white to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              {landing.hero.badge}
            </span>
            <h1 className="mt-8 text-5xl md:text-6xl font-black tracking-tight leading-tight">
              {landing.hero.title}
            </h1>
            <p className="mt-8 text-xl leading-9 text-gray-600">
              {landing.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`${TRACKER_BASE_URL}${landing.offerSlug}`}
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
              >
                {landing.hero.cta}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          BENEFITS
      ============================================================ */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {landing.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                  ✓
                </div>
                <h3 className="mt-6 text-xl font-bold">{benefit}</h3>
                <p className="mt-3 text-gray-600">
                  Modern AI tools help streamline repetitive work,
                  improve productivity, and let your team focus on
                  higher-value tasks.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          FEATURES
      ============================================================ */}
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Why AI Automation
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Focus on Growing Your Business, Not Repetitive Tasks.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Modern businesses shouldn't waste valuable time on
              repetitive manual work. AI automation helps you work
              faster, smarter, and more efficiently.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {landing.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                  🚀
                </div>
                <h3 className="mt-6 text-2xl font-bold">{feature.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          PROBLEM & SOLUTION
      ============================================================ */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left - Problem */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
                The Challenge
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight">
                {landing.problem.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {landing.problem.description}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Every day, businesses spend countless hours
                answering repetitive questions, organizing information,
                writing content, and managing workflows.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Those hours could be spent acquiring customers,
                improving products, and growing revenue.
              </p>
            </div>

            {/* Right - Solution */}
            <div className="rounded-3xl bg-indigo-600 p-10 text-white shadow-xl">
              <span className="text-sm uppercase tracking-widest text-indigo-200">
                The Solution
              </span>
              <h3 className="mt-4 text-3xl font-black">
                {landing.solution.title}
              </h3>
              <p className="mt-6 leading-8 text-indigo-100">
                {landing.solution.description} and many other repetitive business tasks.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Save valuable working hours every week</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Improve team productivity</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Scale your business without increasing workload</span>
                </li>
                <li className="flex gap-4">
                  <span>✔</span>
                  <span>Start quickly with beginner-friendly tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          QUICK STATS
      ============================================================ */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-black text-white">24/7</div>
              <p className="mt-4 text-gray-400">AI Availability</p>
            </div>
            <div>
              <div className="text-5xl font-black text-white">⚡</div>
              <p className="mt-4 text-gray-400">Faster Workflows</p>
            </div>
            <div>
              <div className="text-5xl font-black text-white">🌍</div>
              <p className="mt-4 text-gray-400">Global Accessibility</p>
            </div>
            <div>
              <div className="text-5xl font-black text-white">AI</div>
              <p className="mt-4 text-gray-400">Powered Productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          PRIMARY CTA
      ============================================================ */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Get Started Today
          </span>
          <h2 className="mt-6 text-5xl font-black tracking-tight">
            Start Working Smarter With AI.
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600">
            Discover practical AI solutions that help automate
            repetitive work, improve efficiency, and support business growth.
          </p>
          <a
            href={`${TRACKER_BASE_URL}${landing.offerSlug}`}
            className="mt-12 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-10 py-5 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700"
          >
            {landing.hero.cta}
          </a>
        </div>
      </section>

      {/* ===========================================================
          WHO IS THIS FOR
      ============================================================ */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Perfect For
            </span>
            <h2 className="mt-4 text-4xl font-black">
              Built for Modern Professionals
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
              Whether you're building a startup, running a business,
              or working as a freelancer, AI automation helps you
              accomplish more in less time.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {landing.trust.map((item) => (
              <span
                key={item}
                className="rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          FAQ
      ============================================================ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 text-4xl font-black">
              Everything You Need to Know
            </h2>
          </div>
          <div className="mt-14 space-y-6">
            {landing.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-4 leading-8 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================================================
          FINAL CTA
      ============================================================ */}
      <section className="bg-linear-to-r from-indigo-600 to-indigo-700 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black tracking-tight text-white">
            Ready to Experience the Power of AI?
          </h2>
          <p className="mt-8 text-xl leading-8 text-indigo-100">
            Join thousands of professionals using AI to automate
            repetitive work, improve productivity, and grow faster.
          </p>
          <a
            href={`${TRACKER_BASE_URL}${landing.offerSlug}`}
            className="mt-12 inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-lg font-bold text-indigo-600 shadow-xl transition hover:scale-105"
          >
            {landing.hero.cta}
          </a>
        </div>
      </section>
    </>
  );
}