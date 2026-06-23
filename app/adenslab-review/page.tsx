//app/adenslab-review/page.tsx

import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  Zap,
  Star,
  PlayCircle
} from "lucide-react";
import Link from "next/link";

export default function AdenslabReviewPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION: Fokus pada Masalah & Solusi Instan --- */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-8 border border-purple-100">
            <Star className="h-4 w-4 fill-purple-700" />
            <span>Editor's Choice 2024: Best AI for Ads</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Stop Wasting Budget on <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
              Ads That Don't Convert
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Creating high-converting ad campaigns usually takes days of copywriting, design, and testing. 
            <strong className="text-gray-900"> ADEN's Lab does it in 30 seconds.</strong> 
            Generate proven creatives that actually sell.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-purple-700 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Try It Free Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                No credit card required
              </span>
            </a>
            
            <button className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-purple-600 transition-colors px-6 py-4">
              <PlayCircle className="h-5 w-5" />
              Watch Demo (2 min)
            </button>
          </div>
          
          {/* Social Proof Mini */}
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 grayscale opacity-70">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Trusted by 2,000+ Marketers</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> $10M+ Ad Spend Optimized</span>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS: Mengapa Cara Lama Gagal --- */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Most Ad Campaigns Fail</h2>
            <p className="mt-4 text-gray-600">You're probably making these expensive mistakes without knowing it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard 
              icon={<Clock className="h-8 w-8 text-red-500" />}
              title="Too Slow"
              description="Spending 3 days writing copy and designing images? By the time you launch, the trend is over."
            />
            <PainPointCard 
              icon={<ShieldAlert className="h-8 w-8 text-red-500" />}
              title="Creative Fatigue"
              description="Running the same ad for weeks? Your audience ignores it, and your costs skyrocket."
            />
            <PainPointCard 
              icon={<TrendingUp className="h-8 w-8 text-red-500" />} // Using trending up but red to signify cost rising
              title="Guesswork"
              description="Hoping your headline works instead of knowing. Testing manually burns your budget fast."
            />
          </div>
        </div>
      </section>

      {/* --- SOLUTION: How ADEN's Lab Fixes It --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Turn One Idea into <br/>
                <span className="text-purple-600">100+ High-Converting Ads</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ADEN's Lab isn't just a generator; it's a complete campaign strategist. It analyzes top-performing ads in your niche and replicates their success patterns for you.
              </p>

              <ul className="space-y-6">
                <FeatureItem 
                  title="Instant Creative Generation"
                  desc="Input a URL or topic, get 50+ variations of images and copy in seconds."
                />
                <FeatureItem 
                  title="Psychology-Backed Copy"
                  desc="Uses proven persuasion frameworks (AIDA, PAS) to write headlines that click."
                />
                <FeatureItem 
                  title="Auto-Optimization"
                  desc="Connects to your ad accounts to pause losers and scale winners automatically."
                />
              </ul>
              
              <div className="mt-10">
                <a
                  href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
                  className="inline-flex items-center text-purple-700 font-bold text-lg hover:underline decoration-2 underline-offset-4"
                >
                  Start Automating Today <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Visual Representation (Abstract Dashboard) */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-purple-100 to-indigo-100 rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-6 border-b pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-auto text-xs text-gray-400 font-mono">Campaign Generator v2.0</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Your Input:</div>
                    <div className="font-medium text-gray-900">"Sell organic coffee beans to remote workers"</div>
                  </div>
                  
                  <div className="flex justify-center py-2">
                    <Zap className="h-8 w-8 text-yellow-500 animate-pulse" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border border-dashed border-gray-300">
                        <span className="text-xs text-gray-400">Ad Variant #{i}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-100">
                    <span className="text-sm font-semibold text-green-800">Predicted CTR: +45%</span>
                    <span className="text-xs text-green-600 font-medium">Ready to Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: Urgency & Benefit --- */}
      <section className="bg-gray-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Ready to 10x Your Ad Performance?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
            Join thousands of marketers who stopped guessing and started scaling. 
            Get your first 100 ad variations for free today.
          </p>
          
          <a
            href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-bold text-gray-900 shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
          >
            Get Started for Free
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
          
          <p className="mt-6 text-sm text-gray-500">
            Instant access • No setup fee • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}

// --- Helper Components ---

function PainPointCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-6 inline-flex rounded-xl bg-red-50 p-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{desc}</p>
      </div>
    </li>
  );
}