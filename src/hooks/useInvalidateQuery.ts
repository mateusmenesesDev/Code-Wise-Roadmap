'use client';

import type { AppRouter } from '~/server/api/root';
import { api } from '~/trpc/react';

export const useInvalidateQuery = () => {
	const trpcUtils = api.useUtils();

	const invalidateQuery = (router: keyof AppRouter, queryKey?: string) => {
		if (queryKey) {
			// @ts-expect-error - TRPC utils typing issue
			trpcUtils[router][queryKey].invalidate();
		} else {
			// @ts-expect-error - TRPC utils typing issue
			trpcUtils[router].invalidate();
		}
	};

	return {
		invalidateQuery
	};
};
