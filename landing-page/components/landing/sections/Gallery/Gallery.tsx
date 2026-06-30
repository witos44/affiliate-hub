// components/landing/sections/Gallery/Gallery.tsx

interface GalleryImage {
  image: string;
  title: string;
}

interface GallerySettings {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

interface GalleryProps {
  settings: GallerySettings;
}

export default function Gallery({
  settings,
}: GalleryProps) {
  return (
    <section className="bg-gray-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {settings.subtitle}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {settings.images.map((img) => (

            <div
              key={img.image}
              className="overflow-hidden rounded-xl border bg-white"
            >

              <img
                src={img.image}
                alt={img.title}
                className="aspect-video w-full object-cover"
              />

              <div className="p-4">

                <p className="font-semibold">
                  {img.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}