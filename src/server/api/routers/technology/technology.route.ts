import { TRPCError } from '@trpc/server';
import { eq } from 'drizzle-orm';
import {
	createTechnologySchema,
	deleteTechnologySchema,
	updateTechnologySchema
} from '~/schemas/technology.schema';
import {
	adminProcedure,
	createTRPCRouter,
	publicProcedure
} from '~/server/api/trpc';
import { technologies } from '~/server/db/schema';

export const technologyRouter = createTRPCRouter({
	create: adminProcedure
		.input(createTechnologySchema)
		.mutation(async ({ ctx, input }) => {
			try {
				const technology = await ctx.db.insert(technologies).values({
					...input,
					name: input.name.toUpperCase()
				});
				return technology;
			} catch (error) {
				if (
					error instanceof Error &&
					error.message.includes(
						'duplicate key value violates unique constraint'
					)
				) {
					throw new TRPCError({
						code: 'CONFLICT',
						message:
							'A technology with this name already exists in this category'
					});
				}
				throw error;
			}
		}),

	getAll: publicProcedure.query(async ({ ctx }) => {
		const technologiesData = await ctx.db
			.select()
			.from(technologies)
			.orderBy(technologies.category, technologies.priority);
		return technologiesData;
	}),

	update: adminProcedure
		.input(updateTechnologySchema)
		.mutation(async ({ ctx, input }) => {
			const technology = await ctx.db
				.update(technologies)
				.set({
					...input,
					name: input.name ? input.name.toUpperCase() : input.name
				})
				.where(eq(technologies.id, input.id));
			return technology;
		}),

	delete: adminProcedure
		.input(deleteTechnologySchema)
		.mutation(async ({ ctx, input }) => {
			const technology = await ctx.db
				.delete(technologies)
				.where(eq(technologies.id, input.id));
			return technology;
		})
});
