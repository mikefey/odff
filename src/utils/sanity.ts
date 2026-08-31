import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(_createdAt desc){ _id, title, slug, excerpt, publishedAt }`
);

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, body, excerpt, publishedAt }`
);

export async function getPosts() {
  return await sanityClient.fetch(POSTS_QUERY);
}

export async function getPost(slug: string) {
  return await sanityClient.fetch(POST_QUERY, { slug });
}

export async function getPostSlugs() {
  const SLUGS_QUERY = defineQuery(
    `*[_type == "post" && defined(slug.current)]{ "params": { "slug": slug.current } }`
  );
  return await sanityClient.fetch(SLUGS_QUERY);
}
