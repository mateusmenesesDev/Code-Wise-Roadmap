import { count, eq } from "drizzle-orm";
import { z } from "zod";
import { createSkillRateSchema } from "~/schemas/skillRate.schema";
import { skillRate, technologies } from "~/server/db/schema";
import { createTRPCRouter, protectedProcedure } from "../../trpc";

export const skillRateRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createSkillRateSchema)
    .mutation(async ({ ctx, input }) => {
      const { technology, rating, userId } = input;

      const skillRateResult = await ctx.db
        .insert(skillRate)
        .values({
          rating: Math.round(rating * 100),
          technology,
          userId,
        })
        .onConflictDoUpdate({
          target: [skillRate.technology, skillRate.userId],
          set: {
            rating: Math.round(rating * 100),
          },
        });

      return skillRateResult;
    }),

  userHasRated: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId } = input;

      const skillRateResult = await ctx.db
        .select({
          count: count(),
        })
        .from(skillRate)
        .where(eq(skillRate.userId, userId));

      return skillRateResult.length > 0;
    }),

  getByUserId: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId } = input;

      const skillRateResult = await ctx.db
        .select({
          id: skillRate.id,
          userId: skillRate.userId,
          technology: skillRate.technology,
          rating: skillRate.rating,
          createdAt: skillRate.createdAt,
          updatedAt: skillRate.updatedAt,
          techDetails: {
            category: technologies.category,
            description: technologies.description,
            priority: technologies.priority,
          },
        })
        .from(skillRate)
        .leftJoin(technologies, eq(skillRate.technology, technologies.name))
        .where(eq(skillRate.userId, userId));

      console.log(skillRateResult);

      return skillRateResult;
    }),
});
