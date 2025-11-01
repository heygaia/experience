import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, imageSitemapURL: URL) => `\
User-agent: *
Allow: /
Allow: /gaia.webp
Allow: /og-image.webp
Allow: /logo.svg
Allow: /logo_2.webp
Allow: /*.webp$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.svg$
Allow: /

Sitemap: ${sitemapURL.href}
Sitemap: ${imageSitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  const imageSitemapURL = new URL("image-sitemap.xml", site);
  return new Response(getRobotsTxt(sitemapURL, imageSitemapURL));
};
