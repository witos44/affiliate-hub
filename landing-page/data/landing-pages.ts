import type { LandingPageData } from "@/types/landing";

export const landingPages: Record<string, LandingPageData> = {

  "ai-automation-for-business": {

    slug: "ai-automation-for-business",

    offerSlug: "adenslab",

    hero: {

      badge: "AI Automation",

      title: "Build an AI Workforce That Never Sleeps",

      subtitle:
        "Automate repetitive work, improve productivity, and grow your business using AI-powered workflows.",

      cta: "Start Free"

    },

    benefits: [

      "Save hours every week",

      "Reduce operational costs",

      "Increase productivity",

      "No coding required"

    ],

    features: [

      {

        title: "AI-Powered Automation",

        description:
          "Automate repetitive business tasks using modern AI workflows."

      },

      {

        title: "Improve Productivity",

        description:
          "Spend more time growing your business instead of repetitive work."

      },

      {

        title: "Easy to Get Started",

        description:
          "No complicated setup or technical expertise required."

      }

    ],

    problem: {

      title:
        "Too Much Busy Work. Too Little Time.",

      description:
        "Many businesses spend countless hours answering emails, creating content, organizing information, and handling repetitive workflows."

    },

    solution: {

      title:
        "Let AI Handle the Repetitive Work.",

      description:
        "Modern AI automation platforms can assist with customer support, content creation, research, and business operations so you can focus on growth."

    },

    trust: [

      "Business Owners",

      "Developers",

      "Marketing Teams",

      "Growing Startups"

    ],

    faqs: [

      {

        question:
          "Who is this platform for?",

        answer:
          "Business owners, marketers, developers, agencies, freelancers, and anyone looking to automate repetitive work."

      },

      {

        question:
          "Do I need coding skills?",

        answer:
          "No. Most automation tools are beginner-friendly and require little or no programming knowledge."

      }

    ],

    seo: {

      title:
        "AI Automation for Business",

      description:
        "Discover AI automation tools that help businesses save time and increase productivity.",

      keywords: [

        "AI Automation",

        "Business Automation",

        "AI Tools"

      ]

    }

  }

};