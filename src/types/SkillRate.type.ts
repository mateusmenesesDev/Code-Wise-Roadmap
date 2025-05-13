import type { z } from "zod";
import type {
  createSkillRateSchema,
  deleteSkillRateSchema,
  skillRateSchema,
  updateSkillRateSchema,
} from "~/schemas/skillRate.schema";

export type SkillRate = z.infer<typeof skillRateSchema>;
export type CreateSkillRate = z.infer<typeof createSkillRateSchema>;
export type UpdateSkillRate = z.infer<typeof updateSkillRateSchema>;
export type DeleteSkillRate = z.infer<typeof deleteSkillRateSchema>;
