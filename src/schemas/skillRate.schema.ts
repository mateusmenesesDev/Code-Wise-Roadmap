import { z } from "zod";

export const skillRateSchema = z.object({
  id: z.number(),
  technology: z.string(),
  rating: z.number(),
  userId: z.string(),
  techDetails: z.object({
    category: z.string(),
    description: z.string(),
    priority: z.number(),
  }),
});

export const createSkillRateSchema = skillRateSchema.omit({
  id: true,
  techDetails: true,
});
export const updateSkillRateSchema = skillRateSchema
  .partial()
  .extend({ id: z.number() });
export const deleteSkillRateSchema = z.object({ id: z.number() });
