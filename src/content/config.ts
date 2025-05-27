import { defineCollection, z } from "astro:content";

const logs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    date: z.coerce.date(),
  }),
});

//export const collections = { blog, work, projects };
export const collections = { logs, products };
