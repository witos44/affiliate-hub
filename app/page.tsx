//app/page.tsx

import { ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Navbar Sederhana */}
      <nav className="border-b bg-white/50 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            Affiliate Hub
          </div>
          <div className="text-sm text-gray-500">
            Curated AI Tools & Reviews
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 mb-8">
          <ShieldCheck className="mr-2 h-4 w-4" />
          Verified Partner Review
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Discover the Best <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
            AI Marketing Tools
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
          We test and review the latest AI automation platforms so you don't have to. 
          Start scaling your business with data-driven insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/adenslab-review"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-gray-800 transition-all hover:scale-105"
          >
            Read ADEN's Lab Review
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <a
            href="#featured"
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
          >
            View More Tools
          </a>
        </div>
      </section>

      {/* Featured Tool Preview */}
      <section id="featured" className="bg-white py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured: ADEN's Lab
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                An all-in-one AI platform designed to automate your ad campaigns and content creation. 
                Perfect for marketers looking to save time and increase ROI.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Automated Ad Campaign Creation",
                  "AI-Powered Content Generation",
                  "Real-time Performance Analytics",
                  "Seamless Integration with Major Platforms"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/adenslab-review"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 hover:underline"
                >
                  Read full review &rarr;
                </Link>
              </div>
            </div>
            
            <div className="relative rounded-2xl bg-gray-50 p-8 border border-gray-100 shadow-xl">
              <div className="aspect-video rounded-lg bg-linear-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <TrendingUp className="h-24 w-24 text-purple-300" />
              </div>
              <div className="mt-6 text-center text-sm text-gray-500">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Affiliate Hub. All rights reserved.</p>
          <p className="mt-2">
            Transparent reviews. Verified results.
          </p>
        </div>
      </footer>
    </main>
  );
}