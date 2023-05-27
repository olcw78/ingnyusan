import rss, { pagesGlobToRssItems } from "@astrojs/rss";
// import { getCollection } from "astro:content";
import { getAllBlogs } from "../cms/getAllBlogs";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context: any) {
  console.log('context: ', context);

  // const posts = await getCollection('blog');
  const blogs = await getAllBlogs();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.url.href,
    customData: '<language>ko-kr</language>',
    items: blogs.map((blog) => ({
      title: blog.title,
      description: blog.brief,
      pubDate: blog.publishedAt,
      author: 'yoonsang lee',
      link: `/blog/${blog.slug.current}/`,
    })),
    // items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.mdx'))
    // items: posts.map((post) => ({
    // 	...post.data,
    // 	link: `/blog/${post.slug}/`,
    // })),
  });
}
