// components/landing/sections/Problem/Problem.tsx

import type { ProblemSettings } from "@/types/section";

interface ProblemProps {
  settings: ProblemSettings;
}

export default function Problem({
  settings,
}: ProblemProps) {
  return (
    <section className="py-24">

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