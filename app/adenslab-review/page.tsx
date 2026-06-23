//app/adenslab-review/page.tsx

import { ArrowRight, CheckCircle2, Sparkles, Zap, BarChart3 } from "lucide-react";

export default function AdenslabReviewPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center rounded-full border border-purple-100 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Marketing Revolution
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Automate Your Content with <span className="text-purple-600">ADEN's Lab</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
          Create high-converting marketing campaigns in seconds. Stop wasting time on manual tasks and let AI drive your growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-700 transition-all hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
          >
            Learn More
          </a>
        </div>
        
        <p className="mt-4 text-sm text-gray-500">
          No credit card required for demo • Instant access
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose ADEN's Lab?</h2>
            <p className="mt-4 text-gray-600">Everything you need to scale your marketing efforts.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<Zap className="h-10 w-10 text-purple-600" />}
              title="Lightning Fast Creation"
              description="Generate weeks' worth of content in minutes with our advanced AI engine."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-purple-600" />}
              title="Data-Driven Results"
              description="Optimize campaigns automatically based on real-time performance analytics."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="h-10 w-10 text-purple-600" />}
              title="Proven Conversion"
              description="Templates designed by experts to maximize clicks, leads, and sales."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="rounded-3xl bg-gray-900 px-6 py-16 sm:px-12 sm:py-20 text-white">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to transform your marketing?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
            Join thousands of marketers who are saving time and increasing revenue with ADEN's Lab.
          </p>
          <a
            href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 inline-flex rounded-lg bg-purple-50 p-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}