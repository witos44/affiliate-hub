// components/landing/sections/Comparison/Comparison.tsx

interface ComparisonItem {
  feature: string;
  us: string;
  others: string;
}

interface ComparisonSettings {
  title: string;
  subtitle: string;
  items: ComparisonItem[];
}

interface ComparisonProps {
  settings: ComparisonSettings;
}

export default function Comparison({
  settings,
}: ComparisonProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {settings.subtitle}
        </p>

        <div className="mt-12 overflow-x-auto">

          <table className="w-full border-collapse rounded-xl border">

            <thead>

              <tr className="bg-gray-50">

                <th className="border p-4 text-left">
                  Feature
                </th>

                <th className="border p-4">
                  Our Recommendation
                </th>

                <th className="border p-4">
                  Alternatives
                </th>

              </tr>

            </thead>

            <tbody>

              {settings.items.map((item) => (

                <tr key={item.feature}>

                  <td className="border p-4">
                    {item.feature}
                  </td>

                  <td className="border p-4 text-center">
                    {item.us}
                  </td>

                  <td className="border p-4 text-center">
                    {item.others}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}