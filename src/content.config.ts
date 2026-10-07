import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['expeditions', 'beta-library', 'random-sends']),
    tags: z.array(z.string()).default([]),
    grade: z.enum(['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']).default('V0'),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    location: z.object({
      name: z.string(),
      country: z.string(),
      lat: z.number().optional(),
      lng: z.number().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
