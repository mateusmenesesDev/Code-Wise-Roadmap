import type { z } from 'zod';
import type {
	createTechnologySchema,
	deleteTechnologySchema,
	technologySchema,
	updateTechnologySchema
} from '~/schemas/technology.schema';

export type Technology = z.infer<typeof technologySchema>;
export type CreateTechnology = z.infer<typeof createTechnologySchema>;
export type UpdateTechnology = z.infer<typeof updateTechnologySchema>;
export type DeleteTechnology = z.infer<typeof deleteTechnologySchema>;
