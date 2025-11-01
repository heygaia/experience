import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const images = [
    {
      loc: `${siteConfig.url}/og-image.webp`,
      title: "The Experience Company",
      caption:
        "A team of hackers, engineers, and designers building technology that matters",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/gaia.webp`,
      title: "GAIA - Personal AI Assistant",
      caption:
        "GAIA logo - An intelligent personal AI assistant for productivity and organization",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/logo.svg`,
      title: "The Experience Company Logo",
      caption: "Official logo of The Experience Company",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/logo_2.webp`,
      title: "The Experience Company Brand Logo",
      caption: "Alternative brand logo of The Experience Company",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/logo_text.webp`,
      title: "The Experience Company Logo with Text",
      caption: "The Experience Company logo with text branding",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/evolution.webp`,
      title: "Evolution of Technology",
      caption:
        "Visual representation of technological evolution and innovation",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/adam.webp`,
      title: "The creation of adam",
      caption: "The creation of Adam - The Experience Company",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
    {
      loc: `${siteConfig.url}/apple-touch-icon.png`,
      title: "The Experience Company iOS Icon",
      caption: "Apple touch icon for The Experience Company website",
      geoLocation: "Global",
      license: `${siteConfig.url}`,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteConfig.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    ${images
      .map(
        (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:geo_location>${img.geoLocation}</image:geo_location>
      <image:license>${img.license}</image:license>
    </image:image>`
      )
      .join("")}
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
