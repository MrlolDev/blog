import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};

export const allTags = [
  "artificial-intelligence",
  "machine-learning",
  "deep-learning",
  "large-language-models",
  "computer-vision",
  "natural-language-processing",
  "neural-networks",
  "personal",
];

export const SpanishTags = {
  "artificial-intelligence": "Inteligencia Artificial",
  "machine-learning": "Machine Learning",
  "deep-learning": "Deep Learning",
  "large-language-models": "Modelos de Lenguaje Grandes(LLMs)",
  "computer-vision": "Visión por Computador",
  "natural-language-processing": "Procesamiento de Lenguaje Natural",
  "neural-networks": "Redes Neuronales",
  personal: "Personal",
};
