import { groq, useSanityClient } from 'astro-sanity'
import type { Blog } from 'src/types'

const query = groq`
  *[_type == "blog"] {
    title,
    slug {
     current
    },
    brief,
    categories,
    publishedAt,
  }
`

interface BlogOutline extends Pick<Blog, 'title' | 'brief'> {
  publishedAt: string
  slug: string
  categories: readonly string[]
}

export async function getAllBlogOutlines(): Promise<readonly BlogOutline[]> {
  const blogOutlines = await useSanityClient().fetch<readonly Blog[]>(query)
  return blogOutlines.map(outline => {
    const newDate = new Date(outline.publishedAt)
    return {
      ...outline,
      publishedAt: `${newDate.getMonth() + 1}월 ${newDate.getDate()}일`,
      slug: outline.slug.current,
    }
  })
}
