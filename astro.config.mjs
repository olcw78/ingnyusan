import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import markdown from "@astropub/md";
import rehypeExternalLinks from "rehype-external-links";

const sanityCfg = {
  name: "default",
  title: "ingnyusan-blog-cms",
  projectId: "07nhbugi",
  dataset: "production",
  useCdn: true,
};

const imageCfg = {
  serviceEntryPoint: "@astrojs/image/sharp",
};

// https://astro.build/config
export default defineConfig({
  site: "https://ingnyusan.com",
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
    syntaxHighlight: "shiki",
  },
  integrations: [
    mdx(),
    sitemap(),
    preact(),
    tailwind(),
    sanity(sanityCfg),
    image(imageCfg),
    prefetch(),
    markdown(),
  ],
});
