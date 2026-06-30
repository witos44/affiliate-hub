// components/landing/sections/Pricing/Pricing.tsx

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  button: string;
  url: string;
}

interface PricingSettings {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

interface PricingProps {
  settings: PricingSettings;
}

export default function Pricing({
  settings,
}: PricingProps) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {settings.subtitle}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {settings.plans.map((plan) => (

            <div
              key={plan.name}
              className="rounded-2xl border p-8"
            >

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-4 text-4xl font-extrabold">
                {plan.price}
              </div>

              <p className="mt-4 text-gray-600">
                {plan.description}
              </p>

              <a
                href={plan.url}
                className="mt-8 inline-flex w-full justify-center rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white"
              >
                {plan.button}
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}