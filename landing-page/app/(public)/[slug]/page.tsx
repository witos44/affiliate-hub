import { notFound } from "next/navigation";

import { landingPages } from "@/data/landing-pages";

import LandingPage from "@/components/public/LandingPage";

export function generateStaticParams() {

  return Object.keys(landingPages).map((slug) => ({

    slug

  }));

}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landing = landingPages[slug];

  if (!landing) return {};

  return {
    title: landing.seo.title,
    description: landing.seo.description,
    keywords: landing.seo.keywords,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landing = landingPages[slug];

  if (!landing) {
    notFound();
  }

  return <LandingPage landing={landing} />;
}