import { groq, useSanityClient } from 'astro-sanity'
import type { Blog } from '../types'

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
`

export async function getAllBlogs(): Promise<readonly Blog[]> {
  const fetchedBlogs = await useSanityClient().fetch<readonly Blog[]>(query)
  return fetchedBlogs
}
