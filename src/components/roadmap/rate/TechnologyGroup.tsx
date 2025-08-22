import CollapsibleCategory from '~/components/CollapsibleCategory';
import type { Category } from '~/types/Category.type';
import type { UserRating } from '~/types/Roadmap.type';
import type { Technology } from '~/types/Technology.type';
import { TechnologyItem } from './TechnologyItem';

interface TechnologyGroupProps {
	category: Category;
	technologies: Technology[];
	userRatings: UserRating[];
}

export function TechnologyGroup({
	category,
	technologies,
	userRatings
}: TechnologyGroupProps) {
	const unratedTechs = technologies.filter(
		(tech) =>
			!userRatings.some(
				(r) => r.technology === tech.name && r.category === tech.category
			)
	);

	if (unratedTechs.length === 0) return null;

	return (
		<CollapsibleCategory
			title={category.name}
			icon={<category.Icon className={category.iconColor} />}
			iconColor={category.iconColor}
			techCount={unratedTechs.length}
			className="mb-2"
		>
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
				{unratedTechs.map((tech) => (
					<TechnologyItem
						key={tech.id}
						technology={tech}
						userRatings={userRatings}
					/>
				))}
			</div>
		</CollapsibleCategory>
	);
}
