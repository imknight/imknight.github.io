import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const logs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/logs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { logs, products };
