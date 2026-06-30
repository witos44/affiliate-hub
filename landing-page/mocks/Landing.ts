// mocks/Landing.ts

import type { LandingResponse } from "@/types/api";

export const mockLanding: LandingResponse = {

  success: true,

  data: {

    id: 1,

    slug: "ads-campaign-automation",

    title: "Ads Campaign Automation",

    template: "default",

    status: "published",

    offer: {

      id: 1,

      merchantName: "AdensLab",

      offerName: "Ads Campaign Automation with AI",

      offerSlug: "adenslab",

      affiliateUrl:
        "https://www.adenslab.com/r/ads-campaign-automation-with-adenslab",

      description:
        "Automate your advertising campaigns using AI.",

      category: "AI",

      status: "published"

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
          buttonUrl: "/out/adenslab"
        }
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
            "No technical skills required"
          ]
        }
      },

      {
        id: 3,
        landingPageId: 1,
        type: "problem",
        sortOrder: 3,
        isActive: true,
        settings: {
          title: "Managing Ads Shouldn't Consume Your Entire Day",
          description:
            "Launching, optimizing, monitoring, and scaling campaigns manually wastes valuable time and often leads to inconsistent performance."
        }
      },

      {
        id: 4,
        landingPageId: 1,
        type: "solution",
        sortOrder: 4,
        isActive: true,
        settings: {
          title: "AI Works Around the Clock",
          description:
            "AdensLab continuously helps you automate repetitive advertising tasks so you can focus on business growth."
        }
      },

      {
        id: 5,
        landingPageId: 1,
        type: "features",
        sortOrder: 5,
        isActive: true,
        settings: {
          items: [

            {
              title: "AI Campaign Automation",
              description:
                "Automate repetitive campaign management."
            },

            {
              title: "Performance Optimization",
              description:
                "Improve campaign efficiency with AI suggestions."
            },

            {
              title: "Easy Setup",
              description:
                "Get started within minutes."
            }

          ]
        }
      },

      {
        id: 6,
        landingPageId: 1,
        type: "comparison",
        sortOrder: 6,
        isActive: true,
        settings: {

          title: "Why Choose AdensLab?",

          subtitle:
            "See how AI automation compares with manual campaign management.",

          items: [

            {
              feature: "Campaign Optimization",
              us: "Automatic",
              others: "Manual"
            },

            {
              feature: "Time Required",
              us: "Minutes",
              others: "Hours"
            },

            {
              feature: "Learning Curve",
              us: "Easy",
              others: "Complex"
            }

          ]

        }
      },

      {
        id: 7,
        landingPageId: 1,
        type: "testimonials",
        sortOrder: 7,
        isActive: true,
        settings: {

          title: "Trusted by Growing Businesses",

          subtitle:
            "Professionals use AI to simplify advertising.",

          items: [

            {

              name: "Sarah Johnson",

              role: "Marketing Manager",

              message:
                "We reduced campaign management time by more than 70%."

            },

            {

              name: "David Lee",

              role: "Agency Owner",

              message:
                "The automation alone paid for itself in the first month."

            },

            {

              name: "Michael Brown",

              role: "Entrepreneur",

              message:
                "Simple to use and surprisingly powerful."

            }

          ]

        }
      },

      {
        id: 8,
        landingPageId: 1,
        type: "faq",
        sortOrder: 8,
        isActive: true,
        settings: {

          items: [

            {

              question:
                "Do I need advertising experience?",

              answer:
                "No. The platform is designed for beginners and professionals alike."

            },

            {

              question:
                "Can small businesses use it?",

              answer:
                "Absolutely. It works for freelancers, startups, agencies, and enterprises."

            }

          ]

        }
      },

      {
        id: 9,
        landingPageId: 1,
        type: "cta",
        sortOrder: 9,
        isActive: true,
        settings: {

          title:
            "Start Automating Your Advertising Today",

          subtitle:
            "Join businesses using AI to save time and improve advertising performance.",

          buttonText:
            "Get Started",

          buttonUrl:
            "/out/adenslab"

        }

      }

    ]

  }

};