// components/landing/sections/Benefits/Benefits.tsx

import type { BenefitsSettings } from "@/types/section";

interface BenefitsProps {
  settings: BenefitsSettings;
}

export default function Benefits({
  settings,
}: BenefitsProps) {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-6xl px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {settings.items.map((item) => (

            <div
              key={item}
              className="rounded-xl border bg-white p-6 text-center shadow-sm"
            >
              <h3 className="font-semibold text-lg">
                {item}
              </h3>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}