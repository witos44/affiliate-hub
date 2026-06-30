// components/landing/sections/Solution/Solution.tsx

import type { SolutionSettings } from "@/types/section";

interface SolutionProps {
  settings: SolutionSettings;
}

export default function Solution({
  settings,
}: SolutionProps) {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {settings.description}
        </p>

      </div>

    </section>
  );
}