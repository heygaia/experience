// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Doto",
        cssVariable: "--font-doto",
        weights: [400, 700],
        styles: ["normal"],
        subsets: ["latin"],
        display: "swap",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});