// app/(public)/[slug]/page.tsx

import LandingRenderer from "@/components/landing/LandingRenderer";
import { getLanding, getLandingList } from "@/lib/api";

export async function generateStaticParams() {
  try {
    const landings = await getLandingList();
    return landings.map((item) => ({
      slug: item.slug,
    }));
  } catch (error) {
    // Fallback jika API gagal (misal di build)
    console.warn("Failed to fetch landing list, using fallback:", error);
    return [
      {
        slug: "ads-campaign-automation",
      },
    ];
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;

  const landing = await getLanding(slug);

  if (!landing) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold">Landing not found</h1>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
      </div>
    );
  }

  return <LandingRenderer sections={landing.sections} />;
}