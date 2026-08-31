import { sanityClient } from 'sanity:client';
import { defineQuery } from 'groq';
import { createImageUrlBuilder } from '@sanity/image-url';

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(_createdAt desc){ _id, title, slug, excerpt, publishedAt }`
);

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, body, excerpt, publishedAt }`
);

const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]{
    header {
      buyTicketsLabel,
      buyTicketsUrl,
      bookRoomLabel,
      bookRoomUrl,
      headerBadge { asset->{ _id, url }, alt, hotspot, crop }
    },
    hero {
      dateRange,
      location,
      monogram { asset->{ _id, url }, alt, hotspot, crop },
      title,
      body,
      botanicalIllustration { asset->{ _id, url }, alt, hotspot, crop },
      quote
    },
    footer {
      contactEmail
    }
  }`
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

export async function getSiteSettings() {
  return await sanityClient.fetch(SITE_SETTINGS_QUERY);
}
