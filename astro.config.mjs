import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: "https://ingnyusan.com",
  integrations: [mdx(), sitemap(), preact(), tailwind(), sanity({
    name: "default",
    title: "ingnyusan-blog-cms",
    projectId: "07nhbugi",
    dataset: "production",
    useCdn: true
  })]
});