// app/adenslab-review/page.tsx

import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  Zap,
  Star,
  Bot,
  BarChart3,
  RefreshCw,
  PlayCircle,
  AlertTriangle,
  Target,
  DollarSign
} from "lucide-react";

export default function AdenslabAutomationGuidePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION: Fokus pada Waktu yang Terbuang & Solusi Otomasi --- */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700 mb-8 border border-purple-100">
            <Star className="h-4 w-4 fill-purple-700" />
            <span>The Complete Automation Framework for Media Buyers</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            How I Automated My FB & TikTok Ads <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
              To Reclaim 20 Hours a Week
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            Stop being a highly-paid data entry clerk. Manually pausing, scaling, and shifting budgets across ad accounts is killing your margins. 
            <strong className="text-gray-900"> ADEN's Lab automates the entire workflow in minutes.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-purple-700 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Start Automating Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                No credit card required
              </span>
            </a>
            
            <button className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-purple-600 transition-colors px-6 py-4">
              <PlayCircle className="h-5 w-5" />
              Watch The Workflow (2 min)
            </button>
          </div>
          
          {/* Social Proof Mini */}
          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 grayscale opacity-70">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Trusted by 2,000+ Media Buyers</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> $10M+ Ad Spend Automated</span>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS: Mengapa Cara Manual Gagal --- */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Manual Ad Management is Killing Your ROAS</h2>
            <p className="mt-4 text-gray-600">You're making these expensive mistakes every single day without realizing it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard 
              icon={<Clock className="h-8 w-8 text-red-500" />}
              title="Emotional Decision Making"
              description="Killing ads too early because of a bad morning, or scaling winners too fast and resetting the learning phase."
            />
            <PainPointCard 
              icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
              title="Cross-Platform Chaos"
              description="Toggling between Meta and TikTok Ads Manager all day. By the time you finish one, the other is bleeding budget."
            />
            <PainPointCard 
              icon={<DollarSign className="h-8 w-8 text-red-500" />}
              title="Dead Capital"
              description="Losing ads running at 3x your target CPA while you sleep. Manual management means 16 hours of wasted spend daily."
            />
          </div>
        </div>
      </section>

      {/* --- SOLUTION: The 3-Pillar Automation Framework --- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The Rule-Based Engine That <br/>
                <span className="text-purple-600">Runs Your Ads 24/7</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ADEN's Lab isn't just a dashboard. It's a rule-based execution engine that translates your media buying strategy into automated actions across Facebook and TikTok — simultaneously.
              </p>

              <ul className="space-y-6">
                <FeatureItem 
                  icon={<ShieldAlert className="h-4 w-4" />}
                  title="The Ruthless Killer"
                  desc="Automatically pauses any ad set that spends 1.5x your target CPA with zero conversions. Stops the bleeding instantly."
                />
                <FeatureItem 
                  icon={<TrendingUp className="h-4 w-4" />}
                  title="The Systematic Scaler"
                  desc="Scales winning ad sets by 20% every 3 days without resetting the learning phase. Vertical and horizontal scaling on autopilot."
                />
                <FeatureItem 
                  icon={<RefreshCw className="h-4 w-4" />}
                  title="The Budget Reallocation Engine"
                  desc="Takes budget from dying ads and automatically redistributes it to your top 20% performers. Cross-platform shifting included."
                />
                <FeatureItem 
                  icon={<BarChart3 className="h-4 w-4" />}
                  title="Unified Cross-Channel Control"
                  desc="Manage Meta and TikTok from one dashboard. Set rules that work across both platforms without toggling interfaces."
                />
              </ul>
              
              <div className="mt-10">
                <a
                  href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
                  className="inline-flex items-center text-purple-700 font-bold text-lg hover:underline decoration-2 underline-offset-4"
                >
                  See The Automation Builder <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Visual Representation (Abstract Automation Dashboard) */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-purple-100 to-indigo-100 rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-6 border-b pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="ml-auto text-xs text-gray-400 font-mono">Automation Engine v2.0</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Active Rule:</div>
                    <div className="font-medium text-gray-900 text-sm">IF CPA &gt; Target × 1.5 AND Conversions = 0 → PAUSE</div>
                  </div>
                  
                  <div className="flex justify-center py-2">
                    <Bot className="h-8 w-8 text-purple-600 animate-pulse" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <span className="text-xs font-semibold text-red-700">KILLED</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">FB Ad Set #3</div>
                      <div className="text-xs text-gray-500 mt-1">CPA: $48.20</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-semibold text-green-700">SCALED +20%</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">TikTok Ad Set #7</div>
                      <div className="text-xs text-gray-500 mt-1">CPA: $12.40</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-semibold text-green-700">SCALED +20%</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">FB Ad Set #12</div>
                      <div className="text-xs text-gray-500 mt-1">CPA: $15.80</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-xs font-semibold text-purple-700">REALLOCATED</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">Budget Shift</div>
                      <div className="text-xs text-gray-500 mt-1">+$240 freed</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-100">
                    <span className="text-sm font-semibold text-green-800">Time Saved Today: 4h 20m</span>
                    <span className="text-xs text-green-600 font-medium">ROAS +32%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SHIFT: Operator vs Strategist --- */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                From Ad Operator to Ad Strategist
              </h2>
              <p className="text-lg text-gray-600">
                Reclaiming 20 hours a week doesn't just give you your time back. It fundamentally shifts your role in the business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="inline-flex rounded-xl bg-red-50 p-4 mb-6">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Old You</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2"><span className="text-red-500">✕</span> 6 hours daily in Ads Manager</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Manual budget tweaks</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Emotional scaling decisions</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Burnout and decision fatigue</li>
                  <li className="flex gap-2"><span className="text-red-500">✕</span> Capped revenue growth</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-purple-100 shadow-sm ring-2 ring-purple-100">
                <div className="inline-flex rounded-xl bg-purple-50 p-4 mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The New You</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2"><span className="text-purple-600">✓</span> 30 min daily reviewing alerts</li>
                  <li className="flex gap-2"><span className="text-purple-600">✓</span> Rules execute automatically</li>
                  <li className="flex gap-2"><span className="text-purple-600">✓</span> Data-driven, emotionless scaling</li>
                  <li className="flex gap-2"><span className="text-purple-600">✓</span> Focus on creative strategy</li>
                  <li className="flex gap-2"><span className="text-purple-600">✓</span> Unlimited revenue scale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: Urgency & Benefit --- */}
      <section className="bg-gray-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Stop Being The Bottleneck In Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
            Build your rules. Define your logic. Let ADEN's Lab execute it flawlessly at scale across Meta and TikTok. 
            Get your first automated workflow running in under 45 minutes.
          </p>
          
          <a
            href="https://www.adenslab.com/r/ads-campaign-automation-with-adenslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-bold text-gray-900 shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
          >
            Build Your Automation Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
          
          <p className="mt-6 text-sm text-gray-500">
            Instant access • Works with Meta & TikTok • Cancel anytime
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

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{desc}</p>
      </div>
    </li>
  );
}