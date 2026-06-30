// components/landing/sections/CTA/CTA.tsx

import type { CTASettings } from "@/types/section";

interface CTAProps {
  settings: CTASettings;
}

export default function CTA({
  settings,
}: CTAProps) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-6 text-lg text-gray-600">
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