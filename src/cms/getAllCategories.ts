import { groq, useSanityClient } from "astro-sanity";

const query = groq`
  *[_type == "blog"] {
    categories
  }
`;

interface Category {
  categories: readonly string[];
};

interface CategoryResult {
  categories: readonly string[];
  eachCount: readonly number[];
}

export async function getAllCategories(): Promise<CategoryResult> {
  const categories = await useSanityClient().fetch<readonly Category[]>(query);
  const flatCategories = categories.flatMap(({ categories }) => categories);
  const unqCategories = Array.from(new Set(flatCategories));
  const eachCount = getEachCount(flatCategories);

  return {
    categories: unqCategories,
    eachCount
  };
}

function getEachCount(categories: readonly string[]): readonly number[] {
  const countMap: Record<string, number> = {};
  for (const category of categories) {
    if (countMap[category]) {
      ++countMap[category];
      continue;
    }
    countMap[category] = 1;
  }

  return Object.values(countMap);
}