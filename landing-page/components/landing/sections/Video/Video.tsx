// components/landing/sections/Video/Video.tsx

interface VideoSettings {
  title: string;
  subtitle: string;
  url: string;
}

interface VideoProps {
  settings: VideoSettings;
}

export default function Video({
  settings,
}: VideoProps) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-center text-4xl font-bold">
          {settings.title}
        </h2>

        <p className="mt-4 text-center text-gray-600">
          {settings.subtitle}
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border shadow">

          <iframe
            src={settings.url}
            className="aspect-video w-full"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}