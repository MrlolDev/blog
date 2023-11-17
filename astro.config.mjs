import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mrlol.me",
  experimental: {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "es"],
      routingStrategy: "prefix-always",
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
