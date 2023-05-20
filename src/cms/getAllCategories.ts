import { groq, useSanityClient } from "astro-sanity";

const query = groq`
  *[_type == "blog"] {
    categories
  }
`;

interface Category {
  categories: readonly string[];
};
export async function getAllCategories(): Promise<readonly string[]> {
  const categories = await useSanityClient().fetch<readonly Category[]>(query);

  const unqCategories = new Set([...categories.flatMap(({ categories }) => categories)]);
  return Array.from(unqCategories);
}