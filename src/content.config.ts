import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string().optional(),
    category: z.enum(['ML', 'Stats', 'Econ', 'Software']),
    date: z.coerce.date(),
  }),
});

export const collections = { archive };
