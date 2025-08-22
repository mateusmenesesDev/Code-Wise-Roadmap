import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/components/ui/select';
import { categories } from '~/constants';
import { useAuth } from '~/hooks/useAuth';
import { api } from '~/trpc/react';
import { CategoryView } from './category/CategoryView';
import { RecommendedProjects } from './projects/RecommendedProjects';
import { RatingsView } from './ratings/RatingsView';

type RoadmapViewProps = {
	userId?: string;
};

export function RoadmapView({ userId }: RoadmapViewProps) {
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const { user } = useAuth();

	const userRatings = api.skillRate.getByUserId.useQuery({
		userId: userId || user?.id || ''
	});

	if (userRatings.isLoading) {
		return <div>Loading...</div>;
	}

	if (!userRatings.data) {
		return (
			<div className="py-16 text-center">
				<h2 className="mb-4 font-bold text-2xl">No Roadmap Generated</h2>
				<p className="mb-6 text-muted-foreground">
					Rate your skills in the technologies to generate a personalized
					roadmap.
				</p>
			</div>
		);
	}

	// category technologies by their rating
	const techByRating: Record<string, typeof userRatings.data> = {
		'0': [],
		'25': [],
		'50': [],
		'75': [],
		'100': []
	};

	console.log('techByRating', techByRating);

	for (const tech of userRatings.data || []) {
		const rating = tech.rating;

		switch (rating) {
			case 0:
				techByRating['0']?.push(tech);
				break;
			case 25:
				techByRating['25']?.push(tech);
				break;
			case 50:
				techByRating['50']?.push(tech);
				break;
			case 75:
				techByRating['75']?.push(tech);
				break;
			case 100:
				techByRating['100']?.push(tech);
				break;
			default:
				techByRating['0']?.push(tech);
				break;
		}
	}

	const techByCategories = userRatings.data?.reduce(
		(acc, tech) => {
			if (!acc[tech.techDetails?.category || '']) {
				acc[tech.techDetails?.category || ''] = [];
			}
			acc[tech.techDetails?.category || '']?.push(tech);
			return acc;
		},
		{} as Record<string, typeof userRatings.data>
	);

	const filteredTechByRating = Object.entries(techByRating).reduce(
		(acc, [rating, techs]) => {
			acc[rating] = techs.filter(
				(tech) =>
					selectedCategory === 'all' ||
					tech.techDetails?.category === selectedCategory
			);
			return acc;
		},
		{} as Record<string, typeof userRatings.data>
	);

	const filteredTechByCategories = Object.entries(
		techByCategories || {}
	).reduce(
		(acc, [category, techs]) => {
			if (selectedCategory === 'all' || category === selectedCategory) {
				acc[category] = techs;
			}
			return acc;
		},
		{} as Record<string, typeof userRatings.data>
	);

	return (
		<div className="space-y-8">
			<div>
				<h2 className="mb-2 font-bold text-2xl">Your Learning Roadmap</h2>
				<p className="text-muted-foreground">
					Based on your skill ratings, here's your personalized learning path.
					Focus on areas with lower ratings first.
				</p>

				<div className="mt-4">
					<Select value={selectedCategory} onValueChange={setSelectedCategory}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Filter by category" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Categories</SelectItem>
							{categories.map((category) => (
								<SelectItem key={category.name} value={category.name}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<RatingsView techByRating={filteredTechByRating} />

			<CategoryView
				techByCategories={filteredTechByCategories}
				userRatings={userRatings.data}
			/>

			<RecommendedProjects />
		</div>
	);
}
