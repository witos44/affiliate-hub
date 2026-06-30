// mocks/landing-admin.ts

import type { LandingPage } from "@/types/landing";

export const mockLandingAdmin: LandingPage[] = [
  {
    id: 1,
    slug: "ads-campaign-automation",
    title: "Ads Campaign Automation",
    template: "default",
    status: "published",
    metaTitle: "Ads Campaign Automation with AI | Affiliate Hub",
    metaDescription:
      "Automate your advertising campaigns using AI. Save hours and improve performance with intelligent automation.",
    ogImage: "https://affiliate-hub.example.com/og-image.jpg",
    offer: {
      id: 1,
      merchantName: "AdensLab",
      offerName: "Ads Campaign Automation with AI",
      offerSlug: "adenslab",
      affiliateUrl:
        "https://www.adenslab.com/r/ads-campaign-automation-with-adenslab",
      description:
        "AI-powered advertising automation platform for marketers, agencies, and growing businesses.",
      category: "AI",
      status: "published",
    },
    sections: [
      {
        id: 1,
        landingPageId: 1,
        type: "hero",
        sortOrder: 1,
        isActive: true,
        settings: {
          badge: "AI Advertising",
          title: "Run Smarter Ad Campaigns with AI",
          subtitle:
            "Save hours managing ads while improving performance using intelligent automation.",
          buttonText: "Start Free",
          buttonUrl: "/out/adenslab",
        },
      },
      {
        id: 2,
        landingPageId: 1,
        type: "benefits",
        sortOrder: 2,
        isActive: true,
        settings: {
          items: [
            "Reduce manual campaign management",
            "Optimize advertising performance",
            "Scale campaigns faster",
            "No technical skills required",
          ],
        },
      },
    ],
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-15T00:00:00Z",
    publishedAt: "2025-01-15T00:00:00Z",
  },
  {
    id: 2,
    slug: "ai-automation-for-business",
    title: "AI Automation for Business",
    template: "default",
    status: "draft",
    metaTitle: "AI Automation for Business | Affiliate Hub",
    metaDescription:
      "Discover how AI automation can transform your business workflows and boost productivity.",
    ogImage: "https://affiliate-hub.example.com/ai-automation-og.jpg",
    offer: {
      id: 1,
      merchantName: "AdensLab",
      offerName: "AI Automation for Business",
      offerSlug: "ai-automation-business",
      affiliateUrl:
        "https://www.adenslab.com/r/ai-automation-for-business",
      description:
        "AI automation platform for businesses to streamline operations and increase efficiency.",
      category: "AI",
      status: "published",
    },
    sections: [
      {
        id: 10,
        landingPageId: 2,
        type: "hero",
        sortOrder: 1,
        isActive: true,
        settings: {
          badge: "Business Automation",
          title: "Automate Your Business with AI",
          subtitle:
            "Streamline workflows, reduce manual tasks, and boost productivity with intelligent automation.",
          buttonText: "Get Started",
          buttonUrl: "/out/ai-automation",
        },
      },
      {
        id: 11,
        landingPageId: 2,
        type: "features",
        sortOrder: 2,
        isActive: true,
        settings: {
          items: [
            {
              title: "Workflow Automation",
              description: "Automate repetitive business processes.",
            },
            {
              title: "Smart Analytics",
              description: "Gain insights from AI-powered data analysis.",
            },
            {
              title: "Easy Integration",
              description: "Connect with your existing tools seamlessly.",
            },
          ],
        },
      },
    ],
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2025-02-10T00:00:00Z",
  },
];