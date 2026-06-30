// components/landing/sections/Features/Features.tsx

import type { FeaturesSettings } from "@/types/section";

interface FeaturesProps {
  settings: FeaturesSettings;
}

export default function Features({
  settings,
}: FeaturesProps) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-8 md:grid-cols-3">

          {settings.items.map((feature) => (

            <div
              key={feature.title}
              className="rounded-xl border bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}