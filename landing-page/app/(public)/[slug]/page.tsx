// app/(public)/[slug]/page.tsx

import LandingRenderer from "@/components/landing/LandingRenderer";
import { getLanding } from "@/lib/api";

export function generateStaticParams() {
  return [
    {
      slug: "ads-campaign-automation",
    },
  ];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LandingPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const landing = await getLanding(slug);

  if (!landing) {
    return (
      <div className="py-32 text-center">
        Landing not found.
      </div>
    );
  }

  return (
    <LandingRenderer
      sections={landing.sections}
    />
  );
}