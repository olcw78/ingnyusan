import { groq, useSanityClient } from "astro-sanity";
import type { Blog } from "src/types";

const query = groq`
  *[_type == "blog"] {
   title,
   slug {
    current
   },
   publishedAt,
  }
`;

interface BlogOutline extends Pick<Blog, "title"> {
  publishedAt: Date;
  slug: string;
}

export async function getAllBlogOutlines(): Promise<readonly BlogOutline[]> {
  const blogOutlines = await useSanityClient().fetch<readonly Blog[]>(query);

  return blogOutlines.map((outline) => {
    const newDate = new Date(outline.publishedAt);
    return {
      title: outline.title,
      publishedAt: `${newDate.getFullYear()} 년 ${newDate.getMonth() + 1} 월 ${newDate.getDate()} 일`,
      slug: outline.slug.current,
    };
  });
}