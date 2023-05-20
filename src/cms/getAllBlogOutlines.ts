import { groq, useSanityClient } from "astro-sanity";
import type { Blog } from "src/types";

const query = groq`
  *[_type == "blog"] {
   title,
   slug
  }
`;

interface BlogOutline extends Pick<Blog, "title"> {
  publishedAt: Date;
  slug: string;
}

export async function getAllBlogOutlines(): Promise<readonly BlogOutline[]> {
  const blogOutlines = await useSanityClient().fetch<readonly Blog[]>(query);
  return blogOutlines.map((outline) => ({
    title: outline.title,
    publishedAt: new Date(outline.publishedAt),
    slug: outline.slug.current,
  }));
}