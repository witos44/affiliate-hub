// components/landing/sections/Hero/Hero.tsx

import type { HeroSettings } from "@/types/section";

interface HeroProps {
  settings: HeroSettings;
}

export default function Hero({
  settings,
}: HeroProps) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
          {settings.badge}
        </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-6xl">
          {settings.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-600">
          {settings.subtitle}
        </p>

        <a
          href={settings.buttonUrl}
          className="mt-10 inline-flex rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700"
        >
          {settings.buttonText}
        </a>

      </div>
    </section>
  );
}