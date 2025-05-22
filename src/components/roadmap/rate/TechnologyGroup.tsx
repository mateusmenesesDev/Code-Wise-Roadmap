import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '~/components/ui/collapsible';
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
	const [isOpen, setIsOpen] = useState(false);
	const unratedTechs = technologies.filter(
		(tech) => !userRatings.some((r) => r.technology === tech.name)
	);

	if (unratedTechs.length === 0) return null;

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between bg-card p-4 text-left transition-colors hover:bg-card/90">
				<div className="flex items-center gap-3">
					<div className="flex items-center justify-center rounded-full bg-muted p-2">
						{<category.Icon className={category.iconColor} />}
					</div>
					<h3 className="font-medium text-xl">{category.name}</h3>
					<span className="text-muted-foreground text-sm">
						({unratedTechs.length} unrated)
					</span>
				</div>
				<div className="flex items-center">
					{isOpen ? (
						<ChevronUp className="h-5 w-5 text-muted-foreground" />
					) : (
						<ChevronDown className="h-5 w-5 text-muted-foreground" />
					)}
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="border p-4">
				<div className="space-y-4">
					<h3 className="font-medium text-xl">{category.name}</h3>
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						{unratedTechs.map((tech) => (
							<TechnologyItem
								key={tech.id}
								technology={tech}
								userRatings={userRatings}
							/>
						))}
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
