// components/landing/sections/FAQ/FAQ.tsx

import type { FAQSettings } from "@/types/section";

interface FAQProps {
  settings: FAQSettings;
}

export default function FAQ({
  settings,
}: FAQProps) {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-4xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {settings.items.map((faq) => (

            <div
              key={faq.question}
              className="rounded-xl border bg-white p-6"
            >

              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}