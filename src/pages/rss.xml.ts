import rss from "@astrojs/rss";
import { getAllBlogs } from "../cms/getAllBlogs";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import type { Writeable } from "astro/zod";

export async function get(context: any) {
  const blogs = await getAllBlogs();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.url.href,
    customData: "<language>ko-kr</language>",

    items: blogs.map((blog) => ({
      title: blog.title,
      description: blog.brief,
      pubDate: blog.publishedAt,
      author: "yoonsang lee",
      categories: blog.categories as Writeable<string[]>,
      content:
        "<p>" +
        blog.content
          .flatMap(({ children }) => children.map((e) => e.text))
          .join("") +
        "</p>",
      link: `/blog/${blog.slug.current}/`,
    })),
  });
}
