import { z } from "zod";



export const srcSchema = z.object({
  original: z.string(),
  large2x: z.string(),
  large: z.string(),
  medium: z.string(),
  small: z.string(),
  portrait: z.string(),
  landscape: z.string(),
  tiny: z.string(),
});
export type SrcSchema = z.infer<typeof srcSchema>;

export const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  photographer_url: z.string(),
  photographer_id: z.number(),
  avg_color: z.string(),
  src: srcSchema,
  liked: z.boolean(),
  alt: z.string(),
  blurredDataUrl: z.string().optional()
});
export type PhotoSchema = z.infer<typeof photoSchema>;

export const imageSchemaWithPhoto = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  next_page: z.string().optional(),
  prev_page: z.string().optional(),
  photos: z.array(photoSchema),
});

export type ImageSchemaWithPhoto = z.infer<typeof imageSchemaWithPhoto>;
