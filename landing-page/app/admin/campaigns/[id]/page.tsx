// app/campaigns/[id]/page.tsx

import { CheckCircle, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

// ============================================================================
// 1. GENERATE STATIC PARAMS (WAJIB untuk static export)
// ============================================================================
export async function generateStaticParams() {
  // Semua harus menggunakan properti "id" karena parameter rute adalah [id]
  return [
    { id: 'ad-automation' },
    { id: 'scaling-case-study' },
    { id: 'exclusive-bonus' },
  ];
}

// Opsional: jika ingin edge runtime di Cloudflare
// export const runtime = 'edge';
export const dynamic = 'force-static';

// ============================================================================
// TEMPLATE 1: THE DIRECT PROBLEM-SOLUTION (B2B / Aggressive & Professional)
// ============================================================================
function TemplateProblemSolution({ trackerUrl }: { trackerUrl: string }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative px-6 py-24 sm:py-32 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase mb-4 block">
            The #1 Ad Automation Platform
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6">
            Stop Lighting Your Ad Budget On Fire.
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 mb-10 max-w-2xl mx-auto">
            Our AI-driven system relentlessly monitors your campaigns 24/7. It kills losing ads instantly and aggressively scales your winners. Maximum ROI, zero manual work.
          </p>
          <a
            href={trackerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
          >
            Start Your 14-Day Free Trial <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-slate-400 font-medium">No credit card required. Setup takes 3 minutes.</p>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ruthless Optimization</h3>
            <p className="text-slate-600 leading-relaxed">
              Why wait days to analyze data? Our system pauses unprofitable ad sets within minutes based on strict algorithmic rules. You never waste a single dollar.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Scale Your Winners</h3>
            <p className="text-slate-600 leading-relaxed">
              When an ad strikes gold, our AI automatically injects more budget into it, multiplying your profits exponentially while your competitors sleep.
            </p>
          </div>
          <div>
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ironclad Ban Protection</h3>
            <p className="text-slate-600 leading-relaxed">
              Tired of sudden account restrictions? Our built-in compliance shield constantly monitors your account health to prevent devastating ad account bans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// TEMPLATE 2: THE STORY / CASE STUDY (Editorial / Soft Pitch)
// ============================================================================
function TemplateCaseStudy({ trackerUrl }: { trackerUrl: string }) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 sm:p-14">
          <span className="text-sm font-bold text-emerald-600 mb-6 block uppercase tracking-widest">
            Exclusive Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            How a Bootstrapped E-Com Brand Scaled From $1k to $10k/Day (Without Changing Their Ad Creatives).
          </h1>
          <div className="flex items-center space-x-4 mb-10 pb-10 border-b border-slate-100">
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-xl">A</div>
            <div>
              <p className="text-base font-bold text-slate-900">By The Adenslab Growth Team</p>
              <p className="text-sm text-slate-500">Read time: 4 minutes</p>
            </div>
          </div>
          
          <div className="prose prose-slate prose-xl text-slate-600 space-y-8">
            <p className="font-medium text-slate-800 text-2xl leading-relaxed">
              It was 2 AM, and their founder was staring at the Facebook Ads Manager in panic. They were bleeding cash.
            </p>
            <p>
              Last year, we noticed a devastating pattern wiping out online business owners. They had phenomenal products, highly engaging videos, and beautiful landing pages. But their profit margins were constantly getting crushed by unpredictable ad costs.
            </p>
            <p>
              We took over a struggling account that was burning nearly $1,000 a day. Their Return on Ad Spend (ROAS) was stuck at a miserable 1.2x. They were one bad week away from shutting down.
            </p>
            
            <h3 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The "Lazy" Tweak That Changed Everything</h3>
            <p>
              We didn't shoot new videos. We didn't rewrite their entire website. Instead, we plugged in a "silent" automation protocol.
            </p>
            <p>
              This system ruthlessly tracked conversions in real-time. If an ad set didn't hit its target KPI within 3 hours, the system killed it. No emotions, no waiting "just in case it gets better." When an ad performed well, the system aggressively duplicated and scaled it.
            </p>
            
            <ul className="space-y-4 font-bold text-slate-800 my-10 bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
              <li className="flex gap-4 items-center"><CheckCircle className="w-7 h-7 text-emerald-500 shrink-0" /> Cost Per Acquisition (CPA) dropped by a massive 47%.</li>
              <li className="flex gap-4 items-center"><CheckCircle className="w-7 h-7 text-emerald-500 shrink-0" /> Overall ROAS skyrocketed to 4.2x within 7 days.</li>
              <li className="flex gap-4 items-center"><CheckCircle className="w-7 h-7 text-emerald-500 shrink-0" /> Daily revenue hit $10,000 completely hands-free.</li>
            </ul>
            
            <p>
              The best part? You don't need an expensive engineering team to build this infrastructure. We packaged the exact same algorithm into a plug-and-play software.
            </p>
          </div>

          <div className="mt-14 bg-slate-900 p-10 rounded-3xl text-center shadow-2xl">
            <h4 className="text-2xl font-bold text-white mb-6">Want to replicate this exact setup for your campaigns?</h4>
            <a
              href={trackerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 text-slate-900 font-extrabold text-lg px-8 py-4 rounded-xl hover:bg-emerald-400 transition-all hover:-translate-y-1"
            >
              Unlock The Automation System Now
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

// ============================================================================
// TEMPLATE 3: THE EXCLUSIVE BONUS (Urgency / Lead Magnet)
// ============================================================================
function TemplateBonus({ trackerUrl }: { trackerUrl: string }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        
        <div className="p-10 sm:p-16 md:w-3/5">
          <div className="inline-block bg-red-100 text-red-600 text-sm font-extrabold px-4 py-2 rounded-full uppercase tracking-widest mb-8">
            Flash Bonus Offer
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">
            Steal Our $5,000/Month Agency Tracking Blueprint.
          </h1>
          <p className="text-slate-600 mb-10 text-xl leading-relaxed">
            Register through this secret page today and instantly download the exact Notion workspace top-tier marketers use to manage 7-figure ad budgets. <span className="font-bold text-slate-900">Yours absolutely FREE.</span>
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
              <p className="text-slate-800 font-bold text-lg">Automated ROI tracking dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
              <p className="text-slate-800 font-bold text-lg">Plug-and-play client reporting templates</p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
              <p className="text-slate-800 font-bold text-lg">Built-in Break-Even Point (BEP) calculator</p>
            </div>
          </div>

          <a
            href={trackerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-600 text-white font-black text-xl px-8 py-5 rounded-2xl hover:bg-red-700 shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1"
          >
            Yes! Send Me The Free Bonus
          </a>
          <p className="text-center text-sm text-slate-400 mt-6 font-medium">
            🔒 Secure connection. Your bonus is delivered instantly via email.
          </p>
        </div>

        <div className="bg-slate-50 md:w-2/5 p-10 border-l border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="w-full aspect-square max-w-70 bg-slate-200 rounded-3xl mb-8 flex items-center justify-center text-slate-400 font-bold text-xl border-8 border-white shadow-2xl rotate-6 transition-transform hover:rotate-0">
            [Insert E-Cover / Notion Template Mockup Here]
          </div>
          <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 w-full">
            <h3 className="text-lg font-bold text-slate-500 mb-2 uppercase tracking-wider">Real World Value</h3>
            <p className="text-5xl font-black text-slate-300 line-through mb-1">$97.00</p>
            <p className="text-5xl font-black text-emerald-500">$0.00</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT (DIPERBAIKI UNTUK NEXT.JS 16)
// ============================================================================
export default async function DynamicLandingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params karena Next.js 16 mengirim sebagai Promise
  const { id } = await params;

  // Tracker URL menggunakan id (yang bertindak sebagai slug)
  const trackerUrl = `https://affiliate-hub-tracker.affiliate-hub.workers.dev/out/${id}`;

  // Routing berdasarkan id (slug)
  switch (id) {
    case "ad-automation":
      return <TemplateProblemSolution trackerUrl={trackerUrl} />;
    case "scaling-case-study":
      return <TemplateCaseStudy trackerUrl={trackerUrl} />;
    case "exclusive-bonus":
      return <TemplateBonus trackerUrl={trackerUrl} />;
    default:
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900">
          <h1 className="text-4xl font-bold mb-4">Offer Not Found</h1>
          <p className="text-slate-500 mb-8">
            The campaign you are looking for may have ended or the URL is incorrect.
          </p>
          <Link href="/" className="text-indigo-600 hover:underline">
            Return to Homepage
          </Link>
        </div>
      );
  }
}