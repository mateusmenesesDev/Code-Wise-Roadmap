'use client';

import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent } from '~/components/ui/card';
import type { UserRating } from '~/types/Roadmap.type';
import type { Technology } from '~/types/Technology.type';
import { getTechnologyGroupColor } from '~/utils/technology';

interface TechnologyItemProps {
	technology: Technology;
	userRatings: UserRating[];
}

export function TechnologyItem({
	technology,
	userRatings
}: TechnologyItemProps) {
	const ref = useRef<HTMLDivElement>(null);
	const userRating = userRatings.find(
		(r) =>
			r.technology === technology.name && r.category === technology.category
	);
	const isRated = Boolean(userRating);

	const [{ isDragging }, drag] = useDrag({
		type: 'technology',
		item: {
			name: technology.name,
			category: technology.category,
			type: 'technology'
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	});

	drag(ref);

	if (isRated) {
		return null;
	}

	return (
		<div ref={ref} className={`${isDragging ? 'opacity-50' : 'opacity-100'}`}>
			<Card
				className={`tech-card ${getTechnologyGroupColor(
					technology.category
				)} cursor-grab active:cursor-grabbing`}
			>
				<CardContent className="p-3">
					<div className="font-medium">{technology.name}</div>
					<div className="text-muted-foreground text-xs capitalize">
						{technology.category}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
