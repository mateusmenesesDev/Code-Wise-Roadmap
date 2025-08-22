import { z } from 'zod';

export const technologySchema = z.object({
	id: z.number(),
	name: z.string().min(1, 'Name is required'),
	category: z.string().min(1, 'Category is required'),
	priority: z.coerce.number().min(1, 'Priority is required'),
	description: z.string().min(1, 'Description is required')
});

export const createTechnologySchema = technologySchema.omit({ id: true });
export const updateTechnologySchema = technologySchema
	.omit({ id: true })
	.partial()
	.extend({ id: z.number() });

export const deleteTechnologySchema = z.object({
	id: z.number()
});
