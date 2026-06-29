// app/(public)/page.tsx

import { featuredOffers } from "@/data/offfers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <Badge className="rounded-full bg-indigo-50 px-4 py-1 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">
            AI Tools • Automation • Productivity
          </Badge>

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
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <a href="#offers">Explore AI Tools</a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a href="/ai-automation">Learn About AI Automation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <p className="mt-2 text-gray-600">Automation</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">AI</div>
              <p className="mt-2 text-gray-600">Powered Workflows</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">Curated</div>
              <p className="mt-2 text-gray-600">Trusted Platforms</p>
            </div>

            <div>
              <div className="text-3xl font-bold text-indigo-600">Global</div>
              <p className="mt-2 text-gray-600">Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold">Why Follow Our Recommendations?</h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              The AI landscape changes every week.
              We simplify your search by highlighting tools that
              solve real business problems instead of chasing hype.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Save Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Stop comparing hundreds of products.
                  We shortlist the most practical AI solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Work Smarter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Discover automation platforms that eliminate repetitive work.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Grow Faster</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Adopt modern AI tools used by startups, creators, and businesses worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Featured AI Platforms</h2>
            <p className="mt-4 text-gray-600">
              Carefully selected tools that can improve productivity and business performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {featuredOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit text-sm font-semibold text-indigo-600 uppercase">
                    {offer.merchantName}
                  </Badge>
                  <CardTitle className="text-2xl font-bold mt-3">{offer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-7 mb-6">
                    {offer.description}
                  </CardDescription>
                  <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <a href={`${TRACKER_BASE_URL}${offer.slug}`}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Stay Ahead with AI</h2>
          <p className="mt-6 text-lg text-gray-600">
            Explore modern AI platforms that help you automate,
            create, and grow your business more efficiently.
          </p>

          <Button asChild size="lg" className="mt-10 bg-indigo-600 hover:bg-indigo-700">
            <a href="#offers">Browse Recommended Tools</a>
          </Button>
        </div>
      </section>
    </div>
  );
}