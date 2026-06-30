// components/landing/sections/Testimonials/Testimonials.tsx

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

interface TestimonialsSettings {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

interface TestimonialsProps {
  settings: TestimonialsSettings;
}

export default function Testimonials({
  settings,
}: TestimonialsProps) {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {settings.subtitle}
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {settings.items.map((item) => (

            <div
              key={item.name}
              className="rounded-xl border bg-white p-8"
            >

              <p className="italic">
                "{item.message}"
              </p>

              <div className="mt-6">

                <div className="font-bold">
                  {item.name}
                </div>

                <div className="text-sm text-gray-500">
                  {item.role}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}