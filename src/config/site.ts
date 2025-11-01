export const siteConfig = {
  name: "The Experience Company",
  short_name: "experience",
  logo_text: "/logo_text.webp",
  logo: "/logo.svg",
  logo_2: "/logo_2.webp",
  url: "https://experience.heygaia.io",
  description: "We create delightful digital experiences.",
  lang: "en",

  ogImage: "/og-image.webp",
  twitterCard: "summary_large_image" as const,

  social: {
    twitter: "@madebyexp",
    github: "heygaia",
    email: "hi@heygaia.io",
  },

  keywords: [
    "the experience company",
    "experience",
    "madebyexp",
    "experience company",
    "gaia",
    "technology",
    "software",
    "development",
    "design",
    "digital experiences",
  ],
  author: "Experience Company",
} as const;

export type SiteConfig = typeof siteConfig;
