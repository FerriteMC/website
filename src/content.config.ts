import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const DEFAULT_AUTHOR = "FerriteMC Team";
const DEFAULT_AVATAR = "https://assets.ferritemc.io/brand/ferritemc_logo.min.svg";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/posts" }),
  schema: rssSchema.extend({
    date: z.coerce.date(),
    author: z.string().default(DEFAULT_AUTHOR),
    authorAvatar: z.url().default(DEFAULT_AVATAR),
    cover: z
      .object({
        src: z.url(),
        alt: z.string().optional(),
        credit: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { posts };
