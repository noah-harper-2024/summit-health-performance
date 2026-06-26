import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection.
 *
 * To add a new blog post: create a new `.md` file in `src/content/blog/`.
 * The filename (minus `.md`) becomes the URL slug, e.g.
 *   src/content/blog/desk-posture-tips.md  ->  /blog/desk-posture-tips/
 *
 * Each post needs the frontmatter fields below at the top of the file.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Dr. Seth Graham'),
      // Optional hero image. Put the file in src/content/blog/ (or a subfolder)
      // and reference it relatively, e.g. heroImage: ./my-image.jpg
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
