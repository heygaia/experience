export const siteConfig = {
  name: "The Experience Company",
  url: "https://experience.company",
  description: "We create delightful digital experiences.",
  lang: "en",

  ogImage: "/og-image.png",
  twitterCard: "summary_large_image" as const,

  social: {
    twitter: "@experiencecompany",
    github: "experiencecompany",
    email: "aryan@heygaia.io",
  },

  keywords: [
    "the experience company",
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
