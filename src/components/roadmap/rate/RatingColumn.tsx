'use client';

import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import type { UserRating } from '~/types/Roadmap.type';
import type { Technology } from '~/types/Technology.type';
import { RatedTechnologyItem } from './RatedTechnologyItem';

interface RatingColumnProps {
	technologies: Technology[];
	rating: UserRating['rating'];
	userRatings: UserRating[];
	onDrop: (
		techName: string,
		category: string,
		rating: UserRating['rating']
	) => void;
	title: string;
}

export function RatingColumn({
	technologies,
	rating,
	userRatings,
	onDrop,
	title
}: RatingColumnProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [{ isOver }, drop] = useDrop({
		accept: ['technology', 'rated-technology'],
		drop: (item: { name: string; category: string; type: string }) =>
			onDrop(item.name, item.category, rating),
		collect: (monitor) => ({
			isOver: !!monitor.isOver()
		})
	});

	drop(ref);

	const filteredTechnologies = technologies.filter((tech) => {
		const userRating = userRatings.find(
			(r) => r.technology === tech.name && r.category === tech.category
		);
		return userRating && userRating.rating === rating;
	});

	return (
		<div
			ref={ref}
			className={`min-h-[400px] flex-1 rounded-lg border-2 p-4 transition-all ${
				isOver ? 'border-primary bg-primary/10' : 'border-border'
			}`}
		>
			<h3 className="mb-4 text-center font-medium text-lg">{title}</h3>

			<div className="h-[calc(400px-4rem)] overflow-y-auto pr-2">
				<div className="space-y-2">
					{filteredTechnologies.map((tech) => (
						<RatedTechnologyItem key={tech.name} technology={tech} />
					))}

					{filteredTechnologies.length === 0 && (
						<div className="py-8 text-center text-muted-foreground text-sm">
							Drop technologies here
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
