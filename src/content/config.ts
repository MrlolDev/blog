import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};

export const allCategories = [
  "artificial-intelligence",
  "machine-learning",
  "deep-learning",
  "large-language-models",
  "computer-vision",
  "natural-language-processing",
  "neural-networks",
];
