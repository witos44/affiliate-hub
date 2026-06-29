// app/(public)/layout.tsx

import { Roboto } from 'next/font/google';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Konfigurasi font Roboto dengan next/font
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${roboto.variable} min-h-screen flex flex-col bg-white text-gray-900 font-sans`}>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Affiliate Hub
          </a>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#offers" className="hover:text-indigo-600 transition-colors">
              AI Tools
            </a>
            <a href="/ai-automation-for-business" className="hover:text-indigo-600 transition-colors">
              Automation
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Global CTA */}
      <section className="bg-indigo-600">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to Work Smarter?
          </h2>
          <p className="mt-4 text-indigo-100">
            Explore AI platforms that help automate your work and grow your business.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="mt-8 bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
          >
            <a href="/#offers">Explore AI Tools</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-white font-bold text-lg">
                Affiliate Hub
              </h3>
              <p className="mt-4 text-sm leading-7">
                Discover carefully selected AI platforms,
                automation software,
                and productivity tools for modern businesses.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold">
                Resources
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/ai-automation-for-business" className="hover:text-white transition-colors">
                    AI Automation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold">
                Legal
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-gray-400">
                  Privacy Policy
                </li>
                <li className="text-gray-400">
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mt-12 bg-gray-800" />
          
          <div className="pt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Affiliate Hub.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}