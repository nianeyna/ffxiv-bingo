import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cards = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/*.{yml,yaml}' }),
  schema: z.object({
    label: z.string(),
    squares: z.array(z.string())
  }),
});

export const collections = { cards };
