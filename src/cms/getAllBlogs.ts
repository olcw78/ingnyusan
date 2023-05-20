import { groq, useSanityClient } from "astro-sanity";
import type { Blog } from "../types";

const query = groq`
  *[_type == "blog"] {
    title,
    slug {
      current
    },
    publishedAt,
    isPrivate,
    password,
    categories,
    content
  }
`;

interface FilteredBlog extends Omit<Blog, "content"> {
  content: readonly {
    type: string;
    text: string;
  }[];
}

export async function getAllBlogs(): Promise<readonly FilteredBlog[]> {
  const fetchedBlogs = await useSanityClient().fetch<readonly Blog[]>(query);
  return fetchedBlogs.map((blog) => ({
    ...blog,
    content: blog.content.flatMap(({ children }) =>
      children.map((child) => ({
        type: child._type,
        text: child.text,
      }))
    )
  }));
}

