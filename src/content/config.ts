import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
  title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	categories: z.array(z.string()),
  })
});

export const collections = {
  'blog': blogCollection
};